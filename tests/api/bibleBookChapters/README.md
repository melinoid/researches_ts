[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}/books/{bookId}/chapters]`

## What is this for

Gets an array of `Chapter` objects for a given **bibleId** and **bookId**.

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
      number: string;
      bookId: string;
      reference: string;
    },
  ];
}
```

</details>

## Tests in suite

1. **/v1/bibles/bibleId/books/bookId/chapters 200 code**
2. **/v1/bibles/bibleId/books/bookId/chapters 400 code**
3. **/v1/bibles/bibleId/books/bookId/chapters 401 code**
4. **/v1/bibles/bibleId/books/bookId/chapters 403 code**
5. **/v1/bibles/bibleId/books/bookId/chapters 404 code**
