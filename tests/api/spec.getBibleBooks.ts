import { bibleId } from '../../utils/config';
import { test } from '../../utils/fixtures';

// interface params {
//   'include-chapters'?: boolean;
//   'include-chapters-and-sections'?: boolean;
// }

const apiPath = '/v1/bibles/';

//TODO: rewrite these tests to normal ones
test(`Check ${apiPath}bibleId/books 200 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + bibleId + '/books', {});

  helper.compareStatusCode(response.status(), 200);
});

test(`Check ${apiPath}bibleId/books 400 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + 'b52bc8b7af3bdc6f/books', {});

  helper.compareStatusCode(response.status(), 400);
});

test(`Check ${apiPath}bibleId/books 401 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + '1/books', {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});

test(`Check ${apiPath}bibleId/books 403 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath + '1/books', {});

  helper.compareStatusCode(response.status(), 403);
});
