import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Username or Email').fill(process.env.AT_USERNAME + '');
  await page.getByLabel('Password').fill(process.env.AT_PASSWORD + '');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

  await page.waitForLoadState('load');

  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});
