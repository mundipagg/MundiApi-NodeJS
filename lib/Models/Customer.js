/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Customer
 */
class Customer extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.name = this.constructor.getValue(obj.name);
        this.email = this.constructor.getValue(obj.email);
        this.delinquent = this.constructor.getValue(obj.delinquent);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
        this.document = this.constructor.getValue(obj.document);
        this.type = this.constructor.getValue(obj.type);
        this.fbAccessToken = this.constructor.getValue(obj.fbAccessToken || obj.fb_access_token);
        this.address = this.constructor.getValue(obj.address);
        this.metadata = this.constructor.getValue(obj.metadata);
        this.phones = this.constructor.getValue(obj.phones);
        this.fbId = this.constructor.getValue(obj.fbId || obj.fb_id);
        this.code = this.constructor.getValue(obj.code);
        this.documentType = this.constructor.getValue(obj.documentType || obj.document_type);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'name', realName: 'name' },
            { name: 'email', realName: 'email' },
            { name: 'delinquent', realName: 'delinquent' },
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
            { name: 'document', realName: 'document' },
            { name: 'type', realName: 'type' },
            { name: 'fbAccessToken', realName: 'fb_access_token' },
            { name: 'address', realName: 'address', type: 'Address' },
            { name: 'metadata', realName: 'metadata' },
            { name: 'phones', realName: 'phones', type: 'GetPhonesResponse' },
            { name: 'fbId', realName: 'fb_id' },
            { name: 'code', realName: 'code' },
            { name: 'documentType', realName: 'document_type' },
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

module.exports = Customer;
