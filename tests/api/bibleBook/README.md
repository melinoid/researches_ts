[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}/books/{bookId}`

## What is this for

Gets a single `Book` object for a given **bibleId** and **bookId**.

## Request params

<details><summary>Show params</summary>

```TypeScript
{
  'include-chapters'?: boolean;
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
    abbreviation: string;
    name: string;
    nameLong: string;
    chapters?: [
      {
        id: string;
        bibleId: string;
        number: string;
        bookId: string;
        reference: string;
      },
    ];
  };
}
```

</details>

## Tests in suite

1. **/v1/bibles/bibleId/books/bookId 200 code (w/o params)**
2. **/v1/bibles/bibleId/books/bookId 200 code (w/o chapters)**
3. **/v1/bibles/bibleId/books/bookId 200 code (with chapters)**
4. **/v1/bibles/bibleId/books/bookId 400 code**
5. **/v1/bibles/bibleId/books/bookId 401 code**
6. **/v1/bibles/bibleId/books/bookId 403 code**
7. **/v1/bibles/bibleId/books/bookId 404 code**
