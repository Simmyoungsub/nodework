var path = process.cwd();
var firebase = require("firebase"); 
var express = require("express");
var app = express(); 
var server = require("http").createServer(app);
var fs = require("fs");
var bodyParser = require('body-parser');
var mysql = require("mysql");
var io = require("socket.io")(server);
var port = process.env.PORT || 3000;
var config = require(path+"/config/db.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

//로컬에서 돌릴때는 주석 처리
//firebase.intializeApp({serviceAccount: ""}); 

server.listen(port, function () {     
	console.log("Server listening on port %d", port); 
	
});

app.use(express.static(__dirname + "/public"));

io.on("connection", function (socket) {     
	console.log("Connected and ready!");


	firebaseRef.on("value", function (snapshot) {         
		var colorChange = snapshot.val();
		console.log("snapshot R: " + colorChange.r);         
		console.log("snapshot B: " + colorChange.b);         
		console.log("snapshot G: " + colorChange.g);
	});
});

app.post("/test.json",function(req,res){
		console.log(req.body.id);
});

app.post("/boardGetList.json",function(req,res){
	
	console.log("boardGetList.json");
	
	var id = req.body.id;
	
	console.log("id : " + id);
	
	//sql 데이터 가져오기
	//map으로 반환
	//console.log(config);
	config.boardGetList(id);
});
