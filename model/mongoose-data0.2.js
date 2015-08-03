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
weekday[3] = "Wednesday";n
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

console.log("today is" + n);

db.once('open', function() {

//SCHEMA - mongoose schema is whats used to define attributes for our documents
//MODEL - constructors that we define - represent documents that can be saved and retrieved.

//Create Schema

    var Schema = mongoose.Schema; 
   
    var venueSchema = new Schema ({ 
      name: String, 
      night: String  
  });

//Create model for Schema

    var Venue = mongoose.model('Venue', venueSchema);
  
  
//Make available to users in our Node apps

module.exports = Venue;

// Find All using name of Model
    Venue.find({}, function(err, amigonights) {
    
      //if (err) throw err;

        console.log(amigonights);
        
      }); 

});

