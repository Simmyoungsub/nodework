var express = require('express');
var router = express.Router();
var board = require("./boardSchema.js");

router.get('/',function(req,res){
	
	res.render('board/board');
	
});

router.get("/write",function(req,res){
	res.render("board/write");
});

router.post('/boardGetList.json', function(req, res) {
	
	console.log("boardGetList");
	
	var reqmap = {},
		skipPage = (req.body.currentPage-1)*10,
		pageSize = 10;
		
	reqmap.id=req.body.id;
	
	board.find(reqmap).skip(skipPage).limit(pageSize).exec(function(err,rows){
		if(err){
			console.log(err);
			return false;
		}else{
			res.send({"result" : rows});
			return rows;
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
	irow.content = reqmap.content;
	
	irow.save(function(err,rows){
		if(err){
			console.log(err);
			return err;
		}else{
			console.log(rows);
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