import { test, expect } from '@playwright/test';

test('server is reachable and token works', async ({ request }) => {
  const response = await request.get('/customers');
  console.log('Status:', response.status());
  console.log('Body:', await response.text());
  expect(response.status()).not.toBe(401);
});