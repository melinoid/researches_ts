import { test as base } from '@playwright/test';
import Helper from './helper';
import LoginPage from '../pages/page.login';

type Fixtures = {
  loginPage: LoginPage;
  helper: Helper;
};

export const test = base.extend<Fixtures>({
  helper: async ({}, use) => {
    await use(new Helper());
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
