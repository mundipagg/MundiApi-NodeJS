
# Get Bank Account Response

Response object to bank account

## Structure

`GetBankAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Id |
| `holderName` | `string` | Required | Holder name |
| `holderType` | `string` | Required | Holder type |
| `bank` | `string` | Required | Bank |
| `branchNumber` | `string` | Required | Branch number |
| `branchCheckDigit` | `string` | Required | Branch check digit |
| `accountNumber` | `string` | Required | Account number |
| `accountCheckDigit` | `string` | Required | Account check digit |
| `type` | `string` | Required | Bank account type |
| `status` | `string` | Required | Bank account status |
| `createdAt` | `string` | Required | Creation date |
| `updatedAt` | `string` | Required | Last update date |
| `deletedAt` | `string` | Required | Deletion date |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `pixKey` | `string` | Required | Pix Key |

## Example (as JSON)

```json
{
  "id": "id0",
  "holder_name": "holder_name4",
  "holder_type": "holder_type2",
  "bank": "bank8",
  "branch_number": "branch_number6",
  "branch_check_digit": "branch_check_digit4",
  "account_number": "account_number0",
  "account_check_digit": "account_check_digit6",
  "type": "type0",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "deleted_at": "2016-03-13T12:52:32.123Z",
  "recipient": null,
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "pix_key": "pix_key6"
}
```

