[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}/verses/{verseId}`

## What is this for

Gets a `Verse` object for a given **bibleId** and **verseId**. This
`Verse` object also includes an content property with the verse
corresponding to the `verseId`.

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
    orgId: string;
    bibleId: string;
    bookId: string;
    chapterId: string;
    content: string;
    reference: string;
    verseCount: number;
    copyright: string;
    next: {
      id: string;
      bookId: string;
    }
    previous: {
      id: string;
      bookId: string;
    }
  }
  meta: {
    fums: string;
    fumsId: string;
    fumsJsInclude: string;
    fumsJs: string;
    fumsNoScript: string;
  }
}
```

</details>

## Tests in suite

1. **/v1/bibles/bibleId/verses/verseId 200 code (w/o params)**
2. **/v1/bibles/bibleId/verses/verseId 200 code (html & alternate params)**
3. **/v1/bibles/bibleId/verses/verseId 200 code (json & reverse alternate params)**
4. **/v1/bibles/bibleId/verses/verseId 200 code (text & all params)**
5. **/v1/bibles/bibleId/verses/verseId 400 code (bad verseId)**
6. **/v1/bibles/bibleId/verses/verseId 400 code (bad param)**
7. **/v1/bibles/bibleId/verses/verseId 401 code**
8. **/v1/bibles/bibleId/verses/verseId 403 code (bad bibleId)**
9. **/v1/bibles/bibleId/verses/verseId 403 code (bad parallels)**
10. **/v1/bibles/bibleId/verses/verseId 404 code**
