import { APIResponse } from '@playwright/test';
import { bibleBookId, bibleId } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

const apiPath = `/v1/bibles/${bibleId}/books/`;
let response: APIResponse;

test.describe('/v1/bibles/bibleId/books/bookId/chapters', async () => {
  test(`200 code`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bibleBookId + '/chapters', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    //TODO: need step
  });

  test('400 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + 'b52bc8b7af3bdc6f/chapters', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 400);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.text(), expBody['400']);
    });
  });

  test('401 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + '1/chapters', {
        headers: { 'api-key': '' },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 401);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.text(), expBody['401']);
    });
  });

  test('403 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get('/v1/bibles/1/books/1/chapters', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 403);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.text(), expBody['403']);
    });
  });

  test('404 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + 'GE1/chapters', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 404);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.text(), expBody['404']);
    });
  });
});
