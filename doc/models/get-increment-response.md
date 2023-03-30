
# Get Increment Response

Response object for getting a increment

## Structure

`GetIncrementResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `value` | `number` | Required | - |
| `incrementType` | `string` | Required | - |
| `status` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `cycles` | `number \| undefined` | Optional | - |
| `deletedAt` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `subscriptionItem` | [`GetSubscriptionItemResponse \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | The Subscription Item |

## Example (as JSON)

```json
{
  "id": "id0",
  "value": 251.52,
  "increment_type": "increment_type8",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "cycles": null,
  "deleted_at": null,
  "description": null,
  "subscription": null,
  "subscription_item": null
}
```

