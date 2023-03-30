
# Get Card Response

Response object for getting a credit card

## Structure

`GetCardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `lastFourDigits` | `string` | Required | - |
| `brand` | `string` | Required | - |
| `holderName` | `string` | Required | - |
| `expMonth` | `number` | Required | - |
| `expYear` | `number` | Required | - |
| `status` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `billingAddress` | [`GetBillingAddressResponse`](../../doc/models/get-billing-address-response.md) | Required | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string>` | Required | - |
| `type` | `string` | Required | Card type |
| `holderDocument` | `string` | Required | Document number for the card's holder |
| `deletedAt` | `string \| undefined` | Optional | - |
| `firstSixDigits` | `string` | Required | First six digits |
| `label` | `string` | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "last_four_digits": "last_four_digits6",
  "brand": "brand4",
  "holder_name": "holder_name4",
  "exp_month": 42,
  "exp_year": 254,
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "billing_address": {
    "street": "street8",
    "number": "number4",
    "zip_code": "zip_code2",
    "neighborhood": "neighborhood4",
    "city": "city2",
    "state": "state6",
    "country": "country2",
    "complement": "complement6",
    "line_1": "line_18",
    "line_2": "line_26"
  },
  "customer": null,
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "type": "type0",
  "holder_document": "holder_document6",
  "deleted_at": null,
  "first_six_digits": "first_six_digits0",
  "label": "label0"
}
```

