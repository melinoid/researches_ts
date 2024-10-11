## URL

`/v1/bibles/{bibleId}/books`

## What is this for

Gets an array of `Book` objects for a given **bibleId**.

## Request params

```ts
{
  'include-chapters'?: boolean;
  'include-chapters-and-sections'?: boolean;
}
```

## Test Suite

Coming soon

#### Test: 200 code

| Action       | Expected result |
| ------------ | --------------- |
| Send request | get response    |

#### Test: 400 code

| Action       | Expected result |
| ------------ | --------------- |
| Send request | get response    |
