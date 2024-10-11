## URL

`​/v1​/audio-bibles​/{audioBibleId}​/books​/{bookId}`

## What is this for

Gets a single `Book` object for a given **audioBibleId** and **bookId**.

## Request params

<details><summary>Show params</summary>

```ts
{
  'include-chapters'?: boolean;
}
```

</details>

## Response model

<details><summary>Show model</summary>

```ts
{
  data: {
    id: string;
    bibleId: string;
    abbreviation: string;
    name: string;
    nameLong: string;
    chapters?: [
      {
        id: string;
        bibleId: string;
        number: string;
        bookId: string;
        reference: string;
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
