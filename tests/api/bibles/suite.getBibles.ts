import { APIResponse } from '@playwright/test';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

const apiPath = '/v1/bibles';
let response: APIResponse;

test.describe('/v1/bibles', async () => {
  test('200 code w/o params', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response object', async () => {
      const array1 = Object.keys((await response.json())['data'][4]);
      const array2 = Object.keys(expBody['200wop']);

      if (!(array1.length === array2.length && array1.every((value, index) => value === array2[index]))) {
        throw Error('Something went wrong, check the request response.');
      }
    });
  });

  test('200 code with all params', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        params: {
          language: 'eng',
          abbreviation: expBody['200wap']['data']['0']['abbreviation'],
          name: expBody['200wap']['data']['0']['name'],
          ids: expBody['200wap']['data']['0']['id'],
          'include-full-details': true,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      response = await response.json();
      response['data'][0]['updatedAt'] = '';

      helper.compareResponseText(expBody['200wap'], response);
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
      helper.compareResponseText(expBody['400'], await response.json());
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
      helper.compareResponseText(expBody['401'], await response.json());
    });
  });
});
