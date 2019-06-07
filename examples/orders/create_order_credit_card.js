const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const ordersController = mundipagg.OrdersController;

const customerRequest = new mundipagg.CreateCustomerRequest();
customerRequest.name = 'sdk customer order';
customerRequest.email = 'tonystark@avengers.com';

const creditCardRequest = new mundipagg.CreateCreditCardPaymentRequest();
creditCardRequest.capture = true;
creditCardRequest.installments = 2;
creditCardRequest.card = new mundipagg.CreateCardRequest();
creditCardRequest.card.number = '4000000000000010';
creditCardRequest.card.holderName = 'Tony Stark';
creditCardRequest.card.expMonth = 1;
creditCardRequest.card.expYear = 2025;
creditCardRequest.card.cvv = '123';

const request = new mundipagg.CreateOrderRequest();

request.items = [new mundipagg.CreateOrderItemRequest()];
request.items[0].description = 'Tesseract Bracelet';
request.items[0].quantity = 3;
request.items[0].amount = 1490;

request.payments = [new mundipagg.CreatePaymentRequest()];
request.payments[0].paymentMethod = 'credit_card';
request.payments[0].creditCard = creditCardRequest;
request.customer = customerRequest;

ordersController
    .createOrder(request)
    .then(order => {
        console.log(`Order Id: ${order.id}`);
        console.log(`Charge Id: ${order.charges[0].id}`);
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
