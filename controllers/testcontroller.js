var template = require('../views/testview');

var mongo_data = require('../model/testmodel');

exports.get = function(req, res) {

 var strEmployee = "John";

 mongo_data.employeelist(strEmployee,function(err,employeelist){
  
  if(!err){

   var strEmployee = "", i = 0, employeeCount = employeelist.length;
   
   for (i = 0; i<employeeCount;) {

    StrEmployeeName = employeelist[i].firstName;

    strEmployee = strEmployee + "<li>" + employeelist[i].firstName + " " +
    employeelist[i].lastName + " " + employeelist[i].title + "</li>";
    i = i+1;


   }
   strEmployee = "<ul>" + strEmployee + "</ul>"

   res.writeHead(200, {'Content-Type': 'text/html'});
   
   res.write(
   
    template.build("Test web page on node.js","Hello there","<p>The Employees with the name " + StrEmployeeName + " are:</p>" + strEmployee));
    res.end();
  }
  else{
   
   res.writeHead(200, {'Content-Type': 'text/html'});
   
   res.write(
    template.build("Oh dear","Database error","<p>Error details: " + err + "</p>"));
   
   res.end();
  
  }
 });
};