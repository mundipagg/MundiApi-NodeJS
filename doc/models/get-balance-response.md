
# Get Balance Response

Balance

## Structure

`GetBalanceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | Currency |
| `availableAmount` | `bigint` | Required | Amount available for transferring |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `waitingFundsAmount` | `bigint` | Required | - |
| `transferredAmount` | `bigint` | Required | - |

## Example (as JSON)

```json
{
  "currency": "currency0",
  "available_amount": 182,
  "recipient": null,
  "waiting_funds_amount": 252,
  "transferred_amount": 228
}
```

