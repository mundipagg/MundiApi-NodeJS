const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const ordersController = mundipagg.OrdersController;

const orderId = 'or_E3qkDb3SGNfpvaW1';

ordersController
    .getOrder(orderId)
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
