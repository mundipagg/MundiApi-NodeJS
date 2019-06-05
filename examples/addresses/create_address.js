const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const customersController = mundipagg.CustomersController;

const customerId = 'cus_PzRyp10FeNca2rVB';

const request = new mundipagg.CreateAddressRequest();
request.line_1 = '10880, Malibu Point, Malibu Central';
request.line_2 = '7º floor';
request.zip_code = '90265';
request.city = 'Malibu';
request.state = 'CALIFORNIA';
request.country = 'US';
request.metadata = new mundipagg.UpdateMetadataRequest();
request.metadata.id = 'my_address_id';

customersController.createAddress(customerId, request)
    .then(address => {
        console.log(address.id);
    })
    .catch(error => {
        console.log(`StatusCode: ${error.errorCode}`);
        if (error.errorResponse instanceof mundipagg.ErrorException) {
            console.log(error.errorResponse.message);
            console.log(error.errorResponse.errors);
        } else {
            throw error;
        }
    });