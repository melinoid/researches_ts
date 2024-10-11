## URL

`/v1/bibles/{bibleId}/chapters/{chapterId}/verses`

## What is this for

Gets an array of `Verse` objects for a given **bibleId** and **chapterId**.

## Request params

None

## Response model

<details><summary>Show model</summary>

```ts
{
  data: [
    {
      id: string;
      orgId: string;
      bibleId: string;
      bookId: string;
      chapterId: string;
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
