/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateCardRequest,
  createCardRequestSchema,
} from './createCardRequest';

/** The settings for creating a private label payment */
export interface CreatePrivateLabelPaymentRequest {
  /** Number of installments */
  installments?: number;
  /** The text that will be shown on the private label's statement */
  statementDescriptor?: string;
  /** Card data */
  card?: CreateCardRequest;
  /** The Card id */
  cardId?: string;
  cardToken?: string;
  /** Indicates a recurrence */
  recurrence?: boolean;
  /** Indicates if the operation should be only authorization or auth and capture. */
  capture?: boolean;
  /** Indicates whether the extended label (private label) is enabled */
  extendedLimitEnabled?: boolean;
  /** Extended Limit Code */
  extendedLimitCode?: string;
  /** Defines whether the card has been used one or more times. */
  recurrencyCycle?: string;
}

export const createPrivateLabelPaymentRequestSchema: Schema<CreatePrivateLabelPaymentRequest> = object(
  {
    installments: ['installments', optional(number())],
    statementDescriptor: ['statement_descriptor', optional(string())],
    card: ['card', optional(lazy(() => createCardRequestSchema))],
    cardId: ['card_id', optional(string())],
    cardToken: ['card_token', optional(string())],
    recurrence: ['recurrence', optional(boolean())],
    capture: ['capture', optional(boolean())],
    extendedLimitEnabled: ['extended_limit_enabled', optional(boolean())],
    extendedLimitCode: ['extended_limit_code', optional(string())],
    recurrencyCycle: ['recurrency_cycle', optional(string())],
  }
);
