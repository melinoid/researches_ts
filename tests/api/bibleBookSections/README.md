[< Go back to contents](../README.md)

## URL

`​/v1​/bibles​/{bibleId}​/books​/{bookId}​/sections`

## What is this for

Gets an array of `Section` objects for a given **bibleId** and **bookId**.

## Request params

None

## Response model

<details><summary>Show model</summary>

```TypeScript
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
