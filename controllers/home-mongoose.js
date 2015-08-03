// Require the new model file 'mongoose-data'


var template = require('../views/template-main');  
var mongo_data = require('../model/mongoose-data0.2');  


//Get function has changed by giving it the name of the group of teams we want - "D" 
exports.get = function(req, res) {  

//Find out todays day

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

//What we are looking for:
  //var strGroup = "D";
  var strDay = n;

//Show that it's reading the right date

  console.log(n); //Todays day

  console.log(mongo_data.venuelist);

  //mongo_data.teamlist(strGroup, function(err, teamlist) {



  //mongo_data.venuelist(n, function(err, venuelist) {
  mongo_data.Venue(n, function(err, venuelist) {

//We are then looping through the results and sending the output to the template

    /* if (!err) {

      var strTeam = "",
        i = 0,
        teamCount = teamlist.length;

      for (i = 0; i < teamCount;) {

        strTeam = strTeam + "<li>" + teamlist[i].country + "</li>";
        i = i + 1;

      }
*/

//First part here needs to be changed to if - day not current day i=0.

      if (!err) {

        //var strVenue = "",
        var strVenue = "",
        i = 0,
        venueCount = venuelist.length;
    


      for (i = 0; i < venueCount;) {

        strVenue = strVenue + "<li>" + venuelist[i].name + "</li>";
        i = i + 1;

      }


      strVenue = "<ul>" + strVenue + "</ul>"

      res.writeHead(200, {
        'Content-Type': 'text/html'

      });

//This is what we are producing on the template page
    
     /* res.write(template.build("Test web page on node.js", "Welcome Amigo", "<p>The places to go out on " + strGroup + " are:</p>" + strTeam));
    */

      res.write(template.build("Test web page on node.js", "Welcome Amigo", "<p>The places to go out on " + strDay + " are:</p>" + strVenue));

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