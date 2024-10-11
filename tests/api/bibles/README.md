## URL

`/v1/bibles`

## What is this for

Gets an array of `Bible` objects.

## Request params

```ts
{
  language?: string;
  abbreviation?: string;
  name?: string;
  ids?: string;
  'include-full-details'?: boolean;
}
```

## Test Suite

Coming soon

#### Test: 200 code

| Action       | Expected result |
| ------------ | --------------- |
| Send request | Get response    |

#### Test: 400 code

| Action       | Expected result |
| ------------ | --------------- |
| Send request | Get response    |
