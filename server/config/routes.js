//MVC1a for routes
var mongoose = require('mongoose');
var user = mongoose.model('User');
var products = mongoose.model('Product');
var bids = mongoose.model('Bid');


//MVC2h moved to model

// //MVC2c for controller
var users = require('../controllers/users.js');
var products = require('../controllers/products.js');
var bids = require('../controllers/bids.js');



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

	
	//route to display data from db
	app.get('/getproducts', function (req, res) {
		//test http://localhost:8080/getproducts
		//hard-coded json data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		products.getproducts(req,res)

		//MVC-test
		// Quote.find({}, function (err, quotes) {
		// 	res.render('main', {quotes:quotes});
		// });
	})

	//route to add data to db
	app.post('/addproduct', function (req, res) {
		//console.log('rou addproduct', req.body)
		products.addproduct(req,res)
	})

	//route to add data to db
	app.post('/deleteproduct', function (req, res) {
		//console.log('rou deleteproduct', req.body)
		products.deleteproduct(req,res)
	})




	//route to display data from db
	app.get('/getbids', function (req, res) {
		//test http://localhost:8080/getproducts
		//hard-coded json data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		bids.getbids(req,res)

		//MVC-test
		// Quote.find({}, function (err, quotes) {
		// 	res.render('main', {quotes:quotes});
		// });
	})

	//route to add data to db
	app.post('/addbid', function (req, res) {
		console.log('rou addbid', req.body)
		bids.addbid(req,res)
	})






}//ends MVC export
