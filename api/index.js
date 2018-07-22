const path = require('path');
const express = require('express');
const uuid = require('node-uuid');
const app = express();
const expressWs = require('express-ws')(app);


let genDefaultScheduleData = require('../configs/ScheduleTemplate.js').default;
let stateStore = genDefaultScheduleData();

const updateState = (mutation, payload) => {
	if (mutation === 'updateInputData') {
		stateStore[payload.month][payload.week].data[payload.worker.id][payload.name] = payload.value;
	} else if (mutation === 'updateStrike') {
		stateStore[payload.month][payload.week].columns[payload.index].strike = payload.value;
	} else if (mutation === 'updateBonus') {
		stateStore[payload.month][payload.week].columns[payload.index].bonus = payload.value;
	}
};

app.ws('/api', (ws, req) => {
	ws.id = uuid.v4();
	console.log(`[${new Date().toLocaleString()}][ESTABLISHED]: ${ws.id}`);

	console.log(`[${new Date().toLocaleString()}][SEND] Initial state: ${ws.id}`)
	ws.send(JSON.stringify(stateStore));
	
	let clients = expressWs.getWss().clients;

	ws.on('message', (msg) => {
		msg = JSON.parse(msg);
		console.log(`[${new Date().toLocaleString()}][RECEIVED]: ${ws.id}`);

		updateState(msg.mutationType, msg.payload);

		clients.forEach((client) => {
			if (client !== ws) {
				console.log(`[${new Date().toLocaleString()}][SEND] State: ${client.id}`)
				client.send(JSON.stringify(stateStore));
			}
		});
	});
});

app.use('/', express.static(path.resolve(__dirname, '../static/dist')));

console.log(`Serving: ${process.env.PORT}`);
app.listen(process.env.PORT);