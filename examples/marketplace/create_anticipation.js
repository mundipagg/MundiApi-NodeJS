const mundipagg = require('mundipagg-nodejs');
const moment = require('moment');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const recipientsController = mundipagg.RecipientsController;

const request = new mundipagg.CreateAnticipationRequest();
request.amount = 1000;
request.timeframe = 'start';
request.paymentDate = moment(new Date(2020, 12, 12));

const recipientId = 'rp_RElaP4NMCJu08V9m';

recipientsController
    .createAnticipation(recipientId, request)
    .then(anticipation => {
        console.log(`Anticipation Id: ${anticipation.id}`);
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
