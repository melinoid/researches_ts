import { audioBibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = '/v1/audio-bibles/';

//TODO: rewrite these tests to normal ones
test(`Check ${apiPath}audioBibleId/books 200 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + audioBibleId + '/books', {});

  helper.compareStatusCode(response.status(), 200);
});

test(`Check ${apiPath}audioBibleId/books 400 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + '105a06b6146d11e7/books', {});

  helper.compareStatusCode(response.status(), 400);
});

test(`Check ${apiPath}audioBibleId/books 401 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + audioBibleId + '/books', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test(`Check ${apiPath}audioBibleId/books 403 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + '1/books', {});

  helper.compareStatusCode(response.status(), 403);
});
