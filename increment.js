var fs = require('fs');
var page_request = 0;
exports.incrementRequest = function(req, res) {
	page_request++;
	fs.writeFile("page_request" + '.txt', page_request, function (err) {
	  if (err) throw err;
	  console.log('Page request is '+ page_request);
	})
}