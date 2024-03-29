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

const controller = testerlib.OrdersController;
const OrdersClosedResponse = testerlib.OrdersClosedResponse;
const UpdateOrderStatusRequest = testerlib.UpdateOrderStatusRequest;
const OrdersItemsResponse = testerlib.OrdersItemsResponse;
const OrdersItemsResponse1 = testerlib.OrdersItemsResponse1;
const OrdersItemsRequest = testerlib.OrdersItemsRequest;
const OrdersMetadataResponse = testerlib.OrdersMetadataResponse;
const OrdersMetadataRequest = testerlib.OrdersMetadataRequest;
const OrdersResponse = testerlib.OrdersResponse;
const OrdersResponse1 = testerlib.OrdersResponse1;
const OrdersRequest = testerlib.OrdersRequest;
const OrdersItemsRequest1 = testerlib.OrdersItemsRequest1;

describe("OrdersController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Gets all orders
     */
    it("should testTestGetOrders response", function testTestGetOrdersTest(done) {
        // parameters for the API call
        let page = null;
        let size = null;
        let code = null;
        let status = null;
        let createdSince = null;
        let createdUntil = null;
        let customerId = null;

        controller.getOrders(page, size, code, status, createdSince, createdUntil, customerId, function callback(error, response, context) {
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
