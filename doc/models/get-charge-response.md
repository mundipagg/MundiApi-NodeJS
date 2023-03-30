
# Get Charge Response

Response object for getting a charge

## Structure

`GetChargeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `code` | `string` | Required | - |
| `gatewayId` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `status` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `paymentMethod` | `string` | Required | - |
| `dueAt` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `lastTransaction` | [`GetTransactionResponse \| undefined`](../../doc/models/get-transaction-response.md) | Optional | - |
| `invoice` | [`GetInvoiceResponse \| undefined`](../../doc/models/get-invoice-response.md) | Optional | - |
| `order` | [`GetOrderResponse \| undefined`](../../doc/models/get-order-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string>` | Required | - |
| `paidAt` | `string \| undefined` | Optional | - |
| `canceledAt` | `string \| undefined` | Optional | - |
| `canceledAmount` | `number` | Required | Canceled Amount |
| `paidAmount` | `number` | Required | Paid amount |
| `recurrencyCycle` | `string \| undefined` | Optional | Defines whether the card has been used one or more times. |
| `interestAndFinePaid` | `number \| undefined` | Optional | interest and fine paid |

## Example (as JSON)

```json
{
  "id": "id0",
  "code": "code8",
  "gateway_id": "gateway_id0",
  "amount": 46,
  "status": "status8",
  "currency": "currency0",
  "payment_method": "payment_method0",
  "due_at": "2016-03-13T12:52:32.123Z",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "last_transaction": null,
  "invoice": null,
  "order": null,
  "customer": null,
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "paid_at": null,
  "canceled_at": null,
  "canceled_amount": 64,
  "paid_amount": 210,
  "recurrency_cycle": null,
  "interest_and_fine_paid": null
}
```

