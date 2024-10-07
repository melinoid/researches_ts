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
  test(`200 code w/o params`, async ({ request, helper }) => {
    test.slow();
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      console.log(Object.keys(expBody['200wod']));
      const array1 = Object.keys((await response.json())['data'][0]);
      const array2 = Object.keys(expBody['200wod']);
      if (!(array1.length === array2.length && array1.every((value, index) => value === array2[index]))) {
        throw Error('Something went wrong, check the request response.');
      }
    });
  });

  test('200 code w/o details', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        params: {
          language: expBody['200wod']['language']['id'],
          abbreviation: expBody['200wod']['abbreviation'],
          name: expBody['200wod']['name'],
          ids: expBody['200wod']['id'],
          'include-full-details': false,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      response = (await response.json())['data'][0];
      response['updatedAt'] = '';

      helper.compareResponseText(response, expBody['200wod']);
    });
  });

  test('200 code with details', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        params: {
          language: expBody['200wd']['language']['id'],
          abbreviation: expBody['200wd']['abbreviation'],
          name: expBody['200wd']['name'],
          ids: expBody['200wd']['id'],
          'include-full-details': true,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      response = (await response.json())['data'][0];
      response['updatedAt'] = '';

      helper.compareResponseText(response, expBody['200wd']);
    });
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
