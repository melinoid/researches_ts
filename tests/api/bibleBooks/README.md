## URL

`/v1/bibles/{bibleId}/books`

## What is this for

Gets an array of `Book` objects for a given **bibleId**.

## Request params

<details><summary>Show params</summary>

```ts
{
  'include-chapters'?: boolean;
  'include-chapters-and-sections'?: boolean;
}
```

</details>

## Response model

<details><summary>Show model</summary>

```ts
{
  data: [
    {
      id: string;
      bibleId: string;
      abbreviation: string;
      name: string;
      nameLong: string;
      chapters?: [
        {
          id: string;
          bibleId: string;
          bookId: string;
          number: string;
          position: string | number;
          sections?: [
            {
              id: string;
              bibleId: string;
              title: string;
              firstVerseId: string;
              lastVerseId: string;
              firstVerseOrgId: string;
              lastVerseOrgId: string;
            },
          ];
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
