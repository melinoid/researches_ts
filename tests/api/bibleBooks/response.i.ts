export interface BibleBooksResponse {
  data: Book[];
}

export interface BibleBooksWithChaptersResponse {
  data: BookWithChapters[];
}

export interface BibleBooksWithChaptersAndSectionsResponse {
  data: BookWithChaptersAndSections[];
}

interface BookWithChapters extends Book {
  chapters: Chapter[];
}

interface BookWithChaptersAndSections extends Book {
  chapters: ChapterWithSections[];
}

interface ChapterWithSections extends Chapter {
  sections: Section[];
}

interface Book {
  id: string;
  bibleId: string;
  abbreviation: string;
  name: string;
  nameLong: string;
}

interface Chapter {
  id: string;
  bibleId: string;
  bookId: string;
  number: string;
  position: string | number;
}

interface Section {
  id: string;
  bibleId: string;
  title: string;
  firstVerseId: string;
  lastVerseId: string;
  firstVerseOrgId: string;
  lastVerseOrgId: string;
}
