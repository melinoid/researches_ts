import { ResponseCountry, ResponseLanguage } from '../../../utils/interfaces/apiCommon.i';

export interface AudioBibleResponse {
  data: AudioBible;
}

interface AudioBible {
  id: string;
  dblId: string;
  abbreviation: string;
  abbreviationLocal: string;
  copyright: string;
  language: ResponseLanguage;
  countries: ResponseCountry[];
  name: string;
  nameLocal: string;
  description: string;
  descriptionLocal: string;
  info: string;
  type: string;
  updatedAt: string | Date;
  relatedDbl: string;
}
