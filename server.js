//require dependecies
var 
	express = require('express');

var app = express();

//parse application/x-www-form-urlencoded

app.get('/', (req,res) => {

	const headers = {
		ip: req.connection.remoteAddress,
		language:req.headers['accept-language'].match(/[^,]*/)[0], 	
		software:req.headers['user-agent'].match(/\(.+\;.+\d\)/)[0], 	
	}
		res.send(headers);
});

app.listen(8080);
