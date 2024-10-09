import { APIResponse } from '@playwright/test';
import { bibleId } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

// interface params {
//   'include-chapters'?: boolean;
//   'include-chapters-and-sections'?: boolean;
// }

const apiPath = '/v1/bibles/';
let response: APIResponse;

test.describe('/v1/bibles/bibleId/books', async () => {
  test(`200 code w/o params`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bibleId + '/books', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // There is too much data in the answer, we will limit ourselves to a separate block.
      helper.compareResponseText((await response.json())['data'][1], expBody['200wop']);
    });
  });

  test(`200 code w/o chapters`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bibleId + '/books', {
        params: {
          'include-chapters': false,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // There is too much data in the answer, we will limit ourselves to a separate block.
      helper.compareResponseText((await response.json())['data'][1], expBody['200wop']);
    });
  });

  test(`200 code with chapters`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bibleId + '/books', {
        params: {
          'include-chapters': true,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // There is too much data in the answer, we will limit ourselves to a separate block.
      helper.compareResponseText((await response.json())['data'][0]['chapters'][1], expBody['200wch']);
    });
  });

  test(`200 code with sections`, async ({ request, helper }) => {
    test.slow();
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bibleId + '/books', {
        params: {
          'include-chapters-and-sections': true,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // There is too much data in the answer, we will limit ourselves to a separate block.
      helper.compareResponseText((await response.json())['data'][0]['chapters'][1], expBody['200pp']);
    });
  });

  test('200 code with params pair', async ({ request, helper }) => {
    test.slow();
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bibleId + '/books', {
        params: {
          'include-chapters': true,
          'include-chapters-and-sections': true,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // There is too much data in the answer, we will limit ourselves to a separate block.
      helper.compareResponseText((await response.json())['data'][0]['chapters'][1], expBody['200pp']);
    });
  });

  test('400 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + 'b52bc8b7af3bdc6f/books', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 400);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['400']);
    });
  });

  test('401 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + '1/books', {
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
