import { bibleId, bibleBookId } from '../../utils/config';
import { test } from '../../utils/fixtures';

// interface params {
//   'include-chapters'?: boolean;
// }

const apiPath = `/v1/bibles/${bibleId}/books/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/bibles/bibleId/books/bookId 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookId, {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/bibles/bibleId/books/bookId 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'G', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/bibles/bibleId/books/bookId 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookId, {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/bibles/bibleId/books/bookId 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/books/GE1', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/bibles/bibleId/books/bookId 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'GE1', {});

  helper.compareStatusCode(response.status(), 404);
});
