[< Go back to contents](../README.md)

## URL

`/v1/bibles`

## What is this for

Gets an array of `Bible` objects.

## Request params

<details><summary>Show params</summary>

```TypeScript
{
  language?: string;
  abbreviation?: string;
  name?: string;
  ids?: string;
  'include-full-details'?: boolean;
}
```

</details>

## Response model

<details><summary>Show model</summary>

```TypeScript
{
  data: [
    {
      id: string;
      dblId: string;
      abbreviation: string;
      abbreviationLocal: string;
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
      relatedDbl: string;
      type: string;
      updatedAt: string | Date;
      audioBibles: [
        {
          id: string;
          name: string;
          nameLocal: string;
          description: string;
          descriptionLocal: string;
        },
      ];
    },
  ];
}
```

</details>

## Tests in suite

1. **/v1/bibles 200 code (w/o params)**
2. **/v1/bibles 200 code (params w/o id)**
3. **/v1/bibles 200 code (multiple ids)**
4. **/v1/bibles 200 code (all params)**
5. **/v1/bibles 400 code**
6. **/v1/bibles 401 code**
