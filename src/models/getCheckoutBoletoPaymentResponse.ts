/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface GetCheckoutBoletoPaymentResponse {
  /** Data de vencimento do boleto */
  dueAt: string;
  /** Instruções do boleto */
  instructions: string;
}

export const getCheckoutBoletoPaymentResponseSchema: Schema<GetCheckoutBoletoPaymentResponse> = object(
  { dueAt: ['due_at', string()], instructions: ['instructions', string()] }
);
