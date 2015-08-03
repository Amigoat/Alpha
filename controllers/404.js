//Using the template from template-main
//This is the controller for the 404 file
//We are sending three bits of content

//We have changed the writeHead function from 200(Ok) to 404(not found)

var template = require('../views/template-main');  

exports.get = function(req, res) {  

  res.writeHead(404, {
    'Content-Type': 'text/html'

  });

  res.write(template.build("404 - Page not found", "Oh noes, it's a 404", "<p>This isn't the page you're looking for...</p>"));

  res.end();

};