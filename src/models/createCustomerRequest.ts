/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, lazy, object, optional, Schema, string } from '../schema';
import {
  CreateAddressRequest,
  createAddressRequestSchema,
} from './createAddressRequest';
import {
  CreatePhonesRequest,
  createPhonesRequestSchema,
} from './createPhonesRequest';

/** Request for creating a new customer */
export interface CreateCustomerRequest {
  /** Name */
  name: string;
  /** Email */
  email: string;
  /** Document number. Only numbers, no special characters. */
  document: string;
  /** Person type. Can be either 'individual' or 'company' */
  type: string;
  /** The customer's address */
  address: CreateAddressRequest;
  /** Metadata */
  metadata: Record<string, string>;
  phones: CreatePhonesRequest;
  /** Customer code */
  code: string;
  /** Customer Gender */
  gender?: string;
  documentType?: string;
}

export const createCustomerRequestSchema: Schema<CreateCustomerRequest> = object(
  {
    name: ['name', string()],
    email: ['email', string()],
    document: ['document', string()],
    type: ['type', string()],
    address: ['address', lazy(() => createAddressRequestSchema)],
    metadata: ['metadata', dict(string())],
    phones: ['phones', lazy(() => createPhonesRequestSchema)],
    code: ['code', string()],
    gender: ['gender', optional(string())],
    documentType: ['document_type', optional(string())],
  }
);
