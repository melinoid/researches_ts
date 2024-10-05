import { bibleBookChapterId, bibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = `/v1/bibles/${bibleId}/chapters/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/bibles/bibleId/chapters/chapterId/verses 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookChapterId + '/verses', {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/bibles/bibleId/chapters/chapterId/verses 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'b52bc8b7af3bdc6f/verses', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/bibles/bibleId/chapters/chapterId/verses 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1/verses', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/bibles/bibleId/chapters/chapterId/verses 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/chapters/1/verses', {});

  helper.compareStatusCode(response.status(), 403);
});

// Not found bible id for this case
test('Check /v1/bibles/bibleId/chapters/chapterId/verses 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'GE1.1/verses', {});

  helper.compareStatusCode(response.status(), 404);
});
