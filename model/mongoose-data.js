//Connect to mongoose instead of mongoDB
//Connect to database 'euro2012' and local host server
//Default error handler created

//Best practise for connecting and disconnecting - leave it open until your app shuts down

var mongoose = require('mongoose'),  
    
    //db = mongoose.createConnection('localhost', 'euro2012');
    db = mongoose.createConnection('localhost', 'amigo');

db.on('error', console.error.bind(console, 'connection error:'));  

var onErr = function(err,callback) {  
  
  mongoose.connection.close();
  
  callback(err);

};

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

console.log("today is" + n);


//export function expects two parameters - the 'gname' variable that we will search for in the database and a callback function to execute after we have queried

//exports.teamlist = function(gname, callback) {  

//We are searching for gname/anight in the database, should we instead use day?

exports.venuelist = function(n, callback) { 
  
  //Open the db here and send the code through as a callback function to be done once connection to database open
  db.once('open', function() {
  

  //Mongoose requires a schema to be set for data. Allows mongoose to build a model framework for the info.
  //Here we are just using some strings as the model framework of our schema

    
//Making the schema 
/*
    var teamSchema = new mongoose.Schema({
      country: String,
      GroupName: String
  
    });
  */ 


   var venueSchema = new mongoose.Schema ({ 
      name: String, 
      night: String  
  });

  //Buiding the model - Schema needs to be converted into a model to work with
    //var Team = db.model('Team', teamSchema);

    var Venue = db.model('Venue', venueSchema);
  
  //Can add the find method to the model just created, send the filter object/query as the first parameter of the function followed by the callback function - callback function has two parameters - error object and the returned data from the query (teams)
    
  //Find method returns an array of JSON objects

  //Once data found we send it through the callback function from when the exports function was called (above)
    

    console.log ("Venue:" + Venue);

    //Team.find({
    Venue.find({
    
      //'GroupName': gname
      //night: 'Wednesday'
  
   // }, function(err, teams) {

    }, function(err, amigonights) {
    
      if (err) {
  
        onErr(err, callback);
  
      } else {
  
        mongoose.connection.close();
        
        //console.log(teams);

        console.log("This is where" + amigonights);
        
        //callback("", teams);
        callback("", amigonights);
  
      }
  
    }); // end Team.find //end Venue.find
  
  }); // end db.once open 

};

//Catching and returning errors - if error with the find function we call onErr function (above)
//This closes the connection and sends back an error message to original callback function



