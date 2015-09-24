//MVC1a for routes
var mongoose = require('mongoose');
var user = mongoose.model('User');


//MVC2h moved to model

// //MVC2c for controller
var users = require('../controllers/users.js');

// var users = require('../controllers/users.js');


//start MVC1d export
module.exports = function(app) {
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	//start routes1
	//root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
		//console.log('home page loaded');
	})

		//route login
	app.post('/login', function (req, res) {
		//console.log('rou login', req.body)
		users.adduser(req, res)
	})

	//route to display data from db
	app.get('/getusers', function (req, res) {
		//test http://localhost:8080/getlists
		//hard-coded json data
		// res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		users.getusers(req,res)

		//MVC-test
		// Quote.find({}, function (err, quotes) {
		// 	res.render('main', {quotes:quotes});
		// });
	})


}//ends MVC export
