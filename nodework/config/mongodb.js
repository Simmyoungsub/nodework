var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("localhost:27017/board");

var db = mongoose.connection;

/*var Schema = mongoose.Schema
var boardSchema = new Schema({
	id : String,
	title : String
});

var board = mongoose.model("board",boardSchema);
*/
db.on("error",function(){
	console.log("connection error");
});

db.once("open",function(){
	console.log("Connected to mongod server");
});

module.exports = {
	
		boardGetList : function(id){
			
			/*board.find({}).exec(function(err,res){
				console.log(res);
			});

			console.log("call complete!");*/
		}
		
};