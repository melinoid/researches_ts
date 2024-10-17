import { type Page } from '@playwright/test';

/** Locators and functions for common interface elements. */
export default class CommonPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
