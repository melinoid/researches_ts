import { APIResponse } from '@playwright/test';
import { audioBibleId } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

// interface params {
//   'include-chapters'?: boolean;
//   'include-chapters-and-sections'?: boolean
// }

const apiPath = '/v1/audio-bibles/';
let response: APIResponse;

test.describe('/v1/audio-bibles/audioBibleId/books', async () => {
  test(`200 code w/o params`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBibleId + '/books', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText((await response.json())['data'][3], expBody['200wop']);
    });
  });

  test(`200 code w/o chapters`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBibleId + '/books', {
        params: {
          'include-chapters': false,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText((await response.json())['data'][3], expBody['200wop']);
    });
  });

  test(`200 code with chapters`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBibleId + '/books', {
        params: {
          'include-chapters': true,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText((await response.json())['data'][3]['chapters'][3], expBody['200wch']);
    });
  });

  // Parameter works unstable
  test.fixme(`200 code with sections`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBibleId + '/books', {
        params: {
          'include-chapters-and-sections': false,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText((await response.json())['data'][3]['sections'][3], expBody['200wch']);
    });
  });

  test('400 code with incorrect audioBibleId', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + '105a06b6146d11e7/books', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 400);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['400bp']);
    });
  });

  // Params pair doesn`t works
  test('400 code with params pair', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBibleId + '/books', {
        params: {
          'include-chapters': false,
          'include-chapters-and-sections': false,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 400);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['400bq']);
    });
  });

  test('401 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBibleId + '/books', {
        headers: { 'api-key': '' },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 401);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['401']);
    });
  });

  test('403 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + '1/books', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 403);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['403']);
    });
  });
});
