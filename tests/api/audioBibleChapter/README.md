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

## Test Suite

Coming soon

#### Test: 200 code

| Action       | Expected result |
| ------------ | --------------- |
| Send request | get response    |

#### Test: 400 code

| Action       | Expected result |
| ------------ | --------------- |
| Send request | get response    |
