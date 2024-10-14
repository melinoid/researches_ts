[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}/books`

## What is this for

Gets an array of `Book` objects for a given **bibleId**.

## Request params

<details><summary>Show params</summary>

```TypeScript
{
  'include-chapters'?: boolean;
  'include-chapters-and-sections'?: boolean;
}
```

</details>

## Response model

<details><summary>Show model</summary>

```TypeScript
{
  data: [
    {
      id: string;
      bibleId: string;
      abbreviation: string;
      name: string;
      nameLong: string;
      chapters?: [
        {
          id: string;
          bibleId: string;
          bookId: string;
          number: string;
          position: string | number;
          sections?: [
            {
              id: string;
              bibleId: string;
              title: string;
              firstVerseId: string;
              lastVerseId: string;
              firstVerseOrgId: string;
              lastVerseOrgId: string;
            },
          ];
        },
      ];
    },
  ];
}
```

</details>

## Tests in suite

1. **/v1/bibles/bibleId/books 200 code (w/o params)**
2. **/v1/bibles/bibleId/books 200 code (with chapters)**
3. **/v1/bibles/bibleId/books 200 code (with chapters & sections)**
4. **/v1/bibles/bibleId/books 200 code (all params)**
5. **/v1/bibles/bibleId/books 400 code**
6. **/v1/bibles/bibleId/books 401 code**
7. **/v1/bibles/bibleId/books 403 code**
