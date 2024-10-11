import { APIResponse } from '@playwright/test';
import { audioBible } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

const apiPath = '/v1/audio-bibles/';
let response: APIResponse;

test.describe('/v1/audio-bibles/audioBibleId/books', async () => {
  test(`200 code w/o params`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.id + '/books', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // There is too much data in the answer, we will limit ourselves to a separate block.
      helper.compareResponseText(expBody['200wop'], (await response.json())['data'][3]);
    });
  });

  test(`200 code w/o chapters`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.id + '/books', {
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
      helper.compareResponseText(expBody['200wop'], (await response.json())['data'][3]);
    });
  });

  test(`200 code with chapters`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.id + '/books', {
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
      helper.compareResponseText(expBody['200wch'], (await response.json())['data'][3]['chapters'][3]);
    });
  });

  // Parameter works unstable
  test.fixme(`200 code with sections`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.id + '/books', {
        params: {
          'include-chapters-and-sections': false,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // There is too much data in the answer, we will limit ourselves to a separate block.
      helper.compareResponseText(expBody['200wch'], (await response.json())['data'][3]['sections'][3]);
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
      helper.compareResponseText(expBody['400bp'], await response.json());
    });
  });

  // Params pair doesn`t works
  test('400 code with params pair', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.id + '/books', {
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
      helper.compareResponseText(expBody['400bq'], await response.json());
    });
  });

  test('401 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.id + '/books', {
        headers: { 'api-key': '' },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 401);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(expBody['401'], await response.json());
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
      helper.compareResponseText(expBody['403'], await response.json());
    });
  });
});
