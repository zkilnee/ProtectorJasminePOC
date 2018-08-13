//var apiTest1 = require('./APIExportTest');
var numAPIsExport = require('./APITestRest');

var cast = Promise.resolve(numAPIsExport);
cast.then(function (value) {
    console.log('value: ' + value);

});

//console.log(apiTest1());

