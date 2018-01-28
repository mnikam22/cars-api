const car = require('../../../models/car');
const listing = require('../../../models/listing');
const https = require('https');
const http = require('http');
const path = require('path'), fs = require('fs');
const helpers = require("../../../services/helpers");


module.exports.getModelData = function(req, res){
    let modelId = req.params.modelId;
    car.getModelData(modelId, function(err, response1){
        if(err) {res.status(501).send(err)}
        res.send(response1);
    })
}
