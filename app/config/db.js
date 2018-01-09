var mongoose = require('mongoose');
var db;

module.exports.connect = function(cb){
    if(mongoose.connection.readyState != 1 ||  mongoose.connection.readyState != 2){
    	mongoose.connect('mongodb://34.239.27.78/cars');
	    db = mongoose.connection;
	    db.on('error', function(){ cb(false, "Error in database connection")} );
	    cb(db);	
    }
    cb(false);    
}

module.exports.get = function(cb){
    cb(db);
}
