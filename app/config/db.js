var mongoose = require('mongoose');
var db;
const nconf = require("nconf").argv();

module.exports.connect = function(cb){
    var mongoHost =  (nconf.get('MONGO_HOST') &&  nconf.get('MONGO_HOST') != '') ? nconf.get('MONGO_HOST') : "localhost";
    var mongoPort =  (nconf.get('MONGO_PORT') &&  nconf.get('MONGO_PORT') != '') ? nconf.get('MONGO_PORT') : 27017;   
    
    if(mongoose.connection.readyState != 1 ||  mongoose.connection.readyState != 2){
    	mongoose.connect('mongodb://'+mongoHost+':'+mongoPort+'/cars');
	    db = mongoose.connection;
	    db.on('error', function(){ cb("Error in database connection")} );
	    cb(false,db);
    }
    cb(false);
}

module.exports.get = function(cb){
    cb(false,db);
}
