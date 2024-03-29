/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetUsagesDetailsResponse
 */
class GetUsagesDetailsResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.subscriptionId = this.constructor.getValue(obj.subscriptionId || obj.subscription_id);
        this.totalAmount = this.constructor.getValue(obj.totalAmount || obj.total_amount);
        this.period = this.constructor.getValue(obj.period || obj.Period);
        this.usages = this.constructor.getValue(obj.usages || obj.Usages);
        this.totalDiscount = this.constructor.getValue(obj.totalDiscount || obj.total_discount);
        this.totalIncrement = this.constructor.getValue(obj.totalIncrement || obj.total_increment);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'subscriptionId', realName: 'subscription_id' },
            { name: 'totalAmount', realName: 'total_amount' },
            { name: 'period', realName: 'Period', type: 'Period' },
            { name: 'usages', realName: 'Usages', type: 'Usages' },
            { name: 'totalDiscount', realName: 'total_discount' },
            { name: 'totalIncrement', realName: 'total_increment' },
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

module.exports = GetUsagesDetailsResponse;
