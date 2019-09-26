var express = require('express')
var app = express();
var fs = require('fs');
var access = require('./access');
var inc = require('./increment');
var rate = require('./rate');

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/province/:provinceName', function (req, res) {
	access.accessFile(req.params.provinceName, res);
	inc.incrementRequest(req, res);
})

app.post('/rate', function (req, res) {
	inc.incrementRequest(req, res);
	rate.rateProvince(req, res);
})

app.all('*', function(req, res, next) {
	inc.incrementRequest(req, res);
	next();
})

app.use(express.static('public'));
app.use(express.static('assets/images'));

app.listen(3000, function () {
	console.log("Listening to port *3000");
});