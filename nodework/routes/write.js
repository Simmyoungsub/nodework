var express = require('express');
var router = express.Router();
var board = require("./boardSchema.js");

router.get("/",function(req,res){
	res.render("write");
});

module.exports = router;