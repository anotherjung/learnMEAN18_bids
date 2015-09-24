//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var UserSchema = new mongoose.Schema({
	name: String,
	created_date: {type: Date, default: new Date}
});

var User = mongoose.model('User', UserSchema);
//ends model
