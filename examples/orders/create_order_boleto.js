const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const ordersController = mundipagg.OrdersController;

const customerRequest = new mundipagg.CreateCustomerRequest();
customerRequest.name = 'sdk customer test';
customerRequest.email = 'tonystark@avengers.com';
customerRequest.address = new mundipagg.CreateAddressRequest();
customerRequest.address.street = 'Malibu Point';
customerRequest.address.number = '10880';
customerRequest.address.zip_code = '90265';
customerRequest.address.neighborhood = 'Central Malibu';
customerRequest.address.city = 'Malibu';
customerRequest.address.state = 'CA';
customerRequest.address.country = 'US';

const boletoRequest = new mundipagg.CreateBoletoPaymentRequest();
boletoRequest.bank = '033';
boletoRequest.instructions = 'Pagar até o vencimento';
boletoRequest.due_at = '2019-12-31T00:00:00Z';

const request = new mundipagg.CreateOrderRequest();

request.items = [new mundipagg.CreateOrderItemRequest()];
request.items[0].description = 'Tesseract Bracelet';
request.items[0].quantity = 3;
request.items[0].amount = 1490;

request.payments = [new mundipagg.CreatePaymentRequest()];
request.payments[0].payment_method = 'boleto';
request.payments[0].boleto = boletoRequest;
request.customer = customerRequest;

ordersController
    .createOrder(request)
    .then(order => {
        console.log(`Order Id: ${order.id}`);
        console.log(`Order status: ${order.status}`);
        console.log(`Boleto pdf: ${order.charges[0].lastTransaction.pdf}`);
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
