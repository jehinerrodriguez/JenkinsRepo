var express = require('express');
 
var app = express();
var port = 5000;
 
app.get('/', function (req, res) {
  res.send('hello world');
});
 
app.listen(process.env.PORT || port,() =>{
    console.log("The server is running at port: " + port)
});
 
module.exports = app;