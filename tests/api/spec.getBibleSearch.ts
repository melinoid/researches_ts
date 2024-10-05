import { bibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

// interface params {
//   query?: string;
//   limit?: number;
//   offset?: number;
//   sort?: string; // relevanse, canonical, reverse-canonical
//   range?: string;
//   fuzziness?: string; // AUTO, 0, 1, 2
// }

const apiPath = `/v1/bibles/${bibleId}/search`;

//TODO: rewrite these tests to normal ones
test('Check /v1/bibles/bibleId/search 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath, {
    params: { query: 'Hebrews' },
  });

  helper.compareStatusCode(response.status(), 200);
});

test('Check /v1/bibles/bibleId/search 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath, {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check /v1/bibles/bibleId/search 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath, {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check /v1/bibles/bibleId/search 403 code', async ({ request, helper }) => {
  const response = await request.get('/v1/bibles/1/search', {});

  helper.compareStatusCode(response.status(), 403);
});

// Not found bible id for this case
test.fixme('Check /v1/bibles/bibleId/search 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath, {});

  helper.compareStatusCode(response.status(), 404);
});
