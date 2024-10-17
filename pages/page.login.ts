import { type Page, type Locator, expect } from '@playwright/test';
import { getMainUser } from '../utils/config';
import { Components } from './components';

/** Locators and functions for the `scripture.api.bible/login` page. */
export default class LoginPage {
  readonly page: Page;

  readonly form: {
    readonly loginField: Components.InputField;
    readonly passField: Components.InputField;
    readonly signInBtn: Locator;
  };

  constructor(page: Page) {
    this.page = page;

    this.form = {
      loginField: {
        label: page.getByText('Username or Email'),
        input: page.getByLabel('Username or Email'),
      },
      passField: {
        label: page.getByText('Password', { exact: true }),
        input: page.getByLabel('Password'),
      },
      signInBtn: page.getByRole('button', { name: 'Sign in', exact: true }),
    };
  }

  /** Fill out an `Bible.Api` auth form and sign in */
  async fillOutForm() {
    const mainUser = getMainUser();
    await this.form.loginField.input.fill(mainUser.username + '');
    await this.form.passField.input.fill(mainUser.password + '');
    await this.form.signInBtn.click();

    await this.page.waitForLoadState('load');

    await expect(this.page.getByRole('link', { name: 'Logout' })).toBeVisible(); // Check that we are authorized
  }
}
