var mysql = require("mysql");

var db_param = {
		"host" : "",
		"port" : ,
		"user" : "",
		"password" : "",
		"database" : ""
};

var connection = mysql.createConnection(db_param);

module.exports = {

	boardGetList : function(id){
		var param = {"id" : id};
		
		connectDB();
		
		connection.query("select id, password from user_info where ?",param,function(err,result){
			
			if(result === null || result === undefined){
				
			}else{
				
			}
			
		});
		
		disconnectDB();
	}

};

var connectDB = function(){
	connection.connect(function(err){
		if(err){
			console.error("mysql connection error");
			console.error(err);
			throw err;
		}else{
			console.log("database connect");
		}
	});
};

var disconnectDB = function(){
	connection.end();
};