var mongoose = require("mongoose");
var md5 = require("md5");

const Schema = mongoose.Schema;
var Listing = mongoose.model('Listing', new Schema({ 
    dealer_id : String,
    model_id : String, 
    term_of_lease : Number, 
    miles_per_year: Number,
    monthly_lease_price: Number,
    vin_number : String,
    color : String,
    money_down: Number
    })
);

module.exports.save = function(data, cb){
    var listing = new Listing;
    listing.dealer_id = data.dealer_id;
    listing.model_id = data.model_id;
    listing.term_of_lease = data.term_of_lease;
    listing.monthly_lease_price = data.monthly_lease_price;
    listing.vin_number = data.vin_number;
    listing.color = data.color;
    listing.money_down = data.money_down;
    //dealer.mobile = data.mobile;
    listing.save(function(err, response){
        if(err){
            cb(err);
        }
        cb(false,response);
    })
}


module.exports.find = function(data, cb){
    Dealer.findOne({email: data.email }, function(err,dealer){        
        if(err) {
            cb(err);
        }
        cb(false, dealer);        
    });
}