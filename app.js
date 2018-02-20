const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const jwt = require('express-jwt');
const path = require("path");
//app.use(jwt({ secret: 'Car-Deals-2017shhhhHHHHH'}).unless({path: ['/hello','/dealer/signup','/dealer/login','/car/upload-image','/uploads']}));


app.use('/api',function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid Authorization token');
  }
});

app.use('/dist', express.static(__dirname + '/dist'));

app.use('/assets', express.static(__dirname + '/dist/assets'));
app.use('/bower_components', express.static(__dirname + '/dist/bower_components'));
app.use('/css', express.static(__dirname + '/dist/css'));
app.use('/partials', express.static(__dirname + '/dist/partials'));


app.use('/api',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  next();
});


//app.use('*', express.static(path.join(__dirname, '/dist')));

//app.use(express.static('app/dist'));
app.use('/api/uploads', express.static('app/uploads'));
app.use('/', express.static('dist'));

app.get("/", (req,res)=>{
  res.sendFile('dist/index.html', { root: __dirname });
})



app.use('/api',bodyParser.json());
app.use('/api',bodyParser.urlencoded({ extended: false }));
app.use('/api',require('./app/routes'));

var dbConnect = require("./app/config/db");
app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});

dbConnect.connect(function(err,db){
  if(err) {
    console.log(err, "Error in connecting database");
  } else{
    //console.log(db, "Database connected");
  }  
})