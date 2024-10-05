import { audioBibleId, audioBibleBookId } from '../../utils/config';
import { test } from '../../utils/fixtures';

// interface params {
//   'include-chapters'?: boolean;
//   'include-chapters-and-sections'?: boolean
// }

const apiPath = `/v1/audio-bibles/${audioBibleId}/books/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/audio-bibles/audioBibleId/books/bookId 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + audioBibleBookId, {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/audio-bibles/audioBibleId/books/bookId 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/audio-bibles/audioBibleId/books/bookId 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + audioBibleBookId, {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/audio-bibles/audioBibleId/books/bookId 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/books/1C1', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/audio-bibles/audioBibleId/books/bookId 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1C1', {});

  helper.compareStatusCode(response.status(), 404);
});
