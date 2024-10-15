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

## Tests in suite

1. **/v1/bibles/bibleId/chapters/chapterId 200 code (w/o params)**
2. **/v1/bibles/bibleId/chapters/chapterId 200 code (html & alternate params)**
3. **/v1/bibles/bibleId/chapters/chapterId 200 code (json & reverse alternate params)**
4. **/v1/bibles/bibleId/chapters/chapterId 200 code (text & all params)**
5. **/v1/bibles/bibleId/chapters/chapterId 400 code (bad chapterId)**
6. **/v1/bibles/bibleId/chapters/chapterId 400 code (bad param)**
7. **/v1/bibles/bibleId/chapters/chapterId 401 code**
8. **/v1/bibles/bibleId/chapters/chapterId 403 code (bad bibleId)**
9. **/v1/bibles/bibleId/chapters/chapterId 403 code (bad parallels)**
10. **/v1/bibles/bibleId/chapters/chapterId 404 code**
