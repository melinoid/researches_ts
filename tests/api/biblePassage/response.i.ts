import { ResponseMeta } from '../../../utils/interfaces/apiCommon.i';

export interface BiblePassageResponse {
  data: Passage;
  meta: ResponseMeta;
}

export interface BiblePassageWithParallelsResponse {
  data: PassageWithParallels;
  meta: ResponseMeta;
}

interface PassageWithParallels extends Passage {
  parallels: Passage[];
}

interface Passage {
  id: string;
  bibleId: string;
  orgId: string;
  bookId: string;
  chapterIds: string[];
  content: string;
  reference: string;
  verseCount: string | number;
  copyright: string;
}
