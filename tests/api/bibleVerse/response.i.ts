import { ResponseMeta } from '../../../utils/interfaces/apiCommon.i';

export interface BibleVerseResponse {
  data: Verse;
  meta: ResponseMeta;
}

interface Verse {
  id: string;
  orgId: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  content: string;
  reference: string;
  verseCount: number;
  copyright: string;
  next: AdjacentVerse;
  previous: AdjacentVerse;
}

interface AdjacentVerse {
  id: string;
  bookId: string;
}
