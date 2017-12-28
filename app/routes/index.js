var router = require("express").Router();
router.use('/user', require("../modules/user/route"));
router.use('/dealer', require("../modules/dealer/routes"));
router.use('/car', require("../modules/car/routes"));

/*
var jwtsign = require('jsonwebtoken');
router.get('/', function(req,res){
	res.send("Cars Application");
});

router.get('/hello', function(req,res){
	var token = jwtsign.sign({ foo: 'bar' }, 'shhhhhh');
	res.send(token);
});

router.get('/ok', function(req,res){
	var token = jwtsign.sign({ foo: 'bar' }, 'shhhhhh');	
	res.send("okkkkkkkkkkkkk");
});
*/
module.exports = router;