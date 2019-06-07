const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const ordersController = mundipagg.OrdersController;

const customerRequest = new mundipagg.CreateCustomerRequest();
customerRequest.name = 'sdk customer test';
customerRequest.email = 'tonystark@avengers.com';

voucherRequest = new mundipagg.CreateVoucherPaymentRequest();
voucherRequest.capture = true;
voucherRequest.installments = 2;
voucherRequest.statement_descriptor = 'test descriptor';
voucherRequest.card = new mundipagg.CreateCardRequest();
voucherRequest.card.number = '4000000000000010';
voucherRequest.card.holder_name = 'Tony Stark';
voucherRequest.card.exp_month = 1;
voucherRequest.card.expYear = 2025;
voucherRequest.card.cvv = '123';

const request = new mundipagg.CreateOrderRequest();

request.items = [new mundipagg.CreateOrderItemRequest()];
request.items[0].description = 'Tesseract Bracelet';
request.items[0].quantity = 3;
request.items[0].amount = 1490;

request.payments = [new mundipagg.CreatePaymentRequest()];
request.payments[0].payment_method = 'voucher';
request.payments[0].voucher = voucherRequest;
request.customer = customerRequest;

ordersController
    .createOrder(request)
    .then(order => {
        console.log(`Order Id: ${order.id}`);
        console.log(`Order status: ${order.status}`);
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
