import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'list',
  timeout: 60000,

  use: {
    ...devices['Desktop Chrome'],
    locale: 'ru-RU',
    timezoneId: 'Asia/Yekaterinburg',
    video: 'on-first-retry',
    viewport: { width: 1920, height: 1080 },
    launchOptions: { slowMo: 0 },
    baseURL: 'https://scripture.api.bible',
  },

  projects: [
    // Global authorisation
    { name: 'login', testMatch: '**/setup/setup.login.ts' },
    // Authorized tests
    {
      name: 'authorized',
      testMatch: '**/e2e/authorized/@(spec|test).*.?(c|m)[jt]s?(x)',
      dependencies: ['login'],
      use: {
        storageState: '.temp/session.json',
      },
    },
  ],
});
