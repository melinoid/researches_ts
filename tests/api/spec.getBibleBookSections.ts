import { bibleBookId, bibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = `/v1/bibles/${bibleId}/books/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/bibles/bibleId/books/booksId/sections 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookId + '/sections', {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/bibles/bibleId/books/booksId/sections 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'b52bc8b7af3bdc6f/sections', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/bibles/bibleId/books/booksId/sections 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1/sections', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/bibles/bibleId/books/booksId/sections 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/books/1/sections', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/bibles/bibleId/books/booksId/sections 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'GE1/sections', {});

  helper.compareStatusCode(response.status(), 404);
});
