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
  nullable,
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
import {
  GetPixPayerResponse,
  getPixPayerResponseSchema,
} from './getPixPayerResponse';
import { getSplitResponseSchema } from './getSplitResponse';
import { GetTransactionResponse } from './getTransactionResponse';
import {
  PixAdditionalInformation,
  pixAdditionalInformationSchema,
} from './pixAdditionalInformation';

/** Response object when getting a pix transaction */
export interface GetPixTransactionResponse extends GetTransactionResponse {
  qrCode: string;
  qrCodeUrl: string;
  expiresAt: string;
  additionalInformation: PixAdditionalInformation[];
  payer: GetPixPayerResponse | null;
}

export const getPixTransactionResponseSchema: Schema<any> = object({
  qrCode: ['qr_code', string()],
  qrCodeUrl: ['qr_code_url', string()],
  expiresAt: ['expires_at', string()],
  additionalInformation: [
    'additional_information',
    array(lazy(() => pixAdditionalInformationSchema)),
  ],
  payer: ['payer', nullable(lazy(() => getPixPayerResponseSchema))],
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
  transactionType: ['transaction_type', optional(literal('pix'))],
});
