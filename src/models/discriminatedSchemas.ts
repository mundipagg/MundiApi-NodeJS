/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { discriminatedObject, Schema } from '../schema';
import {
  getBankTransferTransactionResponseSchema,
} from './getBankTransferTransactionResponse';
import {
  getBoletoTransactionResponseSchema,
} from './getBoletoTransactionResponse';
import { getCashTransactionResponseSchema } from './getCashTransactionResponse';
import {
  getCreditCardTransactionResponseSchema,
} from './getCreditCardTransactionResponse';
import {
  getDebitCardTransactionResponseSchema,
} from './getDebitCardTransactionResponse';
import { getPixTransactionResponseSchema } from './getPixTransactionResponse';
import {
  getPrivateLabelTransactionResponseSchema,
} from './getPrivateLabelTransactionResponse';
import {
  getSafetyPayTransactionResponseSchema,
} from './getSafetyPayTransactionResponse';
import { getTransactionResponseSchema } from './getTransactionResponse';
import {
  getVoucherTransactionResponseSchema,
} from './getVoucherTransactionResponse';

export const discriminatedGetTransactionResponseSchema: Schema<any> = discriminatedObject(
  'transactionType',
  'transaction_type',
  {
    'transaction': getTransactionResponseSchema,
    'bank_transfer': getBankTransferTransactionResponseSchema,
    'debit_card': getDebitCardTransactionResponseSchema,
    'voucher': getVoucherTransactionResponseSchema,
    'boleto': getBoletoTransactionResponseSchema,
    'cash': getCashTransactionResponseSchema,
    'safetypay': getSafetyPayTransactionResponseSchema,
    'credit_card': getCreditCardTransactionResponseSchema,
    'private_label': getPrivateLabelTransactionResponseSchema,
    'pix': getPixTransactionResponseSchema,
 },
  'transaction'
);

