export interface AudioBibleBookResponse {
  data: AudioBibleBook;
}

export interface AudioBibleBookWithChaptersResponse {
  data: AudioBibleBookWithChapters;
}

interface AudioBibleBook {
  id: string;
  bibleId: string;
  abbreviation: string;
  name: string;
  nameLong: string;
}

interface AudioBibleBookWithChapters extends AudioBibleBook {
  chapters: Chapter[];
}

interface Chapter {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  reference: string;
}
