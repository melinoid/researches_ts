import { bibleBookId, bibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = `/v1/bibles/${bibleId}/books/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/bibles/bibleId/books/bookId/chapters 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookId + '/chapters', {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/bibles/bibleId/books/bookId/chapters 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'b52bc8b7af3bdc6f/chapters', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/bibles/bibleId/books/bookId/chapters 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1/chapters', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/bibles/bibleId/books/bookId/chapters 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/books/1/chapters', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/bibles/bibleId/books/bookId/chapters 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'GE1/chapters', {});

  helper.compareStatusCode(response.status(), 404);
});
