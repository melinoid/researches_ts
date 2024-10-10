import { ResponseMeta } from '../../../utils/interfaces/apiCommon.i';

export interface BibleSectionResponse {
  data: Section;
  meta: ResponseMeta;
}

export interface BibleSectionWithParallelsResponse {
  data: SectionWithParallels;
  meta: ResponseMeta;
}

interface SectionWithParallels {
  parallels: Parallel[];
}

interface Section {
  id: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  title: string;
  content: string;
  verseCount: number;
  firstVerseId: string;
  lastVerseId: string;
  firstVerseOrgId: string;
  lastVerseOrgId: string;
  copyright: string;
  next?: AdjacentSection;
  previous?: AdjacentSection;
}

interface Parallel {
  id: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  content: string;
  verseCount: number;
  copyright: string;
}

interface AdjacentSection {
  id: string;
  title: string;
}
