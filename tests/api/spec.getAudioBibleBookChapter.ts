import { audioBibleId, audioBibleBookChapterId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = `/v1/audio-bibles/${audioBibleId}/chapters/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/audio-bibles/audioBibleId/chapters/chapterId 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + audioBibleBookChapterId, {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/audio-bibles/audioBibleId/chapters/chapterId 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/audio-bibles/audioBibleId/chapters/chapterId 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + audioBibleBookChapterId, {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/audio-bibles/audioBibleId/chapters/chapterId 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/chapters/1', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/audio-bibles/audioBibleId/chapters/chapterId 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1CO.0', {});

  helper.compareStatusCode(response.status(), 404);
});
