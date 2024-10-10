import { ResponseMeta } from '../../../utils/interfaces/apiCommon.i';

export interface BibleSearchResponse {
  query: string;
  data: SearchResult;
  meta: ResponseMeta;
}

interface SearchResult {
  query: string;
  limit: number;
  offset: number;
  total: number;
  verseCount: number;
  verses: Verse[];
}

interface Verse {
  id: string;
  orgId: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  text: string;
  reference: string;
}
