//This is the controller file

//Including the model and view at the top of this file.

//The controller performs operations using the response from the model
//Controller sends response to the view

//Get data object (teamlist) and then create html string to put items into an unordered list

//View - template-main
//Template.build function - currently only sending three items
//Usually in controller there are no references to how the content will be displayed - here we are sending them through as an unordered list.

var template = require('../views/template-main');  
var test_data = require('../model/test-data');  

exports.get = function(req, res) {  

  var teamlist = test_data.teamlist;
  var strTeam = "",

    i = 0;
  for (i = 0; i < teamlist.count;) {
    strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
    i = i + 1;

  }

  strTeam = "<ul>" + strTeam + "</ul>";

  res.writeHead(200, {
    'Content-Type': 'text/html'

  });

  res.write(template.build("Test web page on node.js", "Welcome Amigo", "<p>The teams in Group " + teamlist.GroupName + " for Euro 2012 are:</p>" + strTeam));

  res.end();
};


/*NOTES

Pulling data from a database is a 'blocking' operation - nothing can happen until we get the data from the database

1) We need to write: Get said data from database
2) Now you have it, do this with it
3) Don't do anything else until it's done