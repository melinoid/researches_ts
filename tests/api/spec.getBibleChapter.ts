import { bibleId, bibleBookChapterId } from '../../utils/config';
import { test } from '../../utils/fixtures';

// interface params {
//   'content-type'?: string; // html, json, text
//   'include-notes'?: boolean;
//   'include-titles'?: boolean;
//   'include-chapter-numbers'?: boolean;
//   'include-verse-numbers'?: boolean;
//   'include-verse-spans'?: boolean;
//   parallels?: string;
// }

const apiPath = `/v1/bibles/${bibleId}/chapters/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/bibles/bibleId/chapters/chapterId 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookChapterId, {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/bibles/bibleId/chapters/chapterId 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'G', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/bibles/bibleId/chapters/chapterId 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookChapterId, {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/bibles/bibleId/chapters/chapterId 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/chapters/1', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/bibles/bibleId/chapters/chapterId 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'GEN.0', {});

  helper.compareStatusCode(response.status(), 404);
});
