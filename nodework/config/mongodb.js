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

module.exports = {
	
		boardGetList : function(id){
			
			var resmap = [];
			resmap = db.collection("board").find({},function(err,res){
				console.log(res[0].id);
				console.log(res[0].title);
			});
			
			console.log(resmap);
			console.log("call complete!");
		}
		
};