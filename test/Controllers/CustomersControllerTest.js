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

const controller = testerlib.CustomersController;
const CustomersResponse = testerlib.CustomersResponse;
const CustomersAccessTokensResponse1 = testerlib.CustomersAccessTokensResponse1;
const CustomersAddressesResponse1 = testerlib.CustomersAddressesResponse1;
const CustomersAddressesRequest = testerlib.CustomersAddressesRequest;
const CustomersAddressesRequest1 = testerlib.CustomersAddressesRequest1;
const CustomersCardsResponse1 = testerlib.CustomersCardsResponse1;
const CustomersRequest1 = testerlib.CustomersRequest1;
const CustomersMetadataResponse = testerlib.CustomersMetadataResponse;
const CustomersMetadataRequest = testerlib.CustomersMetadataRequest;
const CustomersCardsResponse = testerlib.CustomersCardsResponse;
const CustomersRequest = testerlib.CustomersRequest;
const CustomersCardsRenewResponse = testerlib.CustomersCardsRenewResponse;
const CustomersResponse3 = testerlib.CustomersResponse3;
const CustomersAccessTokensResponse = testerlib.CustomersAccessTokensResponse;
const CustomersAccessTokensRequest = testerlib.CustomersAccessTokensRequest;
const CustomersAddressesResponse = testerlib.CustomersAddressesResponse;
const CustomersCardsRequest = testerlib.CustomersCardsRequest;
const CustomersCardsRequest1 = testerlib.CustomersCardsRequest1;

describe("CustomersController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Get all Customers
     */
    it("should testTestGetCustomers response", function testTestGetCustomersTest(done) {
        // parameters for the API call
        let name = null;
        let document = null;
        let page = 1;
        let size = 10;
        let email = null;
        let code = null;

        controller.getCustomers(name, document, page, size, email, code, function callback(error, response, context) {
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
