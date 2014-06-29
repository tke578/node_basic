//http server
var http = require('http');
var fs = require('fs');

var static_contents = require('./node_modules/static.js');
//creating a server
server = http.createServer(function (request, response){
  static_contents(request, response);  //this will serve all static files automatically
});
server.listen(8000);
console.log("Running in localhost at port 8000");