/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  CreateGooglePayHeaderRequest,
  createGooglePayHeaderRequestSchema,
} from './createGooglePayHeaderRequest';

/** The GooglePay Token Payment Request */
export interface CreateGooglePayRequest {
  /** The token version */
  version: string;
  /** The cryptography data */
  data: string;
  /** The GooglePay header request */
  header: CreateGooglePayHeaderRequest;
  /** Detached PKCS #7 signature, Base64 encoded as string */
  signature: string;
  /** GooglePay Merchant identifier */
  merchantIdentifier: string;
}

export const createGooglePayRequestSchema: Schema<CreateGooglePayRequest> = object(
  {
    version: ['version', string()],
    data: ['data', string()],
    header: ['header', lazy(() => createGooglePayHeaderRequestSchema)],
    signature: ['signature', string()],
    merchantIdentifier: ['merchant_identifier', string()],
  }
);
