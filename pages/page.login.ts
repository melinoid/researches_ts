import { type Page, type Locator, expect } from '@playwright/test';
import { getMainUser } from '../utils/config';

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
    const mainUser = getMainUser();
    await this.login.field.fill(mainUser.username + '');
    await this.password.field.fill(mainUser.password + '');
    await this.signInBtn.click();

    await this.page.waitForLoadState('load');

    await expect(this.page.getByRole('link', { name: 'Logout' })).toBeVisible(); // Check that we are authorized
  }
}
