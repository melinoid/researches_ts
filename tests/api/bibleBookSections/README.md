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

## Tests in suite

1. **/v1/bibles/bibleId/books/booksId/sections 200 code**
2. **/v1/bibles/bibleId/books/booksId/sections 400 code**
3. **/v1/bibles/bibleId/books/booksId/sections 401 code**
4. **/v1/bibles/bibleId/books/booksId/sections 403 code**
5. **/v1/bibles/bibleId/books/booksId/sections 404 code**
