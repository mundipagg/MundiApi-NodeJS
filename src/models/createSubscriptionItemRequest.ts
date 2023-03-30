/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateDiscountRequest,
  createDiscountRequestSchema,
} from './createDiscountRequest';
import {
  CreatePricingSchemeRequest,
  createPricingSchemeRequestSchema,
} from './createPricingSchemeRequest';

/** Request for creating a new subscription item */
export interface CreateSubscriptionItemRequest {
  /** Item description */
  description: string;
  /** Pricing scheme */
  pricingScheme: CreatePricingSchemeRequest;
  /** Item id */
  id: string;
  /** Plan item id */
  planItemId: string;
  /** Discounts for the item */
  discounts: CreateDiscountRequest[];
  /** Item name */
  name: string;
  /** Number of cycles which the item will be charged */
  cycles?: number;
  /** Quantity of items */
  quantity?: number;
  /** Minimum price */
  minimumPrice?: number;
}

export const createSubscriptionItemRequestSchema: Schema<CreateSubscriptionItemRequest> = object(
  {
    description: ['description', string()],
    pricingScheme: [
      'pricing_scheme',
      lazy(() => createPricingSchemeRequestSchema),
    ],
    id: ['id', string()],
    planItemId: ['plan_item_id', string()],
    discounts: ['discounts', array(lazy(() => createDiscountRequestSchema))],
    name: ['name', string()],
    cycles: ['cycles', optional(number())],
    quantity: ['quantity', optional(number())],
    minimumPrice: ['minimum_price', optional(number())],
  }
);
