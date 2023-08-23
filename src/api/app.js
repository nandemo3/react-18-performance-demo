var express = require("express");
var morgan = require('morgan');
var app = express();

var server = app.listen(3001, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// http://localhost:3001/hello?name=hoge
app.use(morgan('combined'));
app.get("/hello", function(req, res, next){
  res.json({message: 'Hello ' + req.query.name, date: new Date()});
});