var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/board");

var db = mongoose.connection;

//db.on("error",console.err);

db.on("error",function(){
	console.log("connection error");
});

db.once("open",function(){
	console.log("Connected to mongod server");
});

