## URL

`/v1/audio-bibles`

## What is this for

Gets an array of `audio Bible` objects.

## Request params

```ts
{
  language?: string;
  abbreviation?: string;
  name?: string;
  ids?: string;
  bibleId?: string;
  'include-full-details'?: boolean;
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
