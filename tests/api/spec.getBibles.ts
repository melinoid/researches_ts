import { test } from '../../utils/fixtures';

// interface params {
//   language?: string;
//   abbreviation?: string;
//   name?: string;
//   ids?: string;
//   'include-full-details'?: boolean;
// }

const apiPath = '/v1/bibles';

//TODO: rewrite these tests to normal ones
test(`Check ${apiPath} 200 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath, {
    params: { language: 'bel' },
  });

  helper.compareStatusCode(response.status(), 200);
});

test(`Check ${apiPath} 400 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath, {
    params: { language: '' },
  });

  helper.compareStatusCode(response.status(), 400);
});

test(`Check ${apiPath} 401 code`, async ({ request, helper }) => {
  const response = await request.get(apiPath, {
    headers: { 'api-key': '' },
  });

  helper.compareStatusCode(response.status(), 401);
});
