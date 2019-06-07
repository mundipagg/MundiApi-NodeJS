const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const invoicesController = mundipagg.InvoicesController;

const invoiceId = 'in_DKRdGqpsaVS4rmpl';

invoicesController
    .getInvoice(invoiceId)
    .then(invoice => {
        console.log(`InvoiceId: ${invoice.id}`);
        console.log(`Invoice status: ${invoice.status}`);
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
