const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

app.ws('/api', (ws, req) => {
	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(`WS established: ${ip}`);

	clients = expressWs.getWss().clients

	ws.on('message', (msg) => {
		console.log(`from: ${ip},\n received: ${msg}`)

		clients.forEach((client) => {
			if (client !== ws) {
				client.send(`echo: ${msg}`);
			}
		});
	});
});

app.listen(8080);