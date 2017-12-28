var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var User = mongoose.model('User', new Schema({ name: String,email : String, password : String, parent: Number }));

module.exports.saveUser = function(user, cb) {
    var newUser  	 = new User;
    newUser.name  	 = "Tushar";
    newUser.email    = "tnikam21@gmail.com";
    newUser.password = "password";
    newUser.save(function(data){
    	console.log("New user created successfully");
    	cb(data);
    },
    function(err){
    	console.log("Error occured in creating new user");
    	db(err);
    });
}