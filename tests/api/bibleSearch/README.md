## URL

`/v1/bibles/{bibleId}/search`

## What is this for

Gets `search results` for a given **bibleId** and query string. Searches
will match all verses with the list of keywords provided in the query string.
Order of the keywords does not matter. However all keywords must be
present in a verse for it to be considered a match.
The total number of results returned from a search can be limited by populating the limit
attribute in the query string with a non-negative integer value. If no
`limit` value is provide a default of 10 is used.
`offset` can be used to traverse paginated results. So for example if you are using
the default `limit` of 10, using an `offset` of 10 will return the second page of results,
namely results 11-20.
The `text` property of each verse object contains only the verse text. It does not
contain footnote references. However, those can be queried directly using the
`/bibles/{bibleId}/verses/{verseId}` endpoint.

## Request params

```ts
{
  query?: string;
  limit?: number;
  offset?: number;
  sort?: string; // relevanse, canonical, reverse-canonical
  range?: string;
  fuzziness?: string; // AUTO, 0, 1, 2
}
```

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
