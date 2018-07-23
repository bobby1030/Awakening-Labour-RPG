const path = require('path');
const express = require('express');
const uuid = require('node-uuid');
const app = express();
const expressWs = require('express-ws')(app);

let genDefaultScheduleData = require('../configs/ScheduleTemplate.js').default;
let stateStore = {
	dataSet: genDefaultScheduleData(),
	progressWeek: {
		Jan: 6,
		Feb: 1,
	}
};

const updateState = (mutation, payload) => {
	if (mutation === 'updateInputData') {
		stateStore.dataSet[payload.month][payload.week].data[payload.worker.id][payload.name] = payload.value;
	} else if (mutation === 'updateStrike') {
		stateStore.dataSet[payload.month][payload.week].columns[payload.index].strike = payload.value;
	} else if (mutation === 'updateBonus') {
		stateStore.dataSet[payload.month][payload.week].columns[payload.index].bonus = payload.value;
	} else if (mutation === 'updateProgressWeek') {
		stateStore.progressWeek[payload.month] = payload.value;
	}
};

app.ws('/api', (ws, req) => {
	ws.id = uuid.v4().substring(0, 8);
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