[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}/passages/{passageId}`

## What is this for

Gets a `Passage` object for a given **bibleId** and **passageId**. This
`Passage` object also includes an content property with all verses
corresponding to the `passageId`.
The `passageId` parameter can represent a chapter, verse, or range of verses.

## Request params

<details><summary>Show model</summary>

```TypeScript
{
  'content-type'?: string; // html, json, text
  'include-notes'?: boolean;
  'include-titles'?: boolean;
  'include-chapter-numbers'?: boolean;
  'include-verse-numbers'?: boolean;
  'include-verse-spans'?: boolean;
  'use-org-id'?: boolean;
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
    orgId: string;
    bookId: string;
    chapterIds: string[];
    content: string;
    reference: string;
    verseCount: string | number;
    copyright: string;
    parallels?: [
      {
        id: string;
        bibleId: string;
        orgId: string;
        bookId: string;
        chapterIds: string[];
        content: string;
        reference: string;
        verseCount: string | number;
        copyright: string;
      },
    ];
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
