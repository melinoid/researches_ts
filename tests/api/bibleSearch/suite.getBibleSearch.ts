import { APIResponse } from '@playwright/test';
import { bible } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

interface RequestParams {
  query?: string;
  limit?: number;
  offset?: number;
  sort?: string; // relevanse, canonical, reverse-canonical
  range?: string;
  fuzziness?: string; // AUTO, 0, 1, 2
}

const apiPath = `/v1/bibles/${bible.id}/search`;
let response: APIResponse;

test.describe('/v1/bibles/bibleId/search', async () => {
  test('200 code with only query', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        params: {
          query: 'bible',
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response object', async () => {
      helper.compareResponseText((await response.json())['data'], expBody['200woq']);
    });
  });

  test('200 code with all params', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {
        params: {
          query: 'bible',
          limit: 1,
          offset: 1,
          sort: 'canonical',
          range: 'GEN.1',
          fuzziness: 2,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText((await response.json())['data'], expBody['200wap']);
    });
  });

  test('400 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {});
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

  test('403 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get('/v1/bibles/1/search', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 403);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['403']);
    });
  });

  // Not found bible id for this case
  test.fixme('404 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath, {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 404);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['404']);
    });
  });
});
