
# Get Recipient Response

Recipient response

## Structure

`GetRecipientResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Id |
| `name` | `string` | Required | Name |
| `email` | `string` | Required | Email |
| `document` | `string` | Required | Document |
| `description` | `string` | Required | Description |
| `type` | `string` | Required | Type |
| `status` | `string` | Required | Status |
| `createdAt` | `string` | Required | Creation date |
| `updatedAt` | `string` | Required | Last update date |
| `deletedAt` | `string` | Required | Deletion date |
| `defaultBankAccount` | [`GetBankAccountResponse`](../../doc/models/get-bank-account-response.md) | Required | Default bank account |
| `gatewayRecipients` | [`GetGatewayRecipientResponse[]`](../../doc/models/get-gateway-recipient-response.md) | Required | Info about the recipient on the gateway |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `automaticAnticipationSettings` | [`GetAutomaticAnticipationResponse \| undefined`](../../doc/models/get-automatic-anticipation-response.md) | Optional | - |
| `transferSettings` | [`GetTransferSettingsResponse \| undefined`](../../doc/models/get-transfer-settings-response.md) | Optional | - |
| `code` | `string` | Required | Recipient code |
| `paymentMode` | `string` | Required | Payment mode<br>**Default**: `'bank_transfer'` |

## Example (as JSON)

```json
{
  "id": null,
  "name": null,
  "email": null,
  "document": null,
  "description": null,
  "type": null,
  "status": null,
  "created_at": null,
  "updated_at": null,
  "deleted_at": null,
  "default_bank_account": null,
  "gateway_recipients": null,
  "metadata": null,
  "code": null,
  "payment_mode": "bank_transfer"
}
```

