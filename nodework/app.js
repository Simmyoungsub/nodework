var path = require("path");
var firebase = require("firebase"); 
var express = require("express");
var app = express(); 
var server = require("http").createServer(app);
var bodyParser = require('body-parser');
var port = 3000;
var config = require("./config/mongodb.js");
var board = require('./routes/route.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//로컬에서 돌릴때는 주석 처리
//firebase.intializeApp({serviceAccount: ""}); 

server.listen(port, function () {     
	console.log("Server listening on port %d", port); 
});

app.use(express.static(__dirname + "/public"));
app.use('/board', board);
