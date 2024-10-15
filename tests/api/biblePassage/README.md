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

## Tests in suite

1. **/v1/bibles/bibleId/passages/passageId 200 code (w/o params)**
2. **/v1/bibles/bibleId/passages/passageId 200 code (html & alternate params)**
3. **/v1/bibles/bibleId/passages/passageId 200 code (json & reverse alternate params)**
4. **/v1/bibles/bibleId/passages/passageId 200 code (text & all params)**
5. **/v1/bibles/bibleId/passages/passageId 400 code**
6. **/v1/bibles/bibleId/passages/passageId 401 code**
7. **/v1/bibles/bibleId/passages/passageId 403 code (bad bibleId)**
8. **/v1/bibles/bibleId/passages/passageId 403 code (bad parallels)**
9. **/v1/bibles/bibleId/passages/passageId 404 code**
