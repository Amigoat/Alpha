// Here we are importing the URL and file system (fs) that comes with the node.js install.
//Exporting a 'get' function - allows server file to use this function and pass requests and response objects through.
//Getting path of URL request
//Checking if request is for a CSS file and if so loading it in.
//If not we are sending the request to the correct controller
//Checking for two URL paths - '/' or '/home' - will route to a controller called 'home'
//Any other requests will be sent to a controller called '404'

var url = require('url');  
var fs = require('fs');

exports.get = function(req, res) {  
 
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;
 
  if (/\.(css)$/.test(path)) {
 
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
 
    fs.readFile(__dirname + path, 'utf8', function(err, data) {
 
      if (err) throw err;
      res.write(data, 'utf8');
      res.end();
 
    });
 
  } else {
 
    if (path === '/' || path === '/home') {
 
      require('./controllers/testcontroller').get(req, res);
 
    } else {
 
      require('./controllers/404').get(req, res);
 
    }
  }
};