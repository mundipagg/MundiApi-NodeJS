/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OrdersRequest
 */
class OrdersRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.items = this.constructor.getValue(obj.items);
        this.customer = this.constructor.getValue(obj.customer);
        this.payments = this.constructor.getValue(obj.payments);
        this.code = this.constructor.getValue(obj.code);
        this.customerId = this.constructor.getValue(obj.customerId || obj.customer_id);
        this.shipping = this.constructor.getValue(obj.shipping);
        this.metadata = this.constructor.getValue(obj.metadata);
        this.antifraudEnabled =
          this.constructor.getValue(obj.antifraudEnabled
     || obj.antifraud_enabled);
        this.ip = this.constructor.getValue(obj.ip);
        this.sessionId = this.constructor.getValue(obj.sessionId || obj.session_id);
        this.location = this.constructor.getValue(obj.location);
        this.device = this.constructor.getValue(obj.device);
        this.closed = this.constructor.getValue(obj.closed);
        this.currency = this.constructor.getValue(obj.currency);
        this.antifraud = this.constructor.getValue(obj.antifraud);
        this.submerchant = this.constructor.getValue(obj.submerchant);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'items', realName: 'items', array: true, type: 'CreateOrderItemRequest' },
            { name: 'customer', realName: 'customer', type: 'Customer8' },
            { name: 'payments', realName: 'payments', array: true, type: 'CreatePaymentRequest' },
            { name: 'code', realName: 'code' },
            { name: 'customerId', realName: 'customer_id' },
            { name: 'shipping', realName: 'shipping', type: 'Shipping3' },
            { name: 'metadata', realName: 'metadata' },
            { name: 'antifraudEnabled', realName: 'antifraud_enabled' },
            { name: 'ip', realName: 'ip' },
            { name: 'sessionId', realName: 'session_id' },
            { name: 'location', realName: 'location', type: 'Location' },
            { name: 'device', realName: 'device', type: 'Device1' },
            { name: 'closed', realName: 'closed' },
            { name: 'currency', realName: 'currency' },
            { name: 'antifraud', realName: 'antifraud', type: 'CreateAntifraudRequest' },
            { name: 'submerchant', realName: 'submerchant', type: 'Submerchant' },
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

module.exports = OrdersRequest;