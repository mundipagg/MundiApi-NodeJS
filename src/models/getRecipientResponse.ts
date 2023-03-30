/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, dict, lazy, object, optional, Schema, string } from '../schema';
import {
  GetAutomaticAnticipationResponse,
  getAutomaticAnticipationResponseSchema,
} from './getAutomaticAnticipationResponse';
import {
  GetBankAccountResponse,
  getBankAccountResponseSchema,
} from './getBankAccountResponse';
import {
  GetGatewayRecipientResponse,
  getGatewayRecipientResponseSchema,
} from './getGatewayRecipientResponse';
import {
  GetTransferSettingsResponse,
  getTransferSettingsResponseSchema,
} from './getTransferSettingsResponse';

/** Recipient response */
export interface GetRecipientResponse {
  /** Id */
  id: string;
  /** Name */
  name: string;
  /** Email */
  email: string;
  /** Document */
  document: string;
  /** Description */
  description: string;
  /** Type */
  type: string;
  /** Status */
  status: string;
  /** Creation date */
  createdAt: string;
  /** Last update date */
  updatedAt: string;
  /** Deletion date */
  deletedAt: string;
  /** Default bank account */
  defaultBankAccount: GetBankAccountResponse;
  /** Info about the recipient on the gateway */
  gatewayRecipients: GetGatewayRecipientResponse[];
  /** Metadata */
  metadata: Record<string, string>;
  automaticAnticipationSettings?: GetAutomaticAnticipationResponse;
  transferSettings?: GetTransferSettingsResponse;
  /** Recipient code */
  code: string;
  /** Payment mode */
  paymentMode: string;
}

export const getRecipientResponseSchema: Schema<GetRecipientResponse> = object({
  id: ['id', string()],
  name: ['name', string()],
  email: ['email', string()],
  document: ['document', string()],
  description: ['description', string()],
  type: ['type', string()],
  status: ['status', string()],
  createdAt: ['created_at', string()],
  updatedAt: ['updated_at', string()],
  deletedAt: ['deleted_at', string()],
  defaultBankAccount: [
    'default_bank_account',
    lazy(() => getBankAccountResponseSchema),
  ],
  gatewayRecipients: [
    'gateway_recipients',
    array(lazy(() => getGatewayRecipientResponseSchema)),
  ],
  metadata: ['metadata', dict(string())],
  automaticAnticipationSettings: [
    'automatic_anticipation_settings',
    optional(lazy(() => getAutomaticAnticipationResponseSchema)),
  ],
  transferSettings: [
    'transfer_settings',
    optional(lazy(() => getTransferSettingsResponseSchema)),
  ],
  code: ['code', string()],
  paymentMode: ['payment_mode', string()],
});
