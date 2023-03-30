
# Custom Error

Api Error Exception

## Structure

`CustomError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string` | Required | - |
| `errors` | `unknown` | Required | - |
| `request` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "message": "message0",
  "errors": {
    "key1": "val1",
    "key2": "val2"
  },
  "request": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

