/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, Schema, string } from '../schema';

/** Request for updating an address */
export interface UpdateAddressRequest {
  /** Number */
  number: string;
  /** Complement */
  complement: string;
  /** Metadata */
  metadata: Record<string, string>;
  /** Line 2 for address */
  line2: string;
}

export const updateAddressRequestSchema: Schema<UpdateAddressRequest> = object({
  number: ['number', string()],
  complement: ['complement', string()],
  metadata: ['metadata', dict(string())],
  line2: ['line_2', string()],
});
