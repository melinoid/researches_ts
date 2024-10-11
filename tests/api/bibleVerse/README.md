## URL

`/v1/bibles/{bibleId}/verses/{verseId}`

## What is this for

Gets a `Verse` object for a given **bibleId** and **verseId**. This
`Verse` object also includes an content property with the verse
corresponding to the `verseId`.

## Request params

```ts
{
  'content-type'?: string; // html, json, text
  'include-notes'?: boolean;
  'include-titles'?: boolean;
  'include-chapter-numbers'?: boolean;
  'include-verse-numbers'?: boolean;
  'include-verse-spans'?: boolean;
  'use-org-id'?: boolean;
  parallels?: string; // bibleIds, comma delimited
}
```

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
