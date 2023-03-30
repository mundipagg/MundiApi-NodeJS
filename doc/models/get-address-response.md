
# Get Address Response

Response object for getting an Address

## Structure

`GetAddressResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `street` | `string` | Required | - |
| `number` | `string` | Required | - |
| `complement` | `string` | Required | - |
| `zipCode` | `string` | Required | - |
| `neighborhood` | `string` | Required | - |
| `city` | `string` | Required | - |
| `state` | `string` | Required | - |
| `country` | `string` | Required | - |
| `status` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string>` | Required | - |
| `line1` | `string` | Required | Line 1 for address |
| `line2` | `string` | Required | Line 2 for address |
| `deletedAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "street": "street0",
  "number": "number2",
  "complement": "complement4",
  "zip_code": "zip_code4",
  "neighborhood": "neighborhood6",
  "city": "city0",
  "state": "state4",
  "country": "country4",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "customer": null,
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "line_1": "line_16",
  "line_2": "line_28",
  "deleted_at": null
}
```

