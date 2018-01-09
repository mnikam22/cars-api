var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Listing = mongoose.model('Listing', new Schema({
    dealer_id : String,
    model_id : String,
    year: Number,
    term_of_lease : Number, 
    miles_per_year: Number,
    fuel_type: String,
    average_city : Number,
    average_highway : Number,
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
    listing.vin_number = data.vin_number ? data.vin_number : 'N/A';
    listing.color = data.color;
    listing.money_down = data.money_down? data.money_down: 'N/A';
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