var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Car = mongoose.model('Car', new Schema({
        make : String,
        model : String,
        model_id : String,
        year : Number,
        added_date : Date
    })
);

module.exports.add = function(data, cb){
    var car = new Car;
    car.lease_term = data.lease_term;
    car.dealer_id = data.dealer_id;
    car.car_id = data.car_id;
    car.signing_due = data.signing_due;
    car.monthly_lease_price = data.monthly_lease_price;
    car.save(function(err, response){
        if(err){
            cb(err);
        }
        cb(false,response);
    })
}


module.exports.search = function(query, cb){
    Car.find(query, function(err,cars){
        if(err) {
            cb(err);
        }
        cb(false, cars);
    });
}