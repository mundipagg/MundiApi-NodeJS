/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  literal,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { getAntifraudResponseSchema } from './getAntifraudResponse';
import { getFineResponseSchema } from './getFineResponse';
import { getGatewayResponseResponseSchema } from './getGatewayResponseResponse';
import { getInterestResponseSchema } from './getInterestResponse';
import { getSplitResponseSchema } from './getSplitResponse';
import { GetTransactionResponse } from './getTransactionResponse';

/** Response object for getting a bank transfer transaction */
export interface GetBankTransferTransactionResponse extends GetTransactionResponse {
  /** Payment url */
  url: string;
  /** Transaction identifier for the bank */
  bankTid: string;
  /** Bank */
  bank: string;
  /** Payment date */
  paidAt?: string;
  /** Paid amount */
  paidAmount?: number;
}

export const getBankTransferTransactionResponseSchema: Schema<any> = object({
  url: ['url', string()],
  bankTid: ['bank_tid', string()],
  bank: ['bank', string()],
  paidAt: ['paid_at', optional(string())],
  paidAmount: ['paid_amount', optional(number())],
  gatewayId: ['gateway_id', string()],
  amount: ['amount', number()],
  status: ['status', string()],
  success: ['success', boolean()],
  createdAt: ['created_at', string()],
  updatedAt: ['updated_at', string()],
  attemptCount: ['attempt_count', number()],
  maxAttempts: ['max_attempts', number()],
  splits: ['splits', array(lazy(() => getSplitResponseSchema))],
  nextAttempt: ['next_attempt', optional(string())],
  id: ['id', string()],
  gatewayResponse: [
    'gateway_response',
    lazy(() => getGatewayResponseResponseSchema),
  ],
  antifraudResponse: [
    'antifraud_response',
    lazy(() => getAntifraudResponseSchema),
  ],
  metadata: ['metadata', optional(dict(string()))],
  split: ['split', array(lazy(() => getSplitResponseSchema))],
  interest: ['interest', optional(lazy(() => getInterestResponseSchema))],
  fine: ['fine', optional(lazy(() => getFineResponseSchema))],
  maxDaysToPayPastDue: ['max_days_to_pay_past_due', optional(number())],
  transactionType: ['transaction_type', optional(literal('bank_transfer'))],
});
