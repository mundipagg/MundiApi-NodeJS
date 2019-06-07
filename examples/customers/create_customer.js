const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const customersController = mundipagg.CustomersController;

const request = new mundipagg.CreateCustomerRequest();
request.name = 'sdk customer test';
request.email = 'tonystark@avengers.com';
request.type = 'individual';
request.document = '55342561094';
request.code = 'MY_CUSTOMER_001';

request.address = new mundipagg.CreateAddressRequest();
request.address.line_1 = '375, Av. General Justo, Centro';
request.address.line_2 = '8º andar';
request.address.zip_code = '20021130';
request.address.city = 'Rio de Janeiro';
request.address.state = 'RJ';
request.address.country = 'BR';
request.address.metadata = new mundipagg.UpdateMetadataRequest();
request.address.metadata.id = 'my_address_id';

request.phones = new mundipagg.CreatePhonesRequest();
request.phones.home_phone = new mundipagg.CreatePhoneRequest();
request.phones.home_phone.area_code = '21';
request.phones.home_phone.country_code = '55';
request.phones.home_phone.number = '000000000';
request.phones.mobile_phone = new mundipagg.CreatePhoneRequest();
request.phones.mobile_phone.area_code = '21';
request.phones.mobile_phone.country_code = '55';
request.phones.mobile_phone.number = '000000000';

customersController
    .createCustomer(request)
    .then(customer => {
        console.log(`Customer Id: ${customer.id}`);
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
