var mongoose = require("mongoose");
const Schema = mongoose.Schema;;

module.exports.getUser =  function(req,res){
    console.log("getuser called");
    res.send("okkkkk");
}

module.exports.saveUser = function(req, res){
	console.log(req.body, "req data");
	res.send("okkkkkkkk");
}