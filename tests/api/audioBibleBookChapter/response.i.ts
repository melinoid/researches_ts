import { ResponseMeta } from '../../../utils/interfaces/apiCommon.i';

export interface AudioBibleBookChapter {
  data: Chapter;
  meta: ResponseMeta;
}

interface Chapter {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  resourceUrl: string;
  timecodes?: Timecode[];
  expiresAt: string | number;
  reference: string;
  next?: AdjacentChapter;
  previous?: AdjacentChapter;
  copyright: string;
}

interface Timecode {
  end: string;
  start: string;
  verseId: string;
}

interface AdjacentChapter {
  id: string;
  bookId: string;
  number: string;
}
