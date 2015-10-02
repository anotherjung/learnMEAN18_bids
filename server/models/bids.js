//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var BidSchema = new mongoose.Schema({
	//customer: String,
	amount: String,
	created: {type: Date, default: new Date},
	//this is an object
	_user: {type: Schema.ObjectId, ref:'User'},
	_product: {type: Schema.ObjectId, ref:'Product'}
});

var Bid = mongoose.model('Bid', BidSchema);
//ends model
