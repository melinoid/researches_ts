[< Go back to contents](../README.md)

## URL

`/v1/audio-bibles/{audioBibleId}/books`

## What is this for

Gets an array of `Book` objects for a given **audioBibleId**.

## Request params

<details><summary>Show params</summary>

```TypeScript
{
  'include-chapters'?: boolean;
  'include-chapters-and-sections'?: boolean; // Doesn't work
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
          number: string;
          bookId: string;
          reference: string;
        },
      ];
    },
  ];
}
```

</details>

## Tests in suite

1. **/v1/audio-bibles/audioBibleId/books 200 code (w/o params)**
2. **/v1/audio-bibles/audioBibleId/books 200 code (with chapters)**
3. **/v1/audio-bibles/audioBibleId/books 200 code (w/o chapters)**
4. **/v1/audio-bibles/audioBibleId/books 200 code (with sections)** _doesn`t work due to param_
5. **/v1/audio-bibles/audioBibleId/books 400 code (bad audioBibleId)**
6. **/v1/audio-bibles/audioBibleId/books 400 code (bad param)**
7. **/v1/audio-bibles/audioBibleId/books 401 code**
8. **/v1/audio-bibles/audioBibleId/books 403 code**
