[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}/chapters/{chapterId}/sections`

## What is this for

Gets an array of `Section` objects for a given **bibleId** and **chapterId**.

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

1. **/v1/bibles/bibleId/chapters/chapterId/sections 200 code**
2. **/v1/bibles/bibleId/chapters/chapterId/sections 400 code**
3. **/v1/bibles/bibleId/chapters/chapterId/sections 401 code**
4. **/v1/bibles/bibleId/chapters/chapterId/sections 403 code**
5. **/v1/bibles/bibleId/chapters/chapterId/sections 404 code**
