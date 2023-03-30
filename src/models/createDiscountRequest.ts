/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Request for creating a new discount */
export interface CreateDiscountRequest {
  /** The discount value */
  value: number;
  /** Discount type. Can be either flat or percentage. */
  discountType: string;
  /** The item where the discount will be applied */
  itemId: string;
  /** Number of cycles that the discount will be applied */
  cycles?: number;
  /** Description */
  description?: string;
}

export const createDiscountRequestSchema: Schema<CreateDiscountRequest> = object(
  {
    value: ['value', number()],
    discountType: ['discount_type', string()],
    itemId: ['item_id', string()],
    cycles: ['cycles', optional(number())],
    description: ['description', optional(string())],
  }
);
