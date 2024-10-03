import { test } from '../../../utils/fixtures';

test('Login', async ({ page, loginPage }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Logout' }).click();

  await page.waitForLoadState('load');

  await page.getByRole('link', { name: 'Apps' }).click();

  await loginPage.fillOutForm();
});
