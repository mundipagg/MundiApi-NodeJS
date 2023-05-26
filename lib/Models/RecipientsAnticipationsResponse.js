/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of RecipientsAnticipationsResponse
 */
class RecipientsAnticipationsResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.requestedAmount =
          this.constructor.getValue(obj.requestedAmount
     || obj.requested_amount);
        this.approvedAmount = this.constructor.getValue(obj.approvedAmount || obj.approved_amount);
        this.recipient = this.constructor.getValue(obj.recipient);
        this.pgid = this.constructor.getValue(obj.pgid);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
        this.paymentDate = this.constructor.getValue(obj.paymentDate || obj.payment_date);
        this.status = this.constructor.getValue(obj.status);
        this.timeframe = this.constructor.getValue(obj.timeframe);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'requestedAmount', realName: 'requested_amount' },
            { name: 'approvedAmount', realName: 'approved_amount' },
            { name: 'recipient', realName: 'recipient', type: 'Recipient' },
            { name: 'pgid', realName: 'pgid' },
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
            {
                name: 'paymentDate',
                realName: 'payment_date',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'status', realName: 'status' },
            { name: 'timeframe', realName: 'timeframe' },
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

module.exports = RecipientsAnticipationsResponse;