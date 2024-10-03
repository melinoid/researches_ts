import { type Page, type Locator, expect } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;

  readonly login: {
    readonly label: Locator;
    readonly field: Locator;
  };
  readonly password: {
    readonly label: Locator;
    readonly field: Locator;
  };
  readonly signInBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.login = {
      label: page.getByText('Username or Email'),
      field: page.getByLabel('Username or Email'),
    };
    this.password = {
      label: page.getByText('Password', { exact: true }),
      field: page.getByLabel('Password'),
    };
    this.signInBtn = page.getByRole('button', { name: 'Sign in', exact: true });
  }

  /** Fill out an `Bible.Api` auth form and sign in */
  async fillOutForm() {
    await this.login.field.fill(process.env.AT_USERNAME + '');
    await this.password.field.fill(process.env.AT_PASSWORD + '');
    await this.signInBtn.click();

    await this.page.waitForLoadState('load');

    await expect(this.page.getByRole('link', { name: 'Logout' })).toBeVisible(); // Check that we are authorized
  }
}
