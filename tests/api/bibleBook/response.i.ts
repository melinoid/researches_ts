export interface BibleBookResponse {
  data: BibleBook;
}

export interface BibleBookWithChaptersResponse {
  data: BibleBookWithCpapters;
}

interface BibleBook {
  id: string;
  bibleId: string;
  abbreviation: string;
  name: string;
  nameLong: string;
}

interface BibleBookWithCpapters extends BibleBook {
  chapters: Chapter[];
}

interface Chapter {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  reference: string;
}
