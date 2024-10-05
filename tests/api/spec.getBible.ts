import { bibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = '/v1/bibles/';

//TODO: rewrite these tests to normal ones
test(`Check ${apiPath}bibleId 200 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleId, {});

  helper.compareStatusCode(response.status(), 200);
});

test(`Check ${apiPath}bibleId 400 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + 'b52bc8b7af3bdc6f', {});

  helper.compareStatusCode(response.status(), 400);
});

test(`Check ${apiPath}bibleId 401 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + '1', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test(`Check ${apiPath}bibleId 403 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + '1', {});

  helper.compareStatusCode(response.status(), 403);
});

test(`Check ${apiPath}bibleId 404 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + 'b52bc8b7af3bdc6f-04', {});

  helper.compareStatusCode(response.status(), 404);
});
