var rp = require('request-promise');
var logger = require("../utils/logger");

/*
* parsing of api response
* return api body contents
*/
function parse() {
    return new Promise(function (resolve, reject) {
        var options = {
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
            .then(function (response) {

                logger().info(' statusCode:' + response.statusCode);

                //console.log(' response:'+ JSON.stringify(response));
                obj = JSON.parse(JSON.stringify(response));
                logger().info(' response numAPIs:' + obj.body.numAPIs);
                numAPIVal = obj.body.numAPIs;
                // console.log(' response numAPIs:'+ numAPIVal);
                headers = JSON.stringify(obj.headers['content-length']);
                //  console.log(' content-length:'+ headers);
                resolve([obj, numAPIVal]);
                //  expect(response.statusCode,"200");
            })
            .catch(function (error) {
                logger().error("###################" + error);
                reject(error);
            });
    });
}



/*
*function created to export one variable of api response
*/


var numAPI1 = parse().then(function (val) {
    logger().info("parse    numAPIVal " + val[1]);
    value = JSON.stringify(val[1]);
    return value;

}).catch(function (error) {
    console.log(error.message);
});



module.exports = numAPI1;

