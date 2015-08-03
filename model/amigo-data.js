
var mongoose = require('mongoose'),  
   
    db = mongoose.createConnection('localhost', 'amigo');

db.on('error', console.error.bind(console, 'connection error:'));  

var onErr = function(err,callback) {  
  
  mongoose.connection.close();
  
  callback(err);

};


exports.venuelist = function(gname, callback) { 

  db.once('open', function() {