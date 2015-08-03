//Similar to home.js file with few changes
//Here we require the 'mongo-data model' which is the source of our data

//Once we have the data we are using a callback function to say what we are doing with the data

// We are sending the string 'D' through as a variable as that is the string we will search for in the database

//Also sending into the callback function what we do if an error occurs with the data


var template = require('../views/template-main');  
var mongo_data = require('../model/mongo-data');  


exports.get = function(req, res) {  

  mongo_data.teamlist("D", function(err, teamlist) {

    if (!err) {
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

      res.write(template.build("Test web page on node.js", "Hello there", "<p>The teams in Group " + teamlist.GroupName + " for Euro 2012 are:</p>" + strTeam));
      res.end();

    } else {

      res.writeHead(200, {
        'Content-Type': 'text/html'

      });

      res.write(template.build("Oh dear", "Database error", "<p>Error details: " + err + "</p>"));
      res.end();

    }
  });
};