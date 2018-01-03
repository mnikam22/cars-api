var car = require('../../../models/car');
const https = require('https');
var apiUrl = "https://vpic.nhtsa.dot.gov/api/";

module.exports.fetchAllMakes = function(req,res){
	https.get(apiUrl+ "vehicles/GetMakesForVehicleType/car?format=json", (resp) => {
	
		  let data = '';
		  //A chunk of data has been recieved.
		  resp.on('data', (chunk) => {
		    data += chunk;
		  });

		  resp.on('end', () => {
			let allMakes = JSON.parse(data);		    
			allMakes.Results = allMakes.Results.map(function(a){
				return {
					name : a.MakeName,
					make_id : a.MakeId
				};
			});
			car.addMakes(allMakes.Results, function(err, response){
				console.log(err,"Error while entering data");
				res.send(allMakes.Results);
			})
		  });

		
	}).on("error", (err) => {
	  	console.log("Error: " + err.message);
		res.status(500).send(err.message);
	});
}

module.exports.listMakes = function(req, res){
	car.listAllMakes(function(err, makes){
		if(err) res.status(500).send(err);
		res.send(makes);
	})
}

module.exports.listAllModelsByMakeId = function(req, res){
	let makeId =  req.params.makeId ;
	car.listAllModelsByMakeId(makeId, function(err, makes){
		if(err) res.status(500).send(err);
		res.send(makes);		
	})
}

module.exports.fetchModelsByMakeId = function(req,res){
	let makeId = req.params.makeId;
	https.get(apiUrl+ "vehicles/GetModelsForMakeId/"+makeId+"?format=json", (resp) => {
		  let data = '';
		  //A chunk of data has been recieved.
		  resp.on('data', (chunk) => {
		    data += chunk;
		  });

		  resp.on('end', () => {
			let makeModels = JSON.parse(data);    
			makeModels.Results = makeModels.Results.map(function(a){
				return {
					name : a.Model_Name,
					make_id : a.Make_ID,
					model_id : a.Model_ID
				};
			});
			car.addModelsByMakeId(makeId, makeModels.Results, function(err, response){
				console.log(err,"Error while entering data");
				res.send(makeModels.Results);
			})
		  });
		}).on("error", (err) => {
		  	console.log("Error: " + err.message);
			res.status(500).send(err.message);
		});	
	
}

