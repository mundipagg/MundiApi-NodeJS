const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const customersController = mundipagg.CustomersController;

const customerId = 'cus_G6gwy4xtJIOyNbrK';

customersController.getCards(customerId, 1, 30)
    .then(response => {
        if (response.data.length === 0) {
            console.log('My wallet is empty');
        } else {
            for (const card of response.data) {
                console.log(`CardId: ${card.id}`);
            }
            console.log(`Cards quantity in my wallet: ${response.paging.total}`);
        }
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