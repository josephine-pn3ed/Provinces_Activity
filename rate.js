var fs = require('fs');
var access = require('./access');
exports.rateProvince = function(req, res) {
	req.on('data', function (req) {
            store = JSON.parse(req);
            fs.readFile('./'+store.province+'.json', function (e, data) {
            	if (e) {
            		console.log(404);
            		res.sendStatus(404);
            	}
            	var content = JSON.parse(data);
            	var initial = (parseInt(store.rating, 10) + parseInt(content.rating, 10)) / 2;
                if (content.rating == 0) {
                    content.rating = store.rating * 1
                }
                else {
                    content.rating = initial
            	}
            	console.log(initial + '');
            	res.send(''+content.rating);
            	var jsonContent = JSON.stringify(content);
            	fs.writeFile('./'+store.province+'.json',  jsonContent, 'utf8', function(err) {
				    if(err) {
				        return console.log(err);
				    }
				}); 
            })
        });
    req.on('end', function () {})
}