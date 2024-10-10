export interface ResponseMeta {
  fums: string;
  fumsId: string;
  fumsJsInclude: string;
  fumsJs: string;
  fumsNoScript: string;
}

export interface ResponseCountry {
  id: string;
  name: string;
  nameLocal: string;
}

export interface ResponseLanguage {
  id: string;
  name: string;
  nameLocal: string;
  script: string;
  scriptDirection: string;
}
