//Connecting to the mongoDB server and connecting to our database

var mongo = require('mongodb'),  
  Server = mongo.Server,
  Db = mongo.Db;
var server = new Server('localhost', 27017, {  
  auto_reconnect: true
});

var db = new Db('euro2012', server);  

//Function that will catch any errors 
var onErr = function(err, callback) {  
  db.close();
  callback(err);
};

//Use of non blocking functions
//db.open, db.collection, collection.find()

exports.teamlist = function(gname, callback) {  
  
  db.open(function(err, db) {
  
    if (!err) {
  
      db.collection('teams', function(err, collection) {
  
        if (!err) {
  
          collection.find({
  
            'GroupName': gname
  
          }).toArray(function(err, docs) {
  
            if (!err) {
  
              db.close();
              var intCount = docs.length;
  
              if (intCount > 0) {
  
                var strJson = "";
  
                for (var i = 0; i < intCount;) {
  
                  strJson += '{"country":"' + docs[i].country + '"}'
  
                  i = i + 1;
  
                  if (i < intCount) {
  
                    strJson += ',';
                  }
                }
  
                strJson = '{"GroupName":"' + gname + '","count":' + 
                
                intCount + ',"teams":[' + strJson + "]}"
                
                callback("", JSON.parse(strJson));
                }
            
            } else {
            
              onErr(err, callback);
            
            }
         
          }); //end collection.find 
        
        } else {
         
          onErr(err, callback);
        
        }
     
      }); //end db.collection
    
    } else {
    
      onErr(err, callback);
    
    }
  
  }); // end db.open

};