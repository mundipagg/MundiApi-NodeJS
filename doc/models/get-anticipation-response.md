
# Get Anticipation Response

Anticipation

## Structure

`GetAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Id |
| `requestedAmount` | `number` | Required | Requested amount |
| `approvedAmount` | `number` | Required | Approved amount |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `pgid` | `string` | Required | Anticipation id on the gateway |
| `createdAt` | `string` | Required | Creation date |
| `updatedAt` | `string` | Required | Last update date |
| `paymentDate` | `string` | Required | Payment date |
| `status` | `string` | Required | Status |
| `timeframe` | `string` | Required | Timeframe |

## Example (as JSON)

```json
{
  "id": "id0",
  "requested_amount": 246,
  "approved_amount": 212,
  "recipient": null,
  "pgid": "pgid4",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "payment_date": "2016-03-13T12:52:32.123Z",
  "status": "status8",
  "timeframe": "timeframe2"
}
```

