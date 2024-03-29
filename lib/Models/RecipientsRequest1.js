/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of RecipientsRequest1
 */
class RecipientsRequest1 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.email = this.constructor.getValue(obj.email);
        this.description = this.constructor.getValue(obj.description);
        this.type = this.constructor.getValue(obj.type);
        this.status = this.constructor.getValue(obj.status);
        this.metadata = this.constructor.getValue(obj.metadata);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'email', realName: 'email' },
            { name: 'description', realName: 'description' },
            { name: 'type', realName: 'type' },
            { name: 'status', realName: 'status' },
            { name: 'metadata', realName: 'metadata' },
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

module.exports = RecipientsRequest1;
