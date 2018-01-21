const car = require('../../../models/car');
const https = require('https');
const http = require('http');
const path = require('path'), fs = require('fs');
const helpers = require("../../../services/helpers");

module.exports.searchCars = function(req,res){
	let query  = req.params.query.toLowerCase();
	query = decodeURIComponent(query);
	console.log(query, "query data");
	var resturnArr = [];
	car.searchMakes(query , function(err, makes){
		if(err){
			res.send({error:true , message :err });
		}
		else{
			if(makes.length){
				resturnArr = makes;
				car.listAllModelsByMakeId(makes[0].make_id, function(err, makeModels){
					if(err){
						res.send({error:false , data : resturnArr});
					}
					else{
						resturnArr = resturnArr.concat(makeModels);
						res.send({error:false , data : resturnArr});
					}
				})
			}
			else{
				car.searchModels(query, function(err, models){
					if(err){						
						res.send({error:false , data : resturnArr});
					}
					else{
						resturnArr.concat(models);
						res.send({error:false , data: resturnArr});
					}
				});
			}
		}
	});
	
	/*car.findModels({model_id : modelId}, function(err, data){
		console.log(data, "data");
		if(err || !data.length) {
			helpers.sendError(res,"Invalid Car Model");
		}
		else{
			let tempPath = req.body.image_url;
			let fileType = tempPath.split('.').pop();
			let uuid = helpers.uuid();
			var fileName = `${modelId}${uuid}.${fileType}`;
			var uploadedfile = fs.createWriteStream(`./app/uploads/${fileName}`);	
			let client = https;
			if(tempPath.indexOf("http://") > -1){
				client = http;
			}
			client.get(tempPath, (response)=> {
				response.pipe(uploadedfile);
				car.addModelImage({image_name: fileName , model_id: modelId},function(err,imgsaved){
					if(err) helpers.sendError(res,err);
					helpers.sendSuccess(res, imgsaved);
				})			
			}, error=>{
				helpers.sendError(res,error);
			});	
		}			
	})*/
    
}

