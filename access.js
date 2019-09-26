var fs = require('fs');
exports.accessFile = function(req, res) {
	fs.readFile('./provinces/'+req+'.json',function (e,data){
		if(e){
			res.sendStatus(404);
		}
		var content =JSON.parse(data);
		res.render('province',{
			name: content.name,
			rating: content.rating,
			group: content.group,
			image1: content.image1,
			image2: content.image2,
			image3: content.image3,
			province: content.province,
			population: content.population,
			delicacies: content.delicacies,
			description: content.description
		})
	})
}