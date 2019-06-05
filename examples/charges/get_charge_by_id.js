const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'sk_test_v7gb4lnTWjcVbVoA';

const chargesController = mundipagg.ChargesController;

const chargeId = 'ch_4PAVPy2tAuxxq1aX';

chargesController.getCharge(chargeId)
    .then(charge => {
        console.log('Charge found!');
        console.log(`ChargeId: ${charge.id}`);
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