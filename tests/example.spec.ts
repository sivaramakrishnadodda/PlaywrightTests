import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Alerts, Frame & Windows' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Widgets' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Interactions' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Book Store Application' }).click();
});