import { test as setup } from '../../utils/fixtures';

setup('Login', async ({ page, loginPage }) => {
  await page.goto('/login');

  await loginPage.fillOutForm();

  await page.context().storageState({ path: '.temp/session.json' }); // Save storage state for other tests (24m lifetime)
});
