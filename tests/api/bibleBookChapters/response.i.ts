export interface BibleBookChaptersResponse {
  data: Chapter[];
}

interface Chapter {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  reference: string;
}
