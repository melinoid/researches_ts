# API v1 project

This project contains automated API tests.

Documentation on api routs and methods is in [API.Bible Swagger](https://scripture.api.bible/livedocs).

## File structure

The file structure follows the standard:

- **"Readme" file** – for documentation.
- **response.i.ts** – to describe the response model.
- **responses.json** – for reference responses.
- **suite.request.ts** – for test logic.

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
