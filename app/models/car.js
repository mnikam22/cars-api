var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Make = mongoose.model('Make', new Schema({ 
        name: String,
        make_id : String,
        logo : String
    })
);

const Model = mongoose.model('Model', new Schema({
        make_id : String,
        name : String,
        type : String,
        model_id: String
    })
);

const ModelImage = mongoose.model('Model_Image', new Schema({ 
        image_name: String,
        model_id : String
    })
);

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

module.exports.listAllMakes = function(cb){
    Make.find({}, function(err, makes){
        if(err) cb(err);
        cb(false, makes);
    })
}

module.exports.listAllModelsByMakeId= function(makeId , cb){
    Model.find({make_id:makeId}, function(err, makeModels){
        if(err) cb(err);
        cb(false, makeModels);
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


module.exports.findModels = function(data, cb){
    Model.find(data, function(err, models){
        if(err) {
            cb(err);
        }
        cb(false, models);        
    })
}

module.exports.findMakes = function(data, cb){
    Make.find(data, function(err, makes){
        if(err) {
            cb(err);
        }
        cb(false, makes);        
    })
}


module.exports.searchMakes = function(make, cb){
    Make.find({name : new RegExp(make, 'i')}, function(err, makes){
        if(err) {
            cb(err);
        }
        cb(false, makes);
    })
}

module.exports.searchModels = function(make, cb){
    Model.find({name : new RegExp(make, 'i')}, function(err, models){
        if(err) {
            cb(err);
        }
        cb(false, models);
    })
}

module.exports.addModelImage = function(data,cb){
    var modelImage =  new ModelImage;
    modelImage.model_id = data.model_id;
    modelImage.image_name = data.image_name;
    modelImage.save(function(err, imgres){
        if(err) cb(err);
        cb(false,imgres);
    });
}

module.exports.updateMakeLogo = function(data,cb){
    Make.findById(data.make_id, function(err, make){
        if(err){
            cb(err)
        }
        make.logo = data.logo ;
        make.save(function(err2, saved){
            if (err) cb(err2);
            cb(false, "Logo added successfully!");
        });
    });    
}

/*
module.exports.findAllMakes = function(data, cb){
    Make.find({}, function(err,makes){
        if(err) {
            cb(err);
        }
        cb(false, makes);        
    });
} */