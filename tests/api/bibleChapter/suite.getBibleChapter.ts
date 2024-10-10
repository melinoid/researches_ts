import { APIResponse } from '@playwright/test';
import { bible } from '../../../utils/config';
import { test } from '../../../utils/fixtures';
import * as expBody from './responses.json';

interface RequestParams {
  'content-type'?: string; // html, json, text
  'include-notes'?: boolean;
  'include-titles'?: boolean;
  'include-chapter-numbers'?: boolean;
  'include-verse-numbers'?: boolean;
  'include-verse-spans'?: boolean;
  parallels?: string;
}

const apiPath = `/v1/bibles/${bible.id}/chapters/`;
let response: APIResponse;

test.describe('/v1/bibles/bibleId/chapters/chapterId', async () => {
  test('200 code w/o params', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bible.book.chapterId, {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // Let's agree that we only need static data, rewriting dynamic data and discard meta.
      helper.compareResponseText((await response.json())['data'], expBody['200wop']);
    });
  });

  test('200 code with html & alternate params', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bible.book.chapterId, {
        params: {
          'content-type': 'html',
          'include-notes': true,
          'include-titles': false,
          'include-chapter-numbers': true,
          'include-verse-numbers': false,
          'include-verse-spans': true,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // Let's agree that we only need static data, rewriting dynamic data and discard meta.
      helper.compareResponseText((await response.json())['data'], expBody['200html']);
    });
  });

  test('200 code with json & reverse alternate params', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bible.book.chapterId, {
        params: {
          'content-type': 'json',
          'include-notes': false,
          'include-titles': true,
          'include-chapter-numbers': false,
          'include-verse-numbers': true,
          'include-verse-spans': false,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // Let's agree that we only need static data, rewriting dynamic data and discard meta.
      helper.compareResponseText((await response.json())['data'], expBody['200json']);
    });
  });

  test('200 code with text & all params', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bible.book.chapterId, {
        params: {
          'content-type': 'text',
          'include-notes': true,
          'include-titles': true,
          'include-chapter-numbers': true,
          'include-verse-numbers': true,
          'include-verse-spans': true,
          parallels: bible.id,
        },
      });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 200);
    });
    await test.step('Compare response text', async () => {
      // Attention, kludge. Come up with something normal here.
      // Let's agree that we only need static data, rewriting dynamic data and discard meta.
      helper.compareResponseText((await response.json())['data'], expBody['200text']);
    });
  });

  test('400 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + 'G', {});
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
      response = await request.get(apiPath + bible.book.chapterId, {
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

  test('403 code w/o params', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get('/v1/bibles/1/chapters/1', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 403);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['403wop']);
    });
  });

  test('403 code with parallels', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + bible.book.chapterId, { params: { parallels: 1 } });
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 403);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['403wp']);
    });
  });

  test('404 code', async ({ request, helper }) => {
    await test.step('Send request', async () => {
      response = await request.get(apiPath + 'GEN.0', {});
    });
    await test.step('Compare status code', async () => {
      helper.compareStatusCode(response.status(), 404);
    });
    await test.step('Compare response text', async () => {
      helper.compareResponseText(await response.json(), expBody['404']);
    });
  });
});
