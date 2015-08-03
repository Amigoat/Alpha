var mongoose = require('mongoose');

db = mongoose.createConnection('localhost', 'company');
 
db.on('error', console.error.bind(console, 'connection error:'));

var onErr = function(err,callback){
 
 mongoose.connection.close();

 callback(err);

};

exports.employeelist = function (names, callback) {

db.once('open', function (){

var employeeSchema = new mongoose.Schema({
  
   id: String,
   firstName: String,
   lastName: String,
   managerId: Number,
   managerName: String,
   reports: Number,
   title: String,
   department: String,
   mobilePhone: String,
   officePhone: String,
   email: String,
   city: String,
   pic: String,
   twitterId: String,
   blog: String,
  
  });

  var Employee = db.model('Employee', employeeSchema)

  Employee.find({'firstName':names}, function (err, employees) {

   if(err){
   
    onErr(err,callback);

    console.log ("Couldn't connect to Database");
   
   } else {
 
    mongoose.connection.close();

    console.log(employees);

      callback("",employees);

        //var employeeList = employees

        //module.exports.employeeList = employees;    

      
      }

    });// end Team.find
  
  });

};

