import { audioBibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

const apiPath = '/v1/audio-bibles/';

//TODO: rewrite these tests to normal ones
test('Check ${apiPath}audioBibleId 200 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + audioBibleId, {});

  helper.compareStatusCode(response.status(), 200);
});

test('Check ${apiPath}audioBibleId 400 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '105a06b6146d11e7', {});

  helper.compareStatusCode(response.status(), 400);
});

test('Check ${apiPath}audioBibleId 401 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test('Check ${apiPath}audioBibleId 403 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '1', {});

  helper.compareStatusCode(response.status(), 403);
});

// Not found bible id for this case
test.fixme('Check ${apiPath}audioBibleId 404 code', async ({ request, helper }) => {
  const response = await request.get(apiPath + '105a06b6146d11e7-04', {});

  helper.compareStatusCode(response.status(), 404);
});
