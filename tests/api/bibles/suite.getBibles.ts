import { APIResponse } from '@playwright/test';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

// interface params {
//   language?: string;
//   abbreviation?: string;
//   name?: string;
//   ids?: string;
//   'include-full-details'?: boolean;
// }

const apiPath = '/v1/bibles';
let response: APIResponse;

test.describe('/v1/bibles', async () => {
  test(`200 code`, async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        params: { language: 'bel' },
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
      helper.compareResponseText(await response.text(), expBody['400']);
    });
  });

  test.only('401 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        headers: { 'api-key': '' },
      });
    });
    console.log(await response.json());
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 401);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.text(), expBody['401']);
    });
  });
});
