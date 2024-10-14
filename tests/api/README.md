[< Go back to main page](../../README.md)

# API v1 project

This project contains automated API tests.

Documentation on api routs and methods is in [API.Bible Swagger](https://scripture.api.bible/livedocs).

**Caution:** the standard key provides access to 5,000 requests per day. This collection contains 126 API requests, so you will have 39 full launches per day.

## About tests

Taking into account the specifics of the API, all tests are written according to the same example, only the requests themselves and test data differ:

| Step | Action                                                                                                                                                                                                                                                         | Expected result |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| 1    | Send request. Curl can be taken in [Postman](https://www.postman.com/mission-geologist-37537957/workspace/54bcd53c-258e-450e-a09d-c103a44d154f/collection/21631263-9d773c14-11ff-4df9-a324-d3bb6a687a11?action=share&source=collection_link&creator=21631263). | Get response    |
| 2    | Check the response matches the expected status code.                                                                                                                                                                                                           | Match           |
| 3    | Check the response matches the response model.                                                                                                                                                                                                                 | Match           |

## File structure

The file structure follows the standard:

- **"Readme" file** – documentation.
- **responses.json** – reference responses.
- **suite.request.ts** – test logic.

## List of routs

> All links are clickable and lead to test documentation.

### Bibles

- [/v1/bibles](bibles/README.md)
- [/v1/bibles/{bibleId}](bible/README.md)
- [/v1/audio-bibles](audioBibles/README.md)
- [/v1/audio-bibles/{audioBibleId}](audioBible/README.md)

### Books

- [/v1/bibles/{bibleId}/books](bibleBooks/README.md)
- [/v1/bibles/{bibleId}/books/{bookId}](bibleBook/README.md)
- [/v1/audio-bibles/{audioBibleId}/books](audioBibleBooks/README.md)
- [​/v1​/audio-bibles​/{audioBibleId}​/books​/{bookId}](audioBibleBook/README.md)

### Chapters

- [/v1/bibles/{bibleId}/books/{bookId}/chapters](bibleBookChapters/README.md)
- [​/v1​/bibles​/{bibleId}​/chapters​/{chapterId}](bibleChapter/README.md)
- [/v1/audio-bibles/{audioBibleId}/books/{bookId}/chapters](audioBibleBookChapters/README.md)
- [/v1/audio-bibles/{audioBibleId}/chapters/{chapterId}](audioBibleChapter/README.md)

### Sections

- [​/v1​/bibles​/{bibleId}​/books​/{bookId}​/sections](bibleBookSections/README.md)
- [/v1/bibles/{bibleId}/chapters/{chapterId}/sections](bibleChapterSections/README.md)
- [/v1/bibles/{bibleId}/sections/{sectionId}](bibleSection/README.md)

### Passages

- [/v1/bibles/{bibleId}/passages/{passageId}](biblePassage/README.md)

### Verses

- [/v1/bibles/{bibleId}/chapters/{chapterId}/verses](bibleChapterVerses/README.md)
- [/v1/bibles/{bibleId}/verses/{verseId}](bibleVerse/README.md)

### Search

- [/v1/bibles/{bibleId}/search](bibleSearch/README.md)
