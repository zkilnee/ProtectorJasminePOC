var rp = require('request-promise');


function parse(){
    return new Promise(function(resolve, reject){
    var options ={
        method: 'GET',
        uri: 'http://api.apis.guru/v2/metrics.json',
        timeout: 120000,
        resolveWithFullResponse: true,
        body: {
            some: 'payload'
        },
        json: true// Automatically parses the JSON string in the response
    };
    
    rp(options)
      .then(function(response){ 

        console.log('###################statusCode:'+ response.statusCode);
    
        console.log('###################response:'+ JSON.stringify(response));
        obj=JSON.parse(JSON.stringify(response));
        console.log('###################response numAPIs:'+ obj.body.numAPIs);
        numAPIVal=obj.body.numAPIs;
        console.log('###################response numAPIs:'+ numAPIVal);

        headers=JSON.stringify(obj.headers['content-length']);

        console.log('###################content-length:'+ headers);

        

        
        resolve([obj,numAPIVal]);

      //  expect(response.statusCode,"200");
      } )
      .catch(function (error){
          console.log("###################"+error);
          reject(error);
       } );
      
    
    
} );
}





var numAPI1=parse().then(function(val) {
    //console.log("##################   parse    val  #################"+JSON.stringify(val[0]));
    //console.log("##################   parse    numAPIVal  #################"+val[1]);
    return JSON.stringify(val[1]);
    
}).catch(function(err) {
    reject(err);
});



console.log("##################   parse    val 123  #################"+numAPI1);

//module.exports=numAPIsExport;
/*
function getNumAPIs(){
    
    console.log("##################guruAPIBody.body.numAPIs #################"+guruAPIBody.body.numAPIs);
    return guruAPIBody.body.numAPIs;
}

getNumAPIs().then(function(numAPIs) {
    console.log("##################guruAPIBody.body.numAPIs #################"+guruAPIBody.body.numAPIs);
    return guruAPIBody.body.numAPIs;

}).catch(function(err) {
    console.err(err);
});
*/
var test;
exports.getNumAPI =function (){ 
    parse().then(function(val) {  
var test1
    test1= "TEST";
}
);




}