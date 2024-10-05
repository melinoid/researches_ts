import { bibleBookChapterId, bibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = `/v1/bibles/${bibleId}/chapters/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/bibles/bibleId/chapters/chapterId/sections 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookChapterId + '/sections', {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/bibles/bibleId/chapters/chapterId/sections 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'b52bc8b7af3bdc6f/sections', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/bibles/bibleId/chapters/chapterId/sections 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1/sections', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/bibles/bibleId/chapters/chapterId/sections 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/chapters/1/sections', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/bibles/bibleId/chapters/chapterId/sections 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'GE1.1/sections', {});

  helper.compareStatusCode(response.status(), 404);
});
