/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of PlansResponse1
 */
class PlansResponse1 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.name = this.constructor.getValue(obj.name);
        this.description = this.constructor.getValue(obj.description);
        this.url = this.constructor.getValue(obj.url);
        this.statementDescriptor =
          this.constructor.getValue(obj.statementDescriptor
     || obj.statement_descriptor);
        this.interval = this.constructor.getValue(obj.interval);
        this.intervalCount = this.constructor.getValue(obj.intervalCount || obj.interval_count);
        this.billingType = this.constructor.getValue(obj.billingType || obj.billing_type);
        this.paymentMethods = this.constructor.getValue(obj.paymentMethods || obj.payment_methods);
        this.installments = this.constructor.getValue(obj.installments);
        this.status = this.constructor.getValue(obj.status);
        this.currency = this.constructor.getValue(obj.currency);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
        this.items = this.constructor.getValue(obj.items);
        this.billingDays = this.constructor.getValue(obj.billingDays || obj.billing_days);
        this.shippable = this.constructor.getValue(obj.shippable);
        this.metadata = this.constructor.getValue(obj.metadata);
        this.trialPeriodDays =
          this.constructor.getValue(obj.trialPeriodDays
     || obj.trial_period_days);
        this.minimumPrice = this.constructor.getValue(obj.minimumPrice || obj.minimum_price);
        this.deletedAt = this.constructor.getValue(obj.deletedAt || obj.deleted_at);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'name', realName: 'name' },
            { name: 'description', realName: 'description' },
            { name: 'url', realName: 'url' },
            { name: 'statementDescriptor', realName: 'statement_descriptor' },
            { name: 'interval', realName: 'interval' },
            { name: 'intervalCount', realName: 'interval_count' },
            { name: 'billingType', realName: 'billing_type' },
            { name: 'paymentMethods', realName: 'payment_methods', array: true },
            { name: 'installments', realName: 'installments', array: true },
            { name: 'status', realName: 'status' },
            { name: 'currency', realName: 'currency' },
            {
                name: 'createdAt',
                realName: 'created_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            {
                name: 'updatedAt',
                realName: 'updated_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'items', realName: 'items', array: true, type: 'GetPlanItemResponse' },
            { name: 'billingDays', realName: 'billing_days', array: true },
            { name: 'shippable', realName: 'shippable' },
            { name: 'metadata', realName: 'metadata' },
            { name: 'trialPeriodDays', realName: 'trial_period_days' },
            { name: 'minimumPrice', realName: 'minimum_price' },
            {
                name: 'deletedAt',
                realName: 'deleted_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
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

module.exports = PlansResponse1;