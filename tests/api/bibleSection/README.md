[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}/sections/{sectionId}`

## What is this for

Gets a single `Section` object for a given **bibleId** and **sectionId**. This Section
object also includes an content property with all verses for the `Section`.

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

## Tests in suite

1. **/v1/bibles/bibleId/sections/sectionId 200 code (w/o params)**
2. **/v1/bibles/bibleId/sections/sectionId 200 code (html & alternate params)**
3. **/v1/bibles/bibleId/sections/sectionId 200 code (json & reverse alternate params)**
4. **/v1/bibles/bibleId/sections/sectionId 200 code (text & all params)**
5. **/v1/bibles/bibleId/sections/sectionId 400 code (bad sectionId)**
6. **/v1/bibles/bibleId/sections/sectionId 400 code (bad param)**
7. **/v1/bibles/bibleId/sections/sectionId 401 code**
8. **/v1/bibles/bibleId/sections/sectionId 403 code (bad bibleId)**
9. **/v1/bibles/bibleId/sections/sectionId 403 code (bad parallels)**
10. **/v1/bibles/bibleId/sections/sectionId 404 code**
