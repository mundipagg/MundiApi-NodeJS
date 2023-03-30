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
import { GetCardResponse, getCardResponseSchema } from './getCardResponse';
import { getFineResponseSchema } from './getFineResponse';
import { getGatewayResponseResponseSchema } from './getGatewayResponseResponse';
import { getInterestResponseSchema } from './getInterestResponse';
import { getSplitResponseSchema } from './getSplitResponse';
import { GetTransactionResponse } from './getTransactionResponse';

/** Response object for getting a credit card transaction */
export interface GetCreditCardTransactionResponse extends GetTransactionResponse {
  /** Text that will appear on the credit card's statement */
  statementDescriptor: string;
  /** Acquirer name */
  acquirerName: string;
  /** Aquirer affiliation code */
  acquirerAffiliationCode: string;
  /** Acquirer TID */
  acquirerTid: string;
  /** Acquirer NSU */
  acquirerNsu: string;
  /** Acquirer authorization code */
  acquirerAuthCode: string;
  /** Operation type */
  operationType: string;
  /** Card data */
  card: GetCardResponse;
  /** Acquirer message */
  acquirerMessage: string;
  /** Acquirer Return Code */
  acquirerReturnCode: string;
  /** Number of installments */
  installments?: number;
  /** 3D-S authentication Url */
  threedAuthenticationUrl: string;
}

export const getCreditCardTransactionResponseSchema: Schema<any> = object({
  statementDescriptor: ['statement_descriptor', string()],
  acquirerName: ['acquirer_name', string()],
  acquirerAffiliationCode: ['acquirer_affiliation_code', string()],
  acquirerTid: ['acquirer_tid', string()],
  acquirerNsu: ['acquirer_nsu', string()],
  acquirerAuthCode: ['acquirer_auth_code', string()],
  operationType: ['operation_type', string()],
  card: ['card', lazy(() => getCardResponseSchema)],
  acquirerMessage: ['acquirer_message', string()],
  acquirerReturnCode: ['acquirer_return_code', string()],
  installments: ['installments', optional(number())],
  threedAuthenticationUrl: ['threed_authentication_url', string()],
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
  transactionType: ['transaction_type', optional(literal('credit_card'))],
});
