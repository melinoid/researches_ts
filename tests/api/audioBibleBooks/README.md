## URL

`/v1/audio-bibles/{audioBibleId}/books`

## What is this for

Gets an array of `Book` objects for a given **audioBibleId**.

## Request params

```ts
{
  'include-chapters'?: boolean;
  'include-chapters-and-sections'?: boolean; // Doesn't work
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
