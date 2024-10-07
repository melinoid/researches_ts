import { APIResponse } from '@playwright/test';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

// interface params {
//   language?: string;
//   abbreviation?: string;
//   name?: string;
//   ids?: string;
//   bibleId?: string;
//   'include-full-details'?: boolean;
// }

const apiPath = '/v1/audio-bibles';
let response: APIResponse;

test.describe('/v1/audio-bibles', async () => {
  test(`200 code`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        params: { language: 'eng' },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    //TODO: need step
  });

  test('400 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        params: { language: '' },
      });
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
      response = await request.get(apiPath, {
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
});
