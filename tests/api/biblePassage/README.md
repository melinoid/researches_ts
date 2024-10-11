## URL

`/v1/bibles/{bibleId}/passages/{passageId}`

## What is this for

Gets a `Passage` object for a given **bibleId** and **passageId**. This
`Passage` object also includes an content property with all verses
corresponding to the `passageId`.
The `passageId` parameter can represent a chapter, verse, or range of verses.

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
