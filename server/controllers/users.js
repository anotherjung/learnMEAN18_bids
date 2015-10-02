// //MVC2a controllers
var mongoose = require('mongoose');
var User = mongoose.model('User');



//MVC2b export
module.exports =  {
	getusers: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC model
		User.find({}, function(err, results) {
	       if(err) {
	         //console.log('err con show', err);
	       } else {
	         res.json(results);
	         //console.log('con show', results)
	       }
		})
	},

	adduser: function(req, res) {
		//console.log('con addfriend', req.body.name);
		var friends = new User({name:req.body.name, created:Date.now()});
		friends.save(function(err) {
			// console.log('11');
			if(err) {
				//console.log("err con create", err);
			} else {
				console.log("addfriend", friends);
				//res.redirect('/');
				res.json(friends);
			}
		})
	}
}