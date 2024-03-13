import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://nazar237.github.io/');
});

test('Page loads successfully', async ({page}) => {
    const title = await page.title();
    expect (title).toBe('Corporate Landing Page');
  });