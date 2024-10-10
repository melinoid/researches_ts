import { ResponseCountry, ResponseLanguage } from '../../../utils/interfaces/apiCommon.i';

export interface AudioBiblesResponse {
  data: AudioBibles[];
}

interface AudioBibles {
  id: string;
  dblId: string;
  abbreviation: string;
  abbreviationLocal: string;
  language: ResponseLanguage;
  countries: ResponseCountry[];
  name: string;
  nameLocal: string;
  description: string;
  descriptionLocal: string;
  relatedDbl: string;
  type: string;
  updatedAt: string | Date;
  audioBibles: AudioBible[];
}

interface AudioBible {
  id: string;
  name: string;
  nameLocal: string;
  description: string;
  descriptionLocal: string;
}
