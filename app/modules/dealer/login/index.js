var dealer = require('../../../models/dealer');
var md5 = require("md5");
var jwtsign = require('jsonwebtoken');

module.exports.dealerLogin = function(req,res){
	var data = req.body;
	dealer.find(data, function(err, dealer){
		if(err){
			res.status(500).send(err);
		}
		else{
			if(dealer.password == md5(data.password)){
                // Generate token now
                var loginToken = jwtsign.sign({email : dealer.email}, 'Car-Deals-2017shhhhHHHHH');
                res.send({error:false, token: loginToken});
            }
            res.status(401).send({ error:true , message : "Invalid credentials."});
		}
	})
}