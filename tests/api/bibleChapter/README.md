[< Go back to contents](../README.md)

## URL

`​/v1​/bibles​/{bibleId}​/chapters​/{chapterId}`

## What is this for

Gets a single `Chapter` object for a given **bibleId** and **chapterId**.
This `Chapter` object also includes an content property with all verses for the `Chapter`.

## Request params

<details><summary>Show params</summary>

```TypeScript
{
  'content-type'?: string; // html, json, text
  'include-notes'?: boolean;
  'include-titles'?: boolean;
  'include-chapter-numbers'?: boolean;
  'include-verse-numbers'?: boolean;
  'include-verse-spans'?: boolean;
  parallels?: string; // bibleIds, comma delimited
}
```

</details>

## Response model

<details><summary>Show model</summary>

```TypeScript
{
  data: {
    id: string;
    bibleId: string;
    number: string;
    bookId: string;
    content: string;
    reference: string;
    verseCount: string | number;
    next?: {
      id: string;
      bookId: string;
      number: string;
    };
    previous?: {
      id: string;
      bookId: string;
      number: string;
    };
    copyright: string;
  };
  meta: {
    fums: string;
    fumsId: string;
    fumsJsInclude: string;
    fumsJs: string;
    fumsNoScript: string;
  };
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
