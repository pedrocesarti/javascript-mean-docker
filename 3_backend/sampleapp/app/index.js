var express = require('express');
var os = require("os");

var app = express();

app.get('/', function (req, res) {
	var response = {
		hostname: os.hostname(),
		uptime: os.uptime(),
		totalmem: os.totalmem(),
		freemem: os.freemem(),
		arch: os.arch(),
		platform: os.platform()
	};
  	res.json(response);
});

app.listen(5000);
console.log('Running on http://localhost');
