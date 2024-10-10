import { ResponseMeta } from '../../../utils/interfaces/apiCommon.i';

interface BibleChapterResponse {
  data: Chapter;
  meta: ResponseMeta;
}

interface Chapter {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  content: string;
  reference: string;
  verseCount: string | number;
  next?: AdjacentChapter;
  previous?: AdjacentChapter;
  copyright: string;
}

interface AdjacentChapter {
  id: string;
  bookId: string;
  number: string;
}
