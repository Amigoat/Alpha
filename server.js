//Here we are calling in a router module and sending it request and response object. Server is sending requests to the router

var http_IP = '127.0.0.1';  
var http_port = 8899;  
var http = require('http');  

var server = http.createServer(function(req, res) {  
  require('./router').get(req, res);
}); // end server() 

server.listen(http_port, http_IP);  

console.log('listening to http://' + http_IP + ':' + http_port);  