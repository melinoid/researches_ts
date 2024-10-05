import { audioBibleBookId, audioBibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = `/v1/audio-bibles/${audioBibleId}/books/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/audio-bibles/audioBibleId/books/bookId/chapters 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + audioBibleBookId + '/chapters', {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/audio-bibles/audioBibleId/books/bookId/chapters 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '105a06b6146d11e7/chapters', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/audio-bibles/audioBibleId/books/bookId/chapters 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1/chapters', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/audio-bibles/audioBibleId/books/bookId/chapters 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/audio-bibles/1/books/1/chapters', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/audio-bibles/audioBibleId/books/bookId/chapters 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1C1/chapters', {});

  helper.compareStatusCode(response.status(), 404);
});
