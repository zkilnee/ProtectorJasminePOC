var request = require('request');

var rp = require('request-promise');

var options ={
    method: 'GET',
    uri: 'http://api.apis.guru/v2/metrics.json',
    resolveWithFullResponse: true,
    body: {
        some: 'payload'
    },
    json: true// Automatically parses the JSON string in the response
};

rp(options)
  .then(function(response){ 
    console.log('##################');
    console.log("##################");
    console.log('###################statusCode:'+ response.statusCode);
  //  console.log('###################response.options.numAPIs:'+ response.JSON.numAPIs);

    console.log('###################response:'+ JSON.stringify(response));
    obj=JSON.parse(JSON.stringify(response));
    console.log('###################response numAPIs:'+ obj.body.numAPIs);
  //  expect(response.statusCode,"200");
  } )
  .catch(function (error){
      console.log("###################"+error)
   } );
  




/*
//OK

request('http://www.google.com', function (error, response, body) {
  console.log('error:'+ error); // Print the error if one occurred
  console.log('statusCode:'+ response && response.statusCode); // Print the response status code if a response was received
  console.log('body:'+ body); // Print the HTML for the Google homepage.
});



//OK
request
  .get({
      url:'https://www.google.co.in/imghp'
  },function(response) {
    console.log("###########"+response.statusCode) // 200
    console.log("###########"+response.headers['content-type']) // 'image/png'
  })

*/

  /*
)
  .on('response', function(response) {
    console.log("###########"+response.statusCode) // 200
    console.log("###########"+response.headers['content-type']) // 'image/png'
  })


/*
var url ="https://api.apis.guru/v2/metrics.json";

fetch('https://api.apis.guru/v2/metrics.json')
  .then(response => response.json())
  .then(json => console.log(json))

/*let apiCall = function () {
    return new Promise((resolve, reject) => {
        request.get(url, function (error, response, json) {
            if (!error && response.statusCode == 200) {
               return resolve(JSON.parse(json));
            } else {
                return reject(error);
            }
        });
    });
}


describe('Brilliant Earth HomePage Tests', function () {
    apiCall().then(function (result){

console.log("###########################");
console.log("result"+result);
    });




    
    
});
*/
