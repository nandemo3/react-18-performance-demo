var express = require("express");
var morgan = require('morgan');
var app = express();

var server = app.listen(3001, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// http://localhost:3001/api
app.use(morgan('combined'));
app.get("/api", function(req, res, next){
  res.json([{name: new Date()}]);
});