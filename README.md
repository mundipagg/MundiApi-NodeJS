# Getting started

Mundipagg API

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=MundiAPI-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=MundiAPI-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `MundiAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=MundiAPI-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=MundiAPI-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=MundiAPI-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=MundiAPI-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  MundiAPIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=MundiAPIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [SubscriptionsController](#subscriptions_controller)
* [OrdersController](#orders_controller)
* [PlansController](#plans_controller)
* [InvoicesController](#invoices_controller)
* [CustomersController](#customers_controller)
* [ChargesController](#charges_controller)
* [RecipientsController](#recipients_controller)
* [TokensController](#tokens_controller)
* [SellersController](#sellers_controller)
* [TransactionsController](#transactions_controller)

## <a name="subscriptions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SubscriptionsController") SubscriptionsController

### Get singleton instance

The singleton instance of the ``` SubscriptionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SubscriptionsController;
```

### <a name="get_increment_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getIncrementById") getIncrementById

> TODO: Add a method description


```javascript
function getIncrementById(subscriptionId, incrementId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription Id |
| incrementId |  ``` Required ```  | The increment Id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var incrementId = increment_id;

    controller.getIncrementById(subscriptionId, incrementId, function(error, response, context) {

    
    });
```



### <a name="update_subscription_start_at"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionStartAt") updateSubscriptionStartAt

> Updates the start at date from a subscription


```javascript
function updateSubscriptionStartAt(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| request |  ``` Required ```  | Request for updating the subscription start date |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateSubscriptionStartAtRequest({"key":"value"});

    controller.updateSubscriptionStartAt(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="update_subscription_card"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionCard") updateSubscriptionCard

> Updates the credit card from a subscription


```javascript
function updateSubscriptionCard(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| request |  ``` Required ```  | Request for updating a card |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateSubscriptionCardRequest({"key":"value"});

    controller.updateSubscriptionCard(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="update_subscription_item"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionItem") updateSubscriptionItem

> Updates a subscription item


```javascript
function updateSubscriptionItem(subscriptionId, itemId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |
| itemId |  ``` Required ```  | Item id |
| body |  ``` Required ```  | Request for updating a subscription item |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var itemId = item_id;
    var body = new UpdateSubscriptionItemRequest({"key":"value"});

    controller.updateSubscriptionItem(subscriptionId, itemId, body, function(error, response, context) {

    
    });
```



### <a name="create_usage"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.createUsage") createUsage

> Creates a usage


```javascript
function createUsage(subscriptionId, itemId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |
| itemId |  ``` Required ```  | Item id |
| body |  ``` Required ```  | Request for creating a usage |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var itemId = item_id;
    var body = new CreateUsageRequest({"key":"value"});

    controller.createUsage(subscriptionId, itemId, body, function(error, response, context) {

    
    });
```



### <a name="get_subscription"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getSubscription") getSubscription

> Gets a subscription


```javascript
function getSubscription(subscriptionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;

    controller.getSubscription(subscriptionId, function(error, response, context) {

    
    });
```



### <a name="update_subscription_payment_method"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionPaymentMethod") updateSubscriptionPaymentMethod

> Updates the payment method from a subscription


```javascript
function updateSubscriptionPaymentMethod(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| request |  ``` Required ```  | Request for updating the paymentmethod from a subscription |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateSubscriptionPaymentMethodRequest({"key":"value"});

    controller.updateSubscriptionPaymentMethod(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="create_subscription"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.createSubscription") createSubscription

> Creates a new subscription


```javascript
function createSubscription(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Request for creating a subscription |



#### Example Usage

```javascript

    var body = new CreateSubscriptionRequest({"key":"value"});

    controller.createSubscription(body, function(error, response, context) {

    
    });
```



### <a name="create_subscription_item"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.createSubscriptionItem") createSubscriptionItem

> Creates a new Subscription item


```javascript
function createSubscriptionItem(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| request |  ``` Required ```  | Request for creating a subscription item |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new CreateSubscriptionItemRequest({"key":"value"});

    controller.createSubscriptionItem(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="create_discount"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.createDiscount") createDiscount

> Creates a discount


```javascript
function createDiscount(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| request |  ``` Required ```  | Request for creating a discount |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new CreateDiscountRequest({"key":"value"});

    controller.createDiscount(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="get_subscription_item"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getSubscriptionItem") getSubscriptionItem

> Get Subscription Item


```javascript
function getSubscriptionItem(subscriptionId, itemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |
| itemId |  ``` Required ```  | Item id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var itemId = item_id;

    controller.getSubscriptionItem(subscriptionId, itemId, function(error, response, context) {

    
    });
```



### <a name="update_subscription_affiliation_id"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionAffiliationId") updateSubscriptionAffiliationId

> TODO: Add a method description


```javascript
function updateSubscriptionAffiliationId(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | TODO: Add a parameter description |
| request |  ``` Required ```  | Request for updating a subscription affiliation id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateSubscriptionAffiliationIdRequest({"key":"value"});

    controller.updateSubscriptionAffiliationId(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="create_an_usage"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.createAnUsage") createAnUsage

> Create Usage


```javascript
function createAnUsage(subscriptionId, itemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| itemId |  ``` Required ```  | Item id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var itemId = item_id;

    controller.createAnUsage(subscriptionId, itemId, function(error, response, context) {

    
    });
```



### <a name="get_subscriptions"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getSubscriptions") getSubscriptions

> Gets all subscriptions


```javascript
function getSubscriptions(page, size, code, billingType, customerId, planId, cardId, status, nextBillingSince, nextBillingUntil, createdSince, createdUntil, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| code |  ``` Optional ```  | Filter for subscription's code |
| billingType |  ``` Optional ```  | Filter for subscription's billing type |
| customerId |  ``` Optional ```  | Filter for subscription's customer id |
| planId |  ``` Optional ```  | Filter for subscription's plan id |
| cardId |  ``` Optional ```  | Filter for subscription's card id |
| status |  ``` Optional ```  | Filter for subscription's status |
| nextBillingSince |  ``` Optional ```  | Filter for subscription's next billing date start range |
| nextBillingUntil |  ``` Optional ```  | Filter for subscription's next billing date end range |
| createdSince |  ``` Optional ```  | Filter for subscription's creation date start range |
| createdUntil |  ``` Optional ```  | Filter for subscriptions creation date end range |



#### Example Usage

```javascript

    var page = 51;
    var size = 51;
    var code = 'code';
    var billingType = billing_type;
    var customerId = customer_id;
    var planId = plan_id;
    var cardId = card_id;
    var status = 'status';
    var nextBillingSince = date("D M d, Y G:i");
    var nextBillingUntil = date("D M d, Y G:i");
    var createdSince = date("D M d, Y G:i");
    var createdUntil = date("D M d, Y G:i");

    controller.getSubscriptions(page, size, code, billingType, customerId, planId, cardId, status, nextBillingSince, nextBillingUntil, createdSince, createdUntil, function(error, response, context) {

    
    });
```



### <a name="update_subscription_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionMetadata") updateSubscriptionMetadata

> Updates the metadata from a subscription


```javascript
function updateSubscriptionMetadata(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| request |  ``` Required ```  | Request for updating the subscrption metadata |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateMetadataRequest({"key":"value"});

    controller.updateSubscriptionMetadata(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="delete_subscription_item"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.deleteSubscriptionItem") deleteSubscriptionItem

> Deletes a subscription item


```javascript
function deleteSubscriptionItem(subscriptionId, subscriptionItemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| subscriptionItemId |  ``` Required ```  | Subscription item id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var subscriptionItemId = subscription_item_id;

    controller.deleteSubscriptionItem(subscriptionId, subscriptionItemId, function(error, response, context) {

    
    });
```



### <a name="delete_usage"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.deleteUsage") deleteUsage

> Deletes a usage


```javascript
function deleteUsage(subscriptionId, itemId, usageId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| itemId |  ``` Required ```  | The subscription item id |
| usageId |  ``` Required ```  | The usage id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var itemId = item_id;
    var usageId = usage_id;

    controller.deleteUsage(subscriptionId, itemId, usageId, function(error, response, context) {

    
    });
```



### <a name="delete_discount"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.deleteDiscount") deleteDiscount

> Deletes a discount


```javascript
function deleteDiscount(subscriptionId, discountId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| discountId |  ``` Required ```  | Discount Id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var discountId = discount_id;

    controller.deleteDiscount(subscriptionId, discountId, function(error, response, context) {

    
    });
```



### <a name="cancel_subscription"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.cancelSubscription") cancelSubscription

> Cancels a subscription


```javascript
function cancelSubscription(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| request |  ``` Optional ```  | Request for cancelling a subscription |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new CreateCancelSubscriptionRequest({"key":"value"});

    controller.cancelSubscription(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="get_discount_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getDiscountById") getDiscountById

> TODO: Add a method description


```javascript
function getDiscountById(subscriptionId, discountId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| discountId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var discountId = 'discountId';

    controller.getDiscountById(subscriptionId, discountId, function(error, response, context) {

    
    });
```



### <a name="get_discounts"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getDiscounts") getDiscounts

> TODO: Add a method description


```javascript
function getDiscounts(subscriptionId, page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| page |  ``` Required ```  | Page number |
| size |  ``` Required ```  | Page size |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var page = 51;
    var size = 51;

    controller.getDiscounts(subscriptionId, page, size, function(error, response, context) {

    
    });
```



### <a name="create_increment"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.createIncrement") createIncrement

> Creates a increment


```javascript
function createIncrement(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| request |  ``` Required ```  | Request for creating a increment |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new CreateIncrementRequest({"key":"value"});

    controller.createIncrement(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="get_increments"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getIncrements") getIncrements

> TODO: Add a method description


```javascript
function getIncrements(subscriptionId, page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var page = 51;
    var size = 51;

    controller.getIncrements(subscriptionId, page, size, function(error, response, context) {

    
    });
```



### <a name="delete_increment"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.deleteIncrement") deleteIncrement

> Deletes a increment


```javascript
function deleteIncrement(subscriptionId, incrementId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription id |
| incrementId |  ``` Required ```  | Increment id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var incrementId = increment_id;

    controller.deleteIncrement(subscriptionId, incrementId, function(error, response, context) {

    
    });
```



### <a name="get_usages_details"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getUsagesDetails") getUsagesDetails

> TODO: Add a method description


```javascript
function getUsagesDetails(subscriptionId, cycleId, size, page, itemId, group, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Identifier |
| cycleId |  ``` Optional ```  | Cycle id |
| size |  ``` Optional ```  | Page size |
| page |  ``` Optional ```  | Page number |
| itemId |  ``` Optional ```  | Identificador do item |
| group |  ``` Optional ```  | identificador da loja (account) de cada item |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var cycleId = cycle_id;
    var size = 51;
    var page = 51;
    var itemId = item_id;
    var group = 'group';

    controller.getUsagesDetails(subscriptionId, cycleId, size, page, itemId, group, function(error, response, context) {

    
    });
```



### <a name="get_usages"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getUsages") getUsages

> Lists all usages from a subscription item


```javascript
function getUsages(subscriptionId, itemId, page, size, code, group, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| itemId |  ``` Required ```  | The subscription item id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| code |  ``` Optional ```  | Identification code in the client system |
| group |  ``` Optional ```  | Identification group in the client system |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var itemId = item_id;
    var page = 51;
    var size = 51;
    var code = 'code';
    var group = 'group';

    controller.getUsages(subscriptionId, itemId, page, size, code, group, function(error, response, context) {

    
    });
```



### <a name="get_subscription_items"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getSubscriptionItems") getSubscriptionItems

> Get Subscription Items


```javascript
function getSubscriptionItems(subscriptionId, page, size, name, code, status, description, createdSince, createdUntil, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| name |  ``` Optional ```  | The item name |
| code |  ``` Optional ```  | Identification code in the client system |
| status |  ``` Optional ```  | The item statis |
| description |  ``` Optional ```  | The item description |
| createdSince |  ``` Optional ```  | Filter for item's creation date start range |
| createdUntil |  ``` Optional ```  | Filter for item's creation date end range |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var page = 51;
    var size = 51;
    var name = 'name';
    var code = 'code';
    var status = 'status';
    var description = 'description';
    var createdSince = created_since;
    var createdUntil = created_until;

    controller.getSubscriptionItems(subscriptionId, page, size, name, code, status, description, createdSince, createdUntil, function(error, response, context) {

    
    });
```



### <a name="update_subscription_due_days"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionDueDays") updateSubscriptionDueDays

> Updates the boleto due days from a subscription


```javascript
function updateSubscriptionDueDays(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |
| request |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateSubscriptionDueDaysRequest({"key":"value"});

    controller.updateSubscriptionDueDays(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="update_subscription_minium_price"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionMiniumPrice") updateSubscriptionMiniumPrice

> Atualização do valor mínimo da assinatura


```javascript
function updateSubscriptionMiniumPrice(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |
| request |  ``` Required ```  | Request da requisição com o valor mínimo que será configurado |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateSubscriptionMinimumPriceRequest({"key":"value"});

    controller.updateSubscriptionMiniumPrice(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="update_subscription_billing_date"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateSubscriptionBillingDate") updateSubscriptionBillingDate

> Updates the billing date from a subscription


```javascript
function updateSubscriptionBillingDate(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| request |  ``` Required ```  | Request for updating the subscription billing date |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateSubscriptionBillingDateRequest({"key":"value"});

    controller.updateSubscriptionBillingDate(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="update_latest_period_end_at"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateLatestPeriodEndAt") updateLatestPeriodEndAt

> TODO: Add a method description


```javascript
function updateLatestPeriodEndAt(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | TODO: Add a parameter description |
| request |  ``` Required ```  | Request for updating the end date of the current signature cycle |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateCurrentCycleEndDateRequest({"key":"value"});

    controller.updateLatestPeriodEndAt(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="update_current_cycle_status"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.updateCurrentCycleStatus") updateCurrentCycleStatus

> TODO: Add a method description


```javascript
function updateCurrentCycleStatus(subscriptionId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |
| request |  ``` Required ```  | Request for updating the end date of the subscription current status |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var request = new UpdateCurrentCycleStatusRequest({"key":"value"});

    controller.updateCurrentCycleStatus(subscriptionId, request, function(error, response, context) {

    
    });
```



### <a name="get_subscription_cycles"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getSubscriptionCycles") getSubscriptionCycles

> TODO: Add a method description


```javascript
function getSubscriptionCycles(subscriptionId, page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |
| page |  ``` Required ```  | Page number |
| size |  ``` Required ```  | Page size |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var page = 'page';
    var size = 'size';

    controller.getSubscriptionCycles(subscriptionId, page, size, function(error, response, context) {

    
    });
```



### <a name="get_subscription_cycle_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.getSubscriptionCycleById") getSubscriptionCycleById

> TODO: Add a method description


```javascript
function getSubscriptionCycleById(subscriptionId, cycleId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | The subscription id |
| cycleId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var cycleId = 'cycleId';

    controller.getSubscriptionCycleById(subscriptionId, cycleId, function(error, response, context) {

    
    });
```



### <a name="renew_subscription"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionsController.renewSubscription") renewSubscription

> TODO: Add a method description


```javascript
function renewSubscription(subscriptionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;

    controller.renewSubscription(subscriptionId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="orders_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrdersController") OrdersController

### Get singleton instance

The singleton instance of the ``` OrdersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrdersController;
```

### <a name="get_order"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.getOrder") getOrder

> Gets an order


```javascript
function getOrder(orderId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | Order id |



#### Example Usage

```javascript

    var orderId = order_id;

    controller.getOrder(orderId, function(error, response, context) {

    
    });
```



### <a name="create_order"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.createOrder") createOrder

> Creates a new Order


```javascript
function createOrder(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Request for creating an order |



#### Example Usage

```javascript

    var body = new CreateOrderRequest({"key":"value"});

    controller.createOrder(body, function(error, response, context) {

    
    });
```



### <a name="get_orders"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.getOrders") getOrders

> Gets all orders


```javascript
function getOrders(page, size, code, status, createdSince, createdUntil, customerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| code |  ``` Optional ```  | Filter for order's code |
| status |  ``` Optional ```  | Filter for order's status |
| createdSince |  ``` Optional ```  | Filter for order's creation date start range |
| createdUntil |  ``` Optional ```  | Filter for order's creation date end range |
| customerId |  ``` Optional ```  | Filter for order's customer id |



#### Example Usage

```javascript

    var page = 51;
    var size = 51;
    var code = 'code';
    var status = 'status';
    var createdSince = date("D M d, Y G:i");
    var createdUntil = date("D M d, Y G:i");
    var customerId = customer_id;

    controller.getOrders(page, size, code, status, createdSince, createdUntil, customerId, function(error, response, context) {

    
    });
```



### <a name="update_order_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.updateOrderMetadata") updateOrderMetadata

> Updates the metadata from an order


```javascript
function updateOrderMetadata(orderId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | The order id |
| request |  ``` Required ```  | Request for updating the order metadata |



#### Example Usage

```javascript

    var orderId = order_id;
    var request = new UpdateMetadataRequest({"key":"value"});

    controller.updateOrderMetadata(orderId, request, function(error, response, context) {

    
    });
```



### <a name="delete_all_order_items"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.deleteAllOrderItems") deleteAllOrderItems

> TODO: Add a method description


```javascript
function deleteAllOrderItems(orderId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | Order Id |



#### Example Usage

```javascript

    var orderId = 'orderId';

    controller.deleteAllOrderItems(orderId, function(error, response, context) {

    
    });
```



### <a name="update_order_item"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.updateOrderItem") updateOrderItem

> TODO: Add a method description


```javascript
function updateOrderItem(orderId, itemId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | Order Id |
| itemId |  ``` Required ```  | Item Id |
| request |  ``` Required ```  | Item Model |



#### Example Usage

```javascript

    var orderId = 'orderId';
    var itemId = 'itemId';
    var request = new UpdateOrderItemRequest({"key":"value"});

    controller.updateOrderItem(orderId, itemId, request, function(error, response, context) {

    
    });
```



### <a name="delete_order_item"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.deleteOrderItem") deleteOrderItem

> TODO: Add a method description


```javascript
function deleteOrderItem(orderId, itemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | Order Id |
| itemId |  ``` Required ```  | Item Id |



#### Example Usage

```javascript

    var orderId = 'orderId';
    var itemId = 'itemId';

    controller.deleteOrderItem(orderId, itemId, function(error, response, context) {

    
    });
```



### <a name="create_order_item"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.createOrderItem") createOrderItem

> TODO: Add a method description


```javascript
function createOrderItem(orderId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | Order Id |
| request |  ``` Required ```  | Order Item Model |



#### Example Usage

```javascript

    var orderId = 'orderId';
    var request = new CreateOrderItemRequest({"key":"value"});

    controller.createOrderItem(orderId, request, function(error, response, context) {

    
    });
```



### <a name="get_order_item"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.getOrderItem") getOrderItem

> TODO: Add a method description


```javascript
function getOrderItem(orderId, itemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | Order Id |
| itemId |  ``` Required ```  | Item Id |



#### Example Usage

```javascript

    var orderId = 'orderId';
    var itemId = 'itemId';

    controller.getOrderItem(orderId, itemId, function(error, response, context) {

    
    });
```



### <a name="update_order_status"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.updateOrderStatus") updateOrderStatus

> TODO: Add a method description


```javascript
function updateOrderStatus(id, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | Order Id |
| request |  ``` Required ```  | Update Order Model |



#### Example Usage

```javascript

    var id = 'id';
    var request = new UpdateOrderStatusRequest({"key":"value"});

    controller.updateOrderStatus(id, request, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="plans_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PlansController") PlansController

### Get singleton instance

The singleton instance of the ``` PlansController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PlansController;
```

### <a name="create_plan_item"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.createPlanItem") createPlanItem

> Adds a new item to a plan


```javascript
function createPlanItem(planId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| planId |  ``` Required ```  | Plan id |
| request |  ``` Required ```  | Request for creating a plan item |



#### Example Usage

```javascript

    var planId = plan_id;
    var request = new CreatePlanItemRequest({"key":"value"});

    controller.createPlanItem(planId, request, function(error, response, context) {

    
    });
```



### <a name="update_plan_item"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.updatePlanItem") updatePlanItem

> Updates a plan item


```javascript
function updatePlanItem(planId, planItemId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| planId |  ``` Required ```  | Plan id |
| planItemId |  ``` Required ```  | Plan item id |
| body |  ``` Required ```  | Request for updating the plan item |



#### Example Usage

```javascript

    var planId = plan_id;
    var planItemId = plan_item_id;
    var body = new UpdatePlanItemRequest({"key":"value"});

    controller.updatePlanItem(planId, planItemId, body, function(error, response, context) {

    
    });
```



### <a name="get_plan"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.getPlan") getPlan

> Gets a plan


```javascript
function getPlan(planId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| planId |  ``` Required ```  | Plan id |



#### Example Usage

```javascript

    var planId = plan_id;

    controller.getPlan(planId, function(error, response, context) {

    
    });
```



### <a name="delete_plan"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.deletePlan") deletePlan

> Deletes a plan


```javascript
function deletePlan(planId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| planId |  ``` Required ```  | Plan id |



#### Example Usage

```javascript

    var planId = plan_id;

    controller.deletePlan(planId, function(error, response, context) {

    
    });
```



### <a name="update_plan"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.updatePlan") updatePlan

> Updates a plan


```javascript
function updatePlan(planId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| planId |  ``` Required ```  | Plan id |
| request |  ``` Required ```  | Request for updating a plan |



#### Example Usage

```javascript

    var planId = plan_id;
    var request = new UpdatePlanRequest({"key":"value"});

    controller.updatePlan(planId, request, function(error, response, context) {

    
    });
```



### <a name="create_plan"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.createPlan") createPlan

> Creates a new plan


```javascript
function createPlan(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Request for creating a plan |



#### Example Usage

```javascript

    var body = new CreatePlanRequest({"key":"value"});

    controller.createPlan(body, function(error, response, context) {

    
    });
```



### <a name="get_plans"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.getPlans") getPlans

> Gets all plans


```javascript
function getPlans(page, size, name, status, billingType, createdSince, createdUntil, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| name |  ``` Optional ```  | Filter for Plan's name |
| status |  ``` Optional ```  | Filter for Plan's status |
| billingType |  ``` Optional ```  | Filter for plan's billing type |
| createdSince |  ``` Optional ```  | Filter for plan's creation date start range |
| createdUntil |  ``` Optional ```  | Filter for plan's creation date end range |



#### Example Usage

```javascript

    var page = 51;
    var size = 51;
    var name = 'name';
    var status = 'status';
    var billingType = billing_type;
    var createdSince = date("D M d, Y G:i");
    var createdUntil = date("D M d, Y G:i");

    controller.getPlans(page, size, name, status, billingType, createdSince, createdUntil, function(error, response, context) {

    
    });
```



### <a name="update_plan_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.updatePlanMetadata") updatePlanMetadata

> Updates the metadata from a plan


```javascript
function updatePlanMetadata(planId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| planId |  ``` Required ```  | The plan id |
| request |  ``` Required ```  | Request for updating the plan metadata |



#### Example Usage

```javascript

    var planId = plan_id;
    var request = new UpdateMetadataRequest({"key":"value"});

    controller.updatePlanMetadata(planId, request, function(error, response, context) {

    
    });
```



### <a name="get_plan_item"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.getPlanItem") getPlanItem

> Gets a plan item


```javascript
function getPlanItem(planId, planItemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| planId |  ``` Required ```  | Plan id |
| planItemId |  ``` Required ```  | Plan item id |



#### Example Usage

```javascript

    var planId = plan_id;
    var planItemId = plan_item_id;

    controller.getPlanItem(planId, planItemId, function(error, response, context) {

    
    });
```



### <a name="delete_plan_item"></a>![Method: ](https://apidocs.io/img/method.png ".PlansController.deletePlanItem") deletePlanItem

> Removes an item from a plan


```javascript
function deletePlanItem(planId, planItemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| planId |  ``` Required ```  | Plan id |
| planItemId |  ``` Required ```  | Plan item id |



#### Example Usage

```javascript

    var planId = plan_id;
    var planItemId = plan_item_id;

    controller.deletePlanItem(planId, planItemId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="invoices_controller"></a>![Class: ](https://apidocs.io/img/class.png ".InvoicesController") InvoicesController

### Get singleton instance

The singleton instance of the ``` InvoicesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.InvoicesController;
```

### <a name="cancel_invoice"></a>![Method: ](https://apidocs.io/img/method.png ".InvoicesController.cancelInvoice") cancelInvoice

> Cancels an invoice


```javascript
function cancelInvoice(invoiceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| invoiceId |  ``` Required ```  | Invoice id |



#### Example Usage

```javascript

    var invoiceId = invoice_id;

    controller.cancelInvoice(invoiceId, function(error, response, context) {

    
    });
```



### <a name="get_invoice"></a>![Method: ](https://apidocs.io/img/method.png ".InvoicesController.getInvoice") getInvoice

> Gets an invoice


```javascript
function getInvoice(invoiceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| invoiceId |  ``` Required ```  | Invoice Id |



#### Example Usage

```javascript

    var invoiceId = invoice_id;

    controller.getInvoice(invoiceId, function(error, response, context) {

    
    });
```



### <a name="create_invoice"></a>![Method: ](https://apidocs.io/img/method.png ".InvoicesController.createInvoice") createInvoice

> Create an Invoice


```javascript
function createInvoice(subscriptionId, cycleId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |
| cycleId |  ``` Required ```  | Cycle Id |
| request |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;
    var cycleId = cycle_id;
    var request = new CreateInvoiceRequest({"key":"value"});

    controller.createInvoice(subscriptionId, cycleId, request, function(error, response, context) {

    
    });
```



### <a name="update_invoice_status"></a>![Method: ](https://apidocs.io/img/method.png ".InvoicesController.updateInvoiceStatus") updateInvoiceStatus

> Updates the status from an invoice


```javascript
function updateInvoiceStatus(invoiceId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| invoiceId |  ``` Required ```  | Invoice Id |
| request |  ``` Required ```  | Request for updating an invoice's status |



#### Example Usage

```javascript

    var invoiceId = invoice_id;
    var request = new UpdateInvoiceStatusRequest({"key":"value"});

    controller.updateInvoiceStatus(invoiceId, request, function(error, response, context) {

    
    });
```



### <a name="get_invoices"></a>![Method: ](https://apidocs.io/img/method.png ".InvoicesController.getInvoices") getInvoices

> Gets all invoices


```javascript
function getInvoices(page, size, code, customerId, subscriptionId, createdSince, createdUntil, status, dueSince, dueUntil, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| code |  ``` Optional ```  | Filter for Invoice's code |
| customerId |  ``` Optional ```  | Filter for Invoice's customer id |
| subscriptionId |  ``` Optional ```  | Filter for Invoice's subscription id |
| createdSince |  ``` Optional ```  | Filter for Invoice's creation date start range |
| createdUntil |  ``` Optional ```  | Filter for Invoices creation date end range |
| status |  ``` Optional ```  | Filter for Invoice's status |
| dueSince |  ``` Optional ```  | Filter for Invoice's due date start range |
| dueUntil |  ``` Optional ```  | Filter for Invoice's due date end range |



#### Example Usage

```javascript

    var page = 51;
    var size = 51;
    var code = 'code';
    var customerId = customer_id;
    var subscriptionId = subscription_id;
    var createdSince = date("D M d, Y G:i");
    var createdUntil = date("D M d, Y G:i");
    var status = 'status';
    var dueSince = date("D M d, Y G:i");
    var dueUntil = date("D M d, Y G:i");

    controller.getInvoices(page, size, code, customerId, subscriptionId, createdSince, createdUntil, status, dueSince, dueUntil, function(error, response, context) {

    
    });
```



### <a name="update_invoice_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".InvoicesController.updateInvoiceMetadata") updateInvoiceMetadata

> Updates the metadata from an invoice


```javascript
function updateInvoiceMetadata(invoiceId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| invoiceId |  ``` Required ```  | The invoice id |
| request |  ``` Required ```  | Request for updating the invoice metadata |



#### Example Usage

```javascript

    var invoiceId = invoice_id;
    var request = new UpdateMetadataRequest({"key":"value"});

    controller.updateInvoiceMetadata(invoiceId, request, function(error, response, context) {

    
    });
```



### <a name="get_partial_invoice"></a>![Method: ](https://apidocs.io/img/method.png ".InvoicesController.getPartialInvoice") getPartialInvoice

> TODO: Add a method description


```javascript
function getPartialInvoice(subscriptionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionId |  ``` Required ```  | Subscription Id |



#### Example Usage

```javascript

    var subscriptionId = subscription_id;

    controller.getPartialInvoice(subscriptionId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="customers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CustomersController") CustomersController

### Get singleton instance

The singleton instance of the ``` CustomersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CustomersController;
```

### <a name="update_card"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.updateCard") updateCard

> Updates a card


```javascript
function updateCard(customerId, cardId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| cardId |  ``` Required ```  | Card id |
| request |  ``` Required ```  | Request for updating a card |



#### Example Usage

```javascript

    var customerId = customer_id;
    var cardId = card_id;
    var request = new UpdateCardRequest({"key":"value"});

    controller.updateCard(customerId, cardId, request, function(error, response, context) {

    
    });
```



### <a name="update_address"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.updateAddress") updateAddress

> Updates an address


```javascript
function updateAddress(customerId, addressId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| addressId |  ``` Required ```  | Address Id |
| request |  ``` Required ```  | Request for updating an address |



#### Example Usage

```javascript

    var customerId = customer_id;
    var addressId = address_id;
    var request = new UpdateAddressRequest({"key":"value"});

    controller.updateAddress(customerId, addressId, request, function(error, response, context) {

    
    });
```



### <a name="create_customer"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.createCustomer") createCustomer

> Creates a new customer


```javascript
function createCustomer(request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| request |  ``` Required ```  | Request for creating a customer |



#### Example Usage

```javascript

    var request = new CreateCustomerRequest({"key":"value"});

    controller.createCustomer(request, function(error, response, context) {

    
    });
```



### <a name="get_customer"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getCustomer") getCustomer

> Get a customer


```javascript
function getCustomer(customerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |



#### Example Usage

```javascript

    var customerId = customer_id;

    controller.getCustomer(customerId, function(error, response, context) {

    
    });
```



### <a name="get_access_tokens"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getAccessTokens") getAccessTokens

> Get all access tokens from a customer


```javascript
function getAccessTokens(customerId, page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |



#### Example Usage

```javascript

    var customerId = customer_id;
    var page = 51;
    var size = 51;

    controller.getAccessTokens(customerId, page, size, function(error, response, context) {

    
    });
```



### <a name="get_addresses"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getAddresses") getAddresses

> Gets all adressess from a customer


```javascript
function getAddresses(customerId, page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |



#### Example Usage

```javascript

    var customerId = customer_id;
    var page = 51;
    var size = 51;

    controller.getAddresses(customerId, page, size, function(error, response, context) {

    
    });
```



### <a name="get_cards"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getCards") getCards

> Get all cards from a customer


```javascript
function getCards(customerId, page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |



#### Example Usage

```javascript

    var customerId = customer_id;
    var page = 51;
    var size = 51;

    controller.getCards(customerId, page, size, function(error, response, context) {

    
    });
```



### <a name="delete_access_tokens"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.deleteAccessTokens") deleteAccessTokens

> Delete a Customer's access tokens


```javascript
function deleteAccessTokens(customerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |



#### Example Usage

```javascript

    var customerId = customer_id;

    controller.deleteAccessTokens(customerId, function(error, response, context) {

    
    });
```



### <a name="get_access_token"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getAccessToken") getAccessToken

> Get a Customer's access token


```javascript
function getAccessToken(customerId, tokenId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| tokenId |  ``` Required ```  | Token Id |



#### Example Usage

```javascript

    var customerId = customer_id;
    var tokenId = token_id;

    controller.getAccessToken(customerId, tokenId, function(error, response, context) {

    
    });
```



### <a name="create_access_token"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.createAccessToken") createAccessToken

> Creates a access token for a customer


```javascript
function createAccessToken(customerId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| request |  ``` Required ```  | Request for creating a access token |



#### Example Usage

```javascript

    var customerId = customer_id;
    var request = new CreateAccessTokenRequest({"key":"value"});

    controller.createAccessToken(customerId, request, function(error, response, context) {

    
    });
```



### <a name="delete_access_token"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.deleteAccessToken") deleteAccessToken

> Delete a customer's access token


```javascript
function deleteAccessToken(customerId, tokenId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| tokenId |  ``` Required ```  | Token Id |



#### Example Usage

```javascript

    var customerId = customer_id;
    var tokenId = token_id;

    controller.deleteAccessToken(customerId, tokenId, function(error, response, context) {

    
    });
```



### <a name="update_customer_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.updateCustomerMetadata") updateCustomerMetadata

> Updates the metadata a customer


```javascript
function updateCustomerMetadata(customerId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | The customer id |
| request |  ``` Required ```  | Request for updating the customer metadata |



#### Example Usage

```javascript

    var customerId = customer_id;
    var request = new UpdateMetadataRequest({"key":"value"});

    controller.updateCustomerMetadata(customerId, request, function(error, response, context) {

    
    });
```



### <a name="update_customer"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.updateCustomer") updateCustomer

> Updates a customer


```javascript
function updateCustomer(customerId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer id |
| request |  ``` Required ```  | Request for updating a customer |



#### Example Usage

```javascript

    var customerId = customer_id;
    var request = new UpdateCustomerRequest({"key":"value"});

    controller.updateCustomer(customerId, request, function(error, response, context) {

    
    });
```



### <a name="get_address"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getAddress") getAddress

> Get a customer's address


```javascript
function getAddress(customerId, addressId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer id |
| addressId |  ``` Required ```  | Address Id |



#### Example Usage

```javascript

    var customerId = customer_id;
    var addressId = address_id;

    controller.getAddress(customerId, addressId, function(error, response, context) {

    
    });
```



### <a name="delete_address"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.deleteAddress") deleteAddress

> Delete a Customer's address


```javascript
function deleteAddress(customerId, addressId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| addressId |  ``` Required ```  | Address Id |



#### Example Usage

```javascript

    var customerId = customer_id;
    var addressId = address_id;

    controller.deleteAddress(customerId, addressId, function(error, response, context) {

    
    });
```



### <a name="delete_card"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.deleteCard") deleteCard

> Delete a customer's card


```javascript
function deleteCard(customerId, cardId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| cardId |  ``` Required ```  | Card Id |



#### Example Usage

```javascript

    var customerId = customer_id;
    var cardId = card_id;

    controller.deleteCard(customerId, cardId, function(error, response, context) {

    
    });
```



### <a name="create_address"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.createAddress") createAddress

> Creates a new address for a customer


```javascript
function createAddress(customerId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer Id |
| request |  ``` Required ```  | Request for creating an address |



#### Example Usage

```javascript

    var customerId = customer_id;
    var request = new CreateAddressRequest({"key":"value"});

    controller.createAddress(customerId, request, function(error, response, context) {

    
    });
```



### <a name="get_card"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getCard") getCard

> Get a customer's card


```javascript
function getCard(customerId, cardId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer id |
| cardId |  ``` Required ```  | Card id |



#### Example Usage

```javascript

    var customerId = customer_id;
    var cardId = card_id;

    controller.getCard(customerId, cardId, function(error, response, context) {

    
    });
```



### <a name="create_card"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.createCard") createCard

> Creates a new card for a customer


```javascript
function createCard(customerId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer id |
| request |  ``` Required ```  | Request for creating a card |



#### Example Usage

```javascript

    var customerId = customer_id;
    var request = new CreateCardRequest({"key":"value"});

    controller.createCard(customerId, request, function(error, response, context) {

    
    });
```



### <a name="get_customers"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getCustomers") getCustomers

> Get all Customers


```javascript
function getCustomers(name, document, page, size, email, code, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Optional ```  | Name of the Customer |
| document |  ``` Optional ```  | Document of the Customer |
| page |  ``` Optional ```  ``` DefaultValue ```  | Current page the the search |
| size |  ``` Optional ```  ``` DefaultValue ```  | Quantity pages of the search |
| email |  ``` Optional ```  | Customer's email |
| code |  ``` Optional ```  | Customer's code |



#### Example Usage

```javascript

    var name = 'name';
    var document = 'document';
    var page = 143;
    var size = 143;
    var email = 'email';
    var code = 'Code';

    controller.getCustomers(name, document, page, size, email, code, function(error, response, context) {

    
    });
```



### <a name="renew_card"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.renewCard") renewCard

> Renew a card


```javascript
function renewCard(customerId, cardId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerId |  ``` Required ```  | Customer id |
| cardId |  ``` Required ```  | Card Id |



#### Example Usage

```javascript

    var customerId = customer_id;
    var cardId = card_id;

    controller.renewCard(customerId, cardId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="charges_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ChargesController") ChargesController

### Get singleton instance

The singleton instance of the ``` ChargesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ChargesController;
```

### <a name="update_charge_card"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.updateChargeCard") updateChargeCard

> Updates the card from a charge


```javascript
function updateChargeCard(chargeId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | Charge id |
| request |  ``` Required ```  | Request for updating a charge's card |



#### Example Usage

```javascript

    var chargeId = charge_id;
    var request = new UpdateChargeCardRequest({"key":"value"});

    controller.updateChargeCard(chargeId, request, function(error, response, context) {

    
    });
```



### <a name="update_charge_payment_method"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.updateChargePaymentMethod") updateChargePaymentMethod

> Updates a charge's payment method


```javascript
function updateChargePaymentMethod(chargeId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | Charge id |
| request |  ``` Required ```  | Request for updating the payment method from a charge |



#### Example Usage

```javascript

    var chargeId = charge_id;
    var request = new UpdateChargePaymentMethodRequest({"key":"value"});

    controller.updateChargePaymentMethod(chargeId, request, function(error, response, context) {

    
    });
```



### <a name="create_charge"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.createCharge") createCharge

> Creates a new charge


```javascript
function createCharge(request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| request |  ``` Required ```  | Request for creating a charge |



#### Example Usage

```javascript

    var request = new CreateChargeRequest({"key":"value"});

    controller.createCharge(request, function(error, response, context) {

    
    });
```



### <a name="get_charge"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.getCharge") getCharge

> Get a charge from its id


```javascript
function getCharge(chargeId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | Charge id |



#### Example Usage

```javascript

    var chargeId = charge_id;

    controller.getCharge(chargeId, function(error, response, context) {

    
    });
```



### <a name="retry_charge"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.retryCharge") retryCharge

> Retries a charge


```javascript
function retryCharge(chargeId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | Charge id |



#### Example Usage

```javascript

    var chargeId = charge_id;

    controller.retryCharge(chargeId, function(error, response, context) {

    
    });
```



### <a name="get_charges"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.getCharges") getCharges

> Lists all charges


```javascript
function getCharges(page, size, code, status, paymentMethod, customerId, orderId, createdSince, createdUntil, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| code |  ``` Optional ```  | Filter for charge's code |
| status |  ``` Optional ```  | Filter for charge's status |
| paymentMethod |  ``` Optional ```  | Filter for charge's payment method |
| customerId |  ``` Optional ```  | Filter for charge's customer id |
| orderId |  ``` Optional ```  | Filter for charge's order id |
| createdSince |  ``` Optional ```  | Filter for the beginning of the range for charge's creation |
| createdUntil |  ``` Optional ```  | Filter for the end of the range for charge's creation |



#### Example Usage

```javascript

    var page = 143;
    var size = 143;
    var code = 'code';
    var status = 'status';
    var paymentMethod = payment_method;
    var customerId = customer_id;
    var orderId = order_id;
    var createdSince = date("D M d, Y G:i");
    var createdUntil = date("D M d, Y G:i");

    controller.getCharges(page, size, code, status, paymentMethod, customerId, orderId, createdSince, createdUntil, function(error, response, context) {

    
    });
```



### <a name="update_charge_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.updateChargeMetadata") updateChargeMetadata

> Updates the metadata from a charge


```javascript
function updateChargeMetadata(chargeId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | The charge id |
| request |  ``` Required ```  | Request for updating the charge metadata |



#### Example Usage

```javascript

    var chargeId = charge_id;
    var request = new UpdateMetadataRequest({"key":"value"});

    controller.updateChargeMetadata(chargeId, request, function(error, response, context) {

    
    });
```



### <a name="cancel_charge"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.cancelCharge") cancelCharge

> Cancel a charge


```javascript
function cancelCharge(chargeId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | Charge id |
| request |  ``` Optional ```  | Request for cancelling a charge |



#### Example Usage

```javascript

    var chargeId = charge_id;
    var request = new CreateCancelChargeRequest({"key":"value"});

    controller.cancelCharge(chargeId, request, function(error, response, context) {

    
    });
```



### <a name="capture_charge"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.captureCharge") captureCharge

> Captures a charge


```javascript
function captureCharge(chargeId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | Charge id |
| request |  ``` Optional ```  | Request for capturing a charge |



#### Example Usage

```javascript

    var chargeId = charge_id;
    var request = new CreateCaptureChargeRequest({"key":"value"});

    controller.captureCharge(chargeId, request, function(error, response, context) {

    
    });
```



### <a name="update_charge_due_date"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.updateChargeDueDate") updateChargeDueDate

> Updates the due date from a charge


```javascript
function updateChargeDueDate(chargeId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | Charge Id |
| request |  ``` Required ```  | Request for updating the due date |



#### Example Usage

```javascript

    var chargeId = charge_id;
    var request = new UpdateChargeDueDateRequest({"key":"value"});

    controller.updateChargeDueDate(chargeId, request, function(error, response, context) {

    
    });
```



### <a name="confirm_payment"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.confirmPayment") confirmPayment

> TODO: Add a method description


```javascript
function confirmPayment(chargeId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | TODO: Add a parameter description |
| request |  ``` Optional ```  | Request for confirm payment |



#### Example Usage

```javascript

    var chargeId = charge_id;
    var request = new CreateConfirmPaymentRequest({"key":"value"});

    controller.confirmPayment(chargeId, request, function(error, response, context) {

    
    });
```



### <a name="get_charge_transactions"></a>![Method: ](https://apidocs.io/img/method.png ".ChargesController.getChargeTransactions") getChargeTransactions

> TODO: Add a method description


```javascript
function getChargeTransactions(chargeId, page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| chargeId |  ``` Required ```  | Charge Id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |



#### Example Usage

```javascript

    var chargeId = charge_id;
    var page = 143;
    var size = 143;

    controller.getChargeTransactions(chargeId, page, size, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="recipients_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecipientsController") RecipientsController

### Get singleton instance

The singleton instance of the ``` RecipientsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RecipientsController;
```

### <a name="update_recipient_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.updateRecipientMetadata") updateRecipientMetadata

> Updates recipient metadata


```javascript
function updateRecipientMetadata(recipientId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| request |  ``` Required ```  | Metadata |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var request = new UpdateMetadataRequest({"key":"value"});

    controller.updateRecipientMetadata(recipientId, request, function(error, response, context) {

    
    });
```



### <a name="get_transfer"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.getTransfer") getTransfer

> Gets a transfer


```javascript
function getTransfer(recipientId, transferId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| transferId |  ``` Required ```  | Transfer id |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var transferId = transfer_id;

    controller.getTransfer(recipientId, transferId, function(error, response, context) {

    
    });
```



### <a name="get_transfers"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.getTransfers") getTransfers

> Gets a paginated list of transfers for the recipient


```javascript
function getTransfers(recipientId, page, size, status, createdSince, createdUntil, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| status |  ``` Optional ```  | Filter for transfer status |
| createdSince |  ``` Optional ```  | Filter for start range of transfer creation date |
| createdUntil |  ``` Optional ```  | Filter for end range of transfer creation date |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var page = 143;
    var size = 143;
    var status = 'status';
    var createdSince = date("D M d, Y G:i");
    var createdUntil = date("D M d, Y G:i");

    controller.getTransfers(recipientId, page, size, status, createdSince, createdUntil, function(error, response, context) {

    
    });
```



### <a name="create_anticipation"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.createAnticipation") createAnticipation

> Creates an anticipation


```javascript
function createAnticipation(recipientId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| request |  ``` Required ```  | Anticipation data |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var request = new CreateAnticipationRequest({"key":"value"});

    controller.createAnticipation(recipientId, request, function(error, response, context) {

    
    });
```



### <a name="get_anticipation"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.getAnticipation") getAnticipation

> Gets an anticipation


```javascript
function getAnticipation(recipientId, anticipationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| anticipationId |  ``` Required ```  | Anticipation id |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var anticipationId = anticipation_id;

    controller.getAnticipation(recipientId, anticipationId, function(error, response, context) {

    
    });
```



### <a name="get_anticipation_limits"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.getAnticipationLimits") getAnticipationLimits

> Gets the anticipation limits for a recipient


```javascript
function getAnticipationLimits(recipientId, timeframe, paymentDate, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| timeframe |  ``` Required ```  | Timeframe |
| paymentDate |  ``` Required ```  | Anticipation payment date |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var timeframe = 'timeframe';
    var paymentDate = date("D M d, Y G:i");

    controller.getAnticipationLimits(recipientId, timeframe, paymentDate, function(error, response, context) {

    
    });
```



### <a name="get_anticipations"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.getAnticipations") getAnticipations

> Retrieves a paginated list of anticipations from a recipient


```javascript
function getAnticipations(recipientId, page, size, status, timeframe, paymentDateSince, paymentDateUntil, createdSince, createdUntil, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| status |  ``` Optional ```  | Filter for anticipation status |
| timeframe |  ``` Optional ```  | Filter for anticipation timeframe |
| paymentDateSince |  ``` Optional ```  | Filter for start range for anticipation payment date |
| paymentDateUntil |  ``` Optional ```  | Filter for end range for anticipation payment date |
| createdSince |  ``` Optional ```  | Filter for start range for anticipation creation date |
| createdUntil |  ``` Optional ```  | Filter for end range for anticipation creation date |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var page = 143;
    var size = 143;
    var status = 'status';
    var timeframe = 'timeframe';
    var paymentDateSince = date("D M d, Y G:i");
    var paymentDateUntil = date("D M d, Y G:i");
    var createdSince = date("D M d, Y G:i");
    var createdUntil = date("D M d, Y G:i");

    controller.getAnticipations(recipientId, page, size, status, timeframe, paymentDateSince, paymentDateUntil, createdSince, createdUntil, function(error, response, context) {

    
    });
```



### <a name="update_recipient"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.updateRecipient") updateRecipient

> Updates a recipient


```javascript
function updateRecipient(recipientId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| request |  ``` Required ```  | Recipient data |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var request = new UpdateRecipientRequest({"key":"value"});

    controller.updateRecipient(recipientId, request, function(error, response, context) {

    
    });
```



### <a name="update_recipient_default_bank_account"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.updateRecipientDefaultBankAccount") updateRecipientDefaultBankAccount

> Updates the default bank account from a recipient


```javascript
function updateRecipientDefaultBankAccount(recipientId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |
| request |  ``` Required ```  | Bank account data |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var request = new UpdateRecipientBankAccountRequest({"key":"value"});

    controller.updateRecipientDefaultBankAccount(recipientId, request, function(error, response, context) {

    
    });
```



### <a name="get_recipient"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.getRecipient") getRecipient

> Retrieves recipient information


```javascript
function getRecipient(recipientId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipiend id |



#### Example Usage

```javascript

    var recipientId = recipient_id;

    controller.getRecipient(recipientId, function(error, response, context) {

    
    });
```



### <a name="get_recipients"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.getRecipients") getRecipients

> Retrieves paginated recipients information


```javascript
function getRecipients(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |



#### Example Usage

```javascript

    var page = 143;
    var size = 143;

    controller.getRecipients(page, size, function(error, response, context) {

    
    });
```



### <a name="get_balance"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.getBalance") getBalance

> Get balance information for a recipient


```javascript
function getBalance(recipientId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient id |



#### Example Usage

```javascript

    var recipientId = recipient_id;

    controller.getBalance(recipientId, function(error, response, context) {

    
    });
```



### <a name="create_transfer"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.createTransfer") createTransfer

> Creates a transfer for a recipient


```javascript
function createTransfer(recipientId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient Id |
| request |  ``` Required ```  | Transfer data |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var request = new CreateTransferRequest({"key":"value"});

    controller.createTransfer(recipientId, request, function(error, response, context) {

    
    });
```



### <a name="create_recipient"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.createRecipient") createRecipient

> Creates a new recipient


```javascript
function createRecipient(request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| request |  ``` Required ```  | Recipient data |



#### Example Usage

```javascript

    var request = new CreateRecipientRequest({"key":"value"});

    controller.createRecipient(request, function(error, response, context) {

    
    });
```



### <a name="update_recipient_transfer_settings"></a>![Method: ](https://apidocs.io/img/method.png ".RecipientsController.updateRecipientTransferSettings") updateRecipientTransferSettings

> TODO: Add a method description


```javascript
function updateRecipientTransferSettings(recipientId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recipientId |  ``` Required ```  | Recipient Identificator |
| request |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var recipientId = recipient_id;
    var request = new UpdateTransferSettingsRequest({"key":"value"});

    controller.updateRecipientTransferSettings(recipientId, request, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="tokens_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TokensController") TokensController

### Get singleton instance

The singleton instance of the ``` TokensController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TokensController;
```

### <a name="get_token"></a>![Method: ](https://apidocs.io/img/method.png ".TokensController.getToken") getToken

> *Tags:*  ``` Skips Authentication ``` 

> Gets a token from its id


```javascript
function getToken(id, publicKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | Token id |
| publicKey |  ``` Required ```  | Public key |



#### Example Usage

```javascript

    var id = 'id';
    var publicKey = public_key;

    controller.getToken(id, publicKey, function(error, response, context) {

    
    });
```



### <a name="create_token"></a>![Method: ](https://apidocs.io/img/method.png ".TokensController.createToken") createToken

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createToken(publicKey, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| publicKey |  ``` Required ```  | Public key |
| request |  ``` Required ```  | Request for creating a token |



#### Example Usage

```javascript

    var publicKey = public_key;
    var request = new CreateTokenRequest({"key":"value"});

    controller.createToken(publicKey, request, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sellers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SellersController") SellersController

### Get singleton instance

The singleton instance of the ``` SellersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SellersController;
```

### <a name="get_seller_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".SellersController.getSellerById") getSellerById

> TODO: Add a method description


```javascript
function getSellerById(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | Seller Id |



#### Example Usage

```javascript

    var id = 'id';

    controller.getSellerById(id, function(error, response, context) {

    
    });
```



### <a name="delete_seller"></a>![Method: ](https://apidocs.io/img/method.png ".SellersController.deleteSeller") deleteSeller

> TODO: Add a method description


```javascript
function deleteSeller(sellerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| sellerId |  ``` Required ```  | Seller Id |



#### Example Usage

```javascript

    var sellerId = 'sellerId';

    controller.deleteSeller(sellerId, function(error, response, context) {

    
    });
```



### <a name="create_seller"></a>![Method: ](https://apidocs.io/img/method.png ".SellersController.createSeller") createSeller

> TODO: Add a method description


```javascript
function createSeller(request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| request |  ``` Required ```  | Seller Model |



#### Example Usage

```javascript

    var request = new CreateSellerRequest({"key":"value"});

    controller.createSeller(request, function(error, response, context) {

    
    });
```



### <a name="get_sellers"></a>![Method: ](https://apidocs.io/img/method.png ".SellersController.getSellers") getSellers

> TODO: Add a method description


```javascript
function getSellers(page, size, name, document, code, status, type, createdSince, createdUntil, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page number |
| size |  ``` Optional ```  | Page size |
| name |  ``` Optional ```  | TODO: Add a parameter description |
| document |  ``` Optional ```  | TODO: Add a parameter description |
| code |  ``` Optional ```  | TODO: Add a parameter description |
| status |  ``` Optional ```  | TODO: Add a parameter description |
| type |  ``` Optional ```  | TODO: Add a parameter description |
| createdSince |  ``` Optional ```  | TODO: Add a parameter description |
| createdUntil |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 143;
    var size = 143;
    var name = 'name';
    var document = 'document';
    var code = 'code';
    var status = 'status';
    var type = 'type';
    var createdSince = date("D M d, Y G:i");
    var createdUntil = date("D M d, Y G:i");

    controller.getSellers(page, size, name, document, code, status, type, createdSince, createdUntil, function(error, response, context) {

    
    });
```



### <a name="update_seller"></a>![Method: ](https://apidocs.io/img/method.png ".SellersController.updateSeller") updateSeller

> TODO: Add a method description


```javascript
function updateSeller(id, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| request |  ``` Required ```  | Update Seller model |



#### Example Usage

```javascript

    var id = 'id';
    var request = new UpdateSellerRequest({"key":"value"});

    controller.updateSeller(id, request, function(error, response, context) {

    
    });
```



### <a name="update_seller_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".SellersController.updateSellerMetadata") updateSellerMetadata

> TODO: Add a method description


```javascript
function updateSellerMetadata(sellerId, request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| sellerId |  ``` Required ```  | Seller Id |
| request |  ``` Required ```  | Request for updating the charge metadata |



#### Example Usage

```javascript

    var sellerId = seller_id;
    var request = new UpdateMetadataRequest({"key":"value"});

    controller.updateSellerMetadata(sellerId, request, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="transactions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TransactionsController") TransactionsController

### Get singleton instance

The singleton instance of the ``` TransactionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TransactionsController;
```

### <a name="get_transaction"></a>![Method: ](https://apidocs.io/img/method.png ".TransactionsController.getTransaction") getTransaction

> TODO: Add a method description


```javascript
function getTransaction(transactionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionId = transaction_id;

    controller.getTransaction(transactionId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



