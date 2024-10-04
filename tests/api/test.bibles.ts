import test from '@playwright/test';

test('Simple api test', async ({ request }) => {
  await request.get('/v1/bibles', {
    params: { language: 'bel' },
    failOnStatusCode: true,
    timeout: 4000,
  });
});
