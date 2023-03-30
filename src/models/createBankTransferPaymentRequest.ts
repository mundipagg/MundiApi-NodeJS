/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

/** Request for creating a bank transfer payment */
export interface CreateBankTransferPaymentRequest {
  /** Bank */
  bank: string;
  /** Number of retries */
  retries: number;
}

export const createBankTransferPaymentRequestSchema: Schema<CreateBankTransferPaymentRequest> = object(
  { bank: ['bank', string()], retries: ['retries', number()] }
);
