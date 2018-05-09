//require dependecies
var 
	express = require('express');

var app = express();

//parse application/x-www-form-urlencoded

app.get('/', (req,res) => {

	const ua = req.headers['user-agent'],
	headers = {
		ip:req.headers['x-forwarded-for'], 	
		language:req.headers['accept-language'], 	
		software:req.headers['user-agent'].match(/\(.+\;.+\d\)/), 	
	}
		res.send(headers);
});

app.listen(8080);
