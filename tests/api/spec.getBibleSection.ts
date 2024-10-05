import { bibleBookSectionId, bibleId } from '../../utils/config';
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

const apiPath = `/v1/bibles/${bibleId}/sections/`;

//TODO: rewrite these tests to normal ones
test('Check /v1/bibles/bibleId/sections/sectionId 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleBookSectionId, {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/bibles/bibleId/sections/sectionId 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'ROM.S', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/bibles/bibleId/sections/sectionId 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/bibles/bibleId/sections/sectionId 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/sections/1', {});

  helper.compareStatusCode(response.status(), 403);
});

test('Check /v1/bibles/bibleId/sections/sectionId 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + 'ROM.S0', {});

  helper.compareStatusCode(response.status(), 404);
});
