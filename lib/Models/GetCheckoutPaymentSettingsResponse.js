/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetCheckoutPaymentSettingsResponse
 */
class GetCheckoutPaymentSettingsResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.successUrl = this.constructor.getValue(obj.successUrl || obj.success_url);
        this.paymentUrl = this.constructor.getValue(obj.paymentUrl || obj.payment_url);
        this.acceptedPaymentMethods =
          this.constructor.getValue(obj.acceptedPaymentMethods
     || obj.accepted_payment_methods);
        this.status = this.constructor.getValue(obj.status);
        this.customer = this.constructor.getValue(obj.customer);
        this.amount = this.constructor.getValue(obj.amount);
        this.defaultPaymentMethod =
          this.constructor.getValue(obj.defaultPaymentMethod
     || obj.default_payment_method);
        this.gatewayAffiliationId =
          this.constructor.getValue(obj.gatewayAffiliationId
     || obj.gateway_affiliation_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'successUrl', realName: 'success_url' },
            { name: 'paymentUrl', realName: 'payment_url' },
            { name: 'acceptedPaymentMethods', realName: 'accepted_payment_methods', array: true },
            { name: 'status', realName: 'status' },
            { name: 'customer', realName: 'customer', type: 'Customer' },
            { name: 'amount', realName: 'amount' },
            { name: 'defaultPaymentMethod', realName: 'default_payment_method' },
            { name: 'gatewayAffiliationId', realName: 'gateway_affiliation_id' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = GetCheckoutPaymentSettingsResponse;
