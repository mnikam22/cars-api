var car = require('../../../models/car');
const https = require('https');
var apiUrl = "https://vpic.nhtsa.dot.gov/api/";

module.exports.fetchAllMakes = function(req,res){

	https.get(apiUrl+ "vehicles/GetMakesForVehicleType/car?format=json", (resp) => {
	
		  let data = '';
		  // A chunk of data has been recieved.
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


module.exports.addMakeModels = function(req,res){

}