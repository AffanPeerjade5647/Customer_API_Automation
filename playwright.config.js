// @ts-check
import 'dotenv/config';
import { defineConfig } from '@playwright/test';

if (!process.env.API_TOKEN) {
  throw new Error('API_TOKEN is missing. Add it to your .env file.');
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
    trace: 'on-first-retry',
  },
});