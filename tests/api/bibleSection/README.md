## URL

`/v1/bibles/{bibleId}/sections/{sectionId}`

## What is this for

Gets a single `Section` object for a given **bibleId** and **sectionId**. This Section
object also includes an content property with all verses for the `Section`.

## Request params

<details><summary>Show params</summary>

```ts
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

```ts
{
  data: {
    id: string;
    bibleId: string;
    bookId: string;
    chapterId: string;
    title: string;
    content: string;
    verseCount: number;
    firstVerseId: string;
    lastVerseId: string;
    firstVerseOrgId: string;
    lastVerseOrgId: string;
    copyright: string;
    next?: {
      id: string;
      title: string;
    };
    previous?: {
      id: string;
      title: string;
    };
    parallels?: [
      {
        id: string;
        bibleId: string;
        bookId: string;
        chapterId: string;
        content: string;
        verseCount: number;
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
