## URL

`/v1/bibles/{bibleId}/chapters/{chapterId}/sections`

## What is this for

Gets an array of `Section` objects for a given **bibleId** and **chapterId**.

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
      bookId: string;
      title: string;
      firstVerseId: string;
      lastVerseId: string;
      firstVerseOrgId: string;
      lastVerseOrgId: string;
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
