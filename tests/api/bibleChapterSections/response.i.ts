export interface BibleChapterSectionsResponse {
  data: Section[];
}

interface Section {
  id: string;
  bibleId: string;
  bookId: string;
  title: string;
  firstVerseId: string;
  lastVerseId: string;
  firstVerseOrgId: string;
  lastVerseOrgId: string;
}
