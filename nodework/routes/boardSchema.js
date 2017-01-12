var mongoose = require("mongoose");

var Schema = mongoose.Schema
var boardSchema = new Schema({
	id : String,
	username : String,
	title : String,
	regDate : Date,
	content : String
});

module.exports =  mongoose.model('board', boardSchema);