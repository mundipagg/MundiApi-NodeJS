/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, Schema, string } from '../schema';
import {
  GetPixBankAccountResponse,
  getPixBankAccountResponseSchema,
} from './getPixBankAccountResponse';

/** Pix payer data. */
export interface GetPixPayerResponse {
  name: string | null;
  document: string | null;
  documentType: string | null;
  bankAccount: GetPixBankAccountResponse | null;
}

export const getPixPayerResponseSchema: Schema<GetPixPayerResponse> = object({
  name: ['name', nullable(string())],
  document: ['document', nullable(string())],
  documentType: ['document_type', nullable(string())],
  bankAccount: [
    'bank_account',
    nullable(lazy(() => getPixBankAccountResponseSchema)),
  ],
});
