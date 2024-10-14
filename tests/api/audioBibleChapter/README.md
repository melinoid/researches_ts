[< Go back to contents](../README.md)

## URL

`/v1/audio-bibles/{audioBibleId}/chapters/{chapterId}`

## What is this for

Gets a single `Chapter` object for a given **audioBibleId** and **chapterId**.
This AudioChapter object also includes an `resourceUrl` property with a HTTP URL
to the mp3 audio resource for the chapter. The `resourceUrl` is unique per request
and expires in XX minutes. The `expiresAt` property provides the Unix time value of
`resourceUrl` expiration.

## Request params

None

## Response model

<details><summary>Show model</summary>

```TypeScript
{
  data: {
    id: string;
    bibleId: string;
    number: string;
    bookId: string;
    resourceUrl: string;
    timecodes?: [
      {
        end: string;
        start: string;
        verseId: string;
      },
    ];
    expiresAt: string | number;
    reference: string;
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

1. **/v1/audio-bibles/audioBibleId/chapters/chapterId 200 code**
2. **/v1/audio-bibles/audioBibleId/chapters/chapterId 400 code (bad chapterId)**
3. **/v1/audio-bibles/audioBibleId/chapters/chapterId 400 code (bad param)**
4. **/v1/audio-bibles/audioBibleId/chapters/chapterId 401 code**
5. **/v1/audio-bibles/audioBibleId/chapters/chapterId 403 code**
6. **/v1/audio-bibles/audioBibleId/chapters/chapterId 404 code**
