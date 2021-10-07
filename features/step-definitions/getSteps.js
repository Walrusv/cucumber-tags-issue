//Librerias
const { When, Then, Given, Before, After } = require('@cucumber/cucumber');
const pactum = require('pactum');
const _ = require('lodash');

let service = pactum.spec();

Before(() => {
    service = pactum.spec();
});


Given('I send a get request', async function () {
    service.get('http://dummy.restapiexample.com/api/v1/employees')

  await service.toss();

  this.responseDetail = _.pick(service._response, ["headers", "statusCode", "json", "responseTime"]);

});


When('Get Response data', function () {
  console.log(this.responseDetail);
});

Then('Status is 200', function (status) {    
   if ( status == 200){
   console.log("Success");
   } else {
    console.log("Fail");
   }
   
});



After( function () {
    service.end();
});

