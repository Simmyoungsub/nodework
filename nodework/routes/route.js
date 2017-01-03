var express = require('express');
var router = express.Router();
var board = require("./boardSchema.js");

router.get('/',function(req,res){
	
	res.render('board');
	
});

router.get("/write",function(req,res){
	res.render("write");
});

router.post('/boardGetList.json', function(req, res) {
	
	var reqmap = {};
	
	reqmap.id=req.body.id;
	
	board.find(reqmap,function(err,rows){
		if(err){
			console.log(err);
		}else{
			console.log(rows);
		}
	});
	
});

router.post('/boardWrite.json', function(req, res) {
	
	console.log("call boardwrite.json");
	
	var reqmap = {};
	var irow = new board();
	
	reqmap=req.body;
	irow.id = reqmap.id;
	irow.title = reqmap.title;
	irow.username = reqmap.username;
	irow.regDate = reqmap.regDate;
	
	irow.save(function(err,rows){
		if(err){
			console.log(err);
			return err;
		}else{
			console.log(rows);
			console.log("insert row success");
			return true;
		}
	});
	
});

var mapToString = function(str){
	var str_array = [];
	str_array = str.split(",");
	
	console.log(str_array);
};

module.exports = router;