//Librerias
const { When, Then, Given, Before, After } = require('@cucumber/cucumber');
const pactum = require('pactum');
const _ = require('lodash');

let service = pactum.spec();

Before(() => {
    service = pactum.spec();
});


Given(/^I send a request with (.*), (.*), (.*)$/, async function (name, salary, age) {
    service.post('http://dummy.restapiexample.com/api/v1/create')
    .withHeaders({
      'Content-Type': 'application/json'
    })
    .withJson({
        name: name,
        salary: salary,
        age: age
    });
  await service.toss();

  this.requestDetail = service._request;
  console.log(this.requestDetail);

  this.responseDetail = _.pick(service._response, ["headers", "statusCode", "json", "responseTime"]);

});


When('Get Response', function () {
  console.log(this.responseDetail);
});

Then('status response is {int}', function (status) {    
   if ( status == 200){
   console.log("Success");
   } else {
    console.log("Fail");
   }
   
});



After( function () {
    service.end();
});

