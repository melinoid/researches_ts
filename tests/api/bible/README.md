[< Go back to contents](../README.md)

## URL

`/v1/bibles/{bibleId}`

## What is this for

Gets a single `Bible` for a given **bibleId**.

## Request params

None

## Response model

<details><summary>Show model</summary>

```TypeScript
{
  data: {
    id: string;
    dblId: string;
    abbreviation: string;
    abbreviationLocal: string;
    copyright: string;
    language: {
      id: string;
      name: string;
      nameLocal: string;
      script: string;
      scriptDirection: string;
    };
    countries: [
      {
        id: string;
        name: string;
        nameLocal: string;
      },
    ];
    name: string;
    nameLocal: string;
    description: string;
    descriptionLocal: string;
    info: string;
    type: string;
    updatedAt: string | Date;
    relatedDbl: string;
    audioBibles: [
      {
        id: string;
        name: string;
        nameLocal: string;
        description: string;
        descriptionLocal: string;
      },
    ];
  };
}

```

</details>

## Tests in suite

1. **/v1/bibles/bibleId 200 code**
2. **/v1/bibles/bibleId 400 code**
3. **/v1/bibles/bibleId 401 code**
4. **/v1/bibles/bibleId 403 code**
5. **/v1/bibles/bibleId 404 code**
