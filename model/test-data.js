//JSON object to retrieve data from

//this is the model that contains the data to be used by the controller

//Using thelist() function which is returning a JSON object - will return a data object to the teamlist in our controller

var thelist = function() {  
  var objJson = {
    "GroupName": "D",
    "count": 4,
    "teams": [{
      "country": "England"
    }, {
      "country": "Willy Ville"
    }, {
      "country": "Sweden"
    }, {
      "country": "Ukraine"
    }]
  };
  return objJson;
};

exports.teamlist = thelist();  