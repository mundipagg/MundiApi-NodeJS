/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.SubscriptionsController;
const SubscriptionsDiscountsResponse = testerlib.SubscriptionsDiscountsResponse;
const SubscriptionsDiscountsRequest = testerlib.SubscriptionsDiscountsRequest;
const GetSubscriptionItemResponse = testerlib.GetSubscriptionItemResponse;
const SubscriptionsItemsRequest = testerlib.SubscriptionsItemsRequest;
const SubscriptionsItemsUsagesUsageIdResponse = testerlib.SubscriptionsItemsUsagesUsageIdResponse;
const GetSubscriptionResponse = testerlib.GetSubscriptionResponse;
const SubscriptionsRequest = testerlib.SubscriptionsRequest;
const SubscriptionsIncrementsResponse = testerlib.SubscriptionsIncrementsResponse;
const SubscriptionsCyclesResponse = testerlib.SubscriptionsCyclesResponse;
const SubscriptionsStartAtRequest = testerlib.SubscriptionsStartAtRequest;
const SubscriptionsPaymentMethodRequest = testerlib.SubscriptionsPaymentMethodRequest;
const UpdateCurrentCycleStatusRequest = testerlib.UpdateCurrentCycleStatusRequest;
const SubscriptionsRequest1 = testerlib.SubscriptionsRequest1;
const SubscriptionsResponse3 = testerlib.SubscriptionsResponse3;
const GetUsagesDetailsResponse = testerlib.GetUsagesDetailsResponse;
const SubscriptionsCyclesResponse2 = testerlib.SubscriptionsCyclesResponse2;
const SubscriptionsItemsUsagesResponse = testerlib.SubscriptionsItemsUsagesResponse;
const SubscriptionsItemsUsagesResponse1 = testerlib.SubscriptionsItemsUsagesResponse1;
const ListIncrementsResponse = testerlib.ListIncrementsResponse;
const SubscriptionsItemsRequest1 = testerlib.SubscriptionsItemsRequest1;
const SubscriptionsItemsResponse3 = testerlib.SubscriptionsItemsResponse3;
const SubscriptionsBillingDateRequest = testerlib.SubscriptionsBillingDateRequest;
const SubscriptionsPeriodsLatestEndAtRequest = testerlib.SubscriptionsPeriodsLatestEndAtRequest;
const SubscriptionsGatewayAffiliationIdRequest = testerlib.SubscriptionsGatewayAffiliationIdRequest;
const SubscriptionsCardRequest = testerlib.SubscriptionsCardRequest;
const SubscriptionsMetadataRequest = testerlib.SubscriptionsMetadataRequest;
const UpdateSubscriptionDueDaysRequest = testerlib.UpdateSubscriptionDueDaysRequest;
const ListDiscountsResponse = testerlib.ListDiscountsResponse;
const SubscriptionsIncrementsRequest = testerlib.SubscriptionsIncrementsRequest;
const SubscriptionsMinimumPriceRequest = testerlib.SubscriptionsMinimumPriceRequest;
const GetUsageReportResponse = testerlib.GetUsageReportResponse;
const UpdateSubscriptionSplitRequest = testerlib.UpdateSubscriptionSplitRequest;

describe("SubscriptionsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Gets all subscriptions
     */
    it("should testTestGetSubscriptions response", function testTestGetSubscriptionsTest(done) {
        // parameters for the API call
        let page = null;
        let size = null;
        let code = null;
        let billingType = null;
        let customerId = null;
        let planId = null;
        let cardId = null;
        let status = null;
        let nextBillingSince = null;
        let nextBillingUntil = null;
        let createdSince = null;
        let createdUntil = null;

        controller.getSubscriptions(page, size, code, billingType, customerId, planId, cardId, status, nextBillingSince, nextBillingUntil, createdSince, createdUntil, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        }).catch(() => undefined);
    });

});
