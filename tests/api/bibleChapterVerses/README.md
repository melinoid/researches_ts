[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}/chapters/{chapterId}/verses`

## What is this for

Gets an array of `Verse` objects for a given **bibleId** and **chapterId**.

## Request params

None

## Response model

<details><summary>Show model</summary>

```TypeScript
{
  data: [
    {
      id: string;
      orgId: string;
      bibleId: string;
      bookId: string;
      chapterId: string;
      reference: string;
    },
  ];
}
```

</details>

## Tests in suite

1. **/v1/bibles/bibleId/chapters/chapterId/verses 200 code**
2. **/v1/bibles/bibleId/chapters/chapterId/verses 400 code**
3. **/v1/bibles/bibleId/chapters/chapterId/verses 401 code**
4. **/v1/bibles/bibleId/chapters/chapterId/verses 403 code**
5. **/v1/bibles/bibleId/chapters/chapterId/verses 404 code**
