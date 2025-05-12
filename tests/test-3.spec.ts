import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('test');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('test');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.locator('#js-flash-container div').first().click();
});