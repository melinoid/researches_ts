## URL

`/v1/audio-bibles`

## What is this for

Gets an array of `audio Bible` objects.

## Request params

<details><summary>Show params</summary>

```TypeScript
{
  language?: string;
  abbreviation?: string;
  name?: string;
  ids?: string;
  bibleId?: string;
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

## Test Suite

Coming soon

#### Test: 200 code

| Action       | Expected result |
| ------------ | --------------- |
| Send request | get response    |

#### Test: 400 code

| Action       | Expected result |
| ------------ | --------------- |
| Send request | get response    |
