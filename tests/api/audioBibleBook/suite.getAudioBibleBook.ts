import { APIResponse } from '@playwright/test';
import { audioBible } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

// interface params {
//   'include-chapters'?: boolean;
// }

const apiPath = `/v1/audio-bibles/${audioBible.id}/books/`;
let response: APIResponse;

test.describe('/v1/audio-bibles/audioBibleId/books/bookId', async () => {
  test(`200 code w/o params`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.book.id, {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['200wop']);
    });
  });

  test(`200 code w/o chapters`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.book.id, { params: { 'include-chapters': false } });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['200wop']);
    });
  });

  test(`200 code with chapters`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + audioBible.book.id, { params: { 'include-chapters': true } });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['200wc']);
    });
  });

  test('400 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + '1', {});
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
      response = await request.get(apiPath + audioBible.book.id, {
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
      response = await request.get('/v1/bibles/1/books/1C1', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 403);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['403']);
    });
  });

  test('404 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + '1C1', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 404);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['404']);
    });
  });
});
