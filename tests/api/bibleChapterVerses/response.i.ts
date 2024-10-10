export interface BibleChapterVersesResponse {
  data: Verse[];
}

interface Verse {
  id: string;
  orgId: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  reference: string;
}
