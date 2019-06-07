const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const recipientsController = mundipagg.RecipientsController;

const request = new mundipagg.CreateRecipientRequest();
request.name = 'Tony Stark';
request.email = 'tstark@mundipagg.com';
request.description = 'Recebedor tony stark';
request.document = '26224451990';
request.type = 'individual';
request.defaultBankAccount = new mundipagg.CreateBankAccountRequest();
request.defaultBankAccount.holderName = 'Tony Stark';
request.defaultBankAccount.holderType = 'individual';
request.defaultBankAccount.holderDocument = '26224451990';
request.defaultBankAccount.bank = '341';
request.defaultBankAccount.branchNumber = '12345';
request.defaultBankAccount.branchCheckDigit = '6';
request.defaultBankAccount.accountNumber = '12345';
request.defaultBankAccount.accountCheckDigit = '6';
request.defaultBankAccount.type = 'checking';

recipientsController
    .createRecipient(request)
    .then(recipient => {
        console.log(`Recipient Id: ${recipient.id}`);
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
