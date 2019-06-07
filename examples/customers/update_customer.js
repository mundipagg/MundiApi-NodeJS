const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const customersController = mundipagg.CustomersController;

const customerId = 'cus_6l5dMWZ0hkHZ4XnE';
const request = new mundipagg.UpdateCustomerRequest();
request.name = 'Peter Parker';
request.email = 'parker@avangers.com';
request.gender = 'male';

customersController
    .updateCustomer(customerId, request)
    .then(customer => {
        console.log(`Customer Id: ${customer.id}`);
        console.log(`New name: ${customer.name}`);
    })
    .catch(error => {
        console.log(`Status Code: ${error.errorCode}`);
        if (error.errorResponse instanceof mundipagg.ErrorException) {
            console.log(error.errorResponse.message);
            console.log(error.errorResponse.errors);
        } else {
            throw error;
        }
    });
