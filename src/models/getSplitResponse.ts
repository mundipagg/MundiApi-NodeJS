/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  GetRecipientResponse,
  getRecipientResponseSchema,
} from './getRecipientResponse';
import {
  GetSplitOptionsResponse,
  getSplitOptionsResponseSchema,
} from './getSplitOptionsResponse';

/** Split response */
export interface GetSplitResponse {
  /** Type */
  type: string;
  /** Amount */
  amount: number;
  /** Recipient */
  recipient?: GetRecipientResponse;
  /** The split rule gateway id */
  gatewayId: string;
  options?: GetSplitOptionsResponse;
  id: string;
}

export const getSplitResponseSchema: Schema<GetSplitResponse> = object({
  type: ['type', string()],
  amount: ['amount', number()],
  recipient: ['recipient', optional(lazy(() => getRecipientResponseSchema))],
  gatewayId: ['gateway_id', string()],
  options: ['options', optional(lazy(() => getSplitOptionsResponseSchema))],
  id: ['id', string()],
});
