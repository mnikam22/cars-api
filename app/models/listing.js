var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Listing = mongoose.model('Listing', new Schema({
    car_id : String,
    dealer_id : String,
    lease_term : Number,
    miles_per_year : Number, 
    signing_due : String, 
    monthly_lease_price : String,
    added_date : Date
    })
);

module.exports.add = function(data, cb){
    var list = new Listing;
    list.lease_term = data.lease_term;
    list.dealer_id = data.dealer_id;
    list.car_id = data.car_id;
    list.signing_due = data.signing_due;
    list.monthly_lease_price = data.monthly_lease_price;
    list.save(function(err, response){
        if(err){
            cb(err);
        }          
        cb(false,response);
    })
}


module.exports.search = function(query, cb){
    Listing.find(query, function(err,listings){        
        if(err) {
            cb(err);
        }
        cb(false, listings);        
    });
}