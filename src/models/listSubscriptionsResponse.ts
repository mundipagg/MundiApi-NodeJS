/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  GetSubscriptionResponse,
  getSubscriptionResponseSchema,
} from './getSubscriptionResponse';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

/** Response object for listing subscriptions */
export interface ListSubscriptionsResponse {
  /** The subscription objects */
  data: GetSubscriptionResponse[];
  /** Paging object */
  paging: PagingResponse;
}

export const listSubscriptionsResponseSchema: Schema<ListSubscriptionsResponse> = object(
  {
    data: ['data', array(lazy(() => getSubscriptionResponseSchema))],
    paging: ['paging', lazy(() => pagingResponseSchema)],
  }
);
