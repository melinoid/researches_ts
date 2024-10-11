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
