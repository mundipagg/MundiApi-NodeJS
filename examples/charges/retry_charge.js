const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const chargesController = mundipagg.ChargesController;

const chargeId = 'ch_8YQ1JeTLzF8zlqWy';

chargesController
    .retryCharge(chargeId)
    .then(() => {
        console.log('Charge retried!');
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
