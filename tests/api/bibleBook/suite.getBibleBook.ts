import { APIResponse } from '@playwright/test';
import { bibleId, bibleBookId } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

// interface params {
//   'include-chapters'?: boolean;
// }

const apiPath = `/v1/bibles/${bibleId}/books/`;
let response: APIResponse;

test.describe('/v1/bibles/bibleId/books/bookId', async () => {
  test(`200 code`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bibleBookId, {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    //TODO: need step
  });

  test('400 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + 'G', {});
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
      const response = await request.get(apiPath + bibleBookId, {
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
      response = await request.get('/v1/bibles/1/books/GE1', {});
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
      response = await request.get(apiPath + 'GE1', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 404);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.text(), expBody['404']);
    });
  });
});
