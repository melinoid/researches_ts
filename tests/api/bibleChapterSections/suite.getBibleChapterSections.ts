import { APIResponse } from '@playwright/test';
import { bible } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

const apiPath = `/v1/bibles/${bible.id}/chapters/`;
let response: APIResponse;

test.describe('/v1/bibles/bibleId/chapters/chapterId/sections', async () => {
  test(`200 code`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bible.book.chapterId + '/sections', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Caution, kludge. Come up with something normal here.
      // There is too much data in the answer, we will limit ourselves to a separate block.
      helper.compareResponseText(expBody['200'], (await response.json())['data'][2]);
    });
  });

  test('400 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + 'b52bc8b7af3bdc6f/sections', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 400);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(expBody['400'], await response.json());
    });
  });

  test('401 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + '1/sections', {
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
      response = await request.get('/v1/bibles/1/chapters/1/sections', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 403);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(expBody['403'], await response.json());
    });
  });

  test('404 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + 'GE1.1/sections', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 404);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(expBody['404'], await response.json());
    });
  });
});
