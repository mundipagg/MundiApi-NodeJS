const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const subscriptionsController = mundipagg.SubscriptionsController;

const subscriptionId = 'sub_5wmVL3lfmyIAWAKn';

const request = new mundipagg.CreateCancelSubscriptionRequest();
request.cancel_pending_invoices = true;

subscriptionsController
    .cancelSubscription(subscriptionId, request)
    .then(subscription => {
        console.log(`Subscription Id: ${subscription.id}`);
        console.log(`Subscription Status: ${subscription.status}`);
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
