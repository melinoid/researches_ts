## URL

`/v1/audio-bibles/{audioBibleId}/books/{bookId}/chapters`

## What is this for

Gets an array of `Chapter` objects for a given **audioBibleId** and **bookId**.

## Request params

None

## Response model

<details><summary>Show model</summary>

```ts
{
  data: [
    {
      id: string;
      bibleId: string;
      number: string;
      bookId: string;
      reference: string;
    },
  ];
}
```

</details>

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
