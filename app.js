const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const jwt = require('express-jwt');
app.use(jwt({ secret: 'shhhhhh'}).unless({path: ['/hello','/dealer/signup','/dealer/login']}));
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./app/routes'));

var dbConnect = require("./app/config/db");
app.listen(3030, function () {
  console.log('Example app listening on port 3000!');
});


dbConnect.connect(function(data){
  console.log("database connected");
}) 