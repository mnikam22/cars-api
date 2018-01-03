var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Make = mongoose.model('Make', new Schema({ 
        name: String,
        make_id : String    
    })
);

const Model = mongoose.model('Model', new Schema({
    make_id : String,
    name : String,
    type : String,
    model_id: String
}))

module.exports.addMakes = function(data, cb){
    Make.remove({}, function(err1, response1){
        Make.insertMany(data , function(err, response){
            if(err){
                cb(err);
            }
            cb(false,response);
        })    
    })
}


module.exports.listAllMakes= function(cb){
    Make.find({}, function(err, makes){
        if(err) cb(err);
        cb(false, makes);
    })
}

module.exports.listAllModelsByMakeId= function(makeId , cb){
    Model.find({make_id:makeId}, function(err, models){
        if(err) cb(err);
        cb(false, models);
    })
}



module.exports.addModelsByMakeId = function(makeId, data, cb){    
    Model.remove({make_id: makeId }, function(err1, response1){
        Model.insertMany(data, function(err, response){
            if(err){
                cb(err);
            }
            cb(false,response);
        })
    })    
}

/* 
module.exports.findModels = function(data, cb){
    Model.find(data, function(err, models){
        if(err) {
            cb(err);
        }
        cb(false, models);        
    })
}

module.exports.findAllMakes = function(data, cb){
    Make.find({}, function(err,makes){
        if(err) {
            cb(err);
        }
        cb(false, makes);        
    });
} */