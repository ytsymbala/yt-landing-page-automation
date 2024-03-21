import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Page loads successfully', async ({ page }) => {
    const title = await page.title();
    expect (title).toBe('Corporate Landing Page');
  });

test('Tabs are present in the header', async ({ page }) => {
    // Локатор для табів у хедері
const headerTabLocator = page.locator('.underline__anim overline__anim');
  // Очікувані текстові значення табів у хедері
  const expectedTabs = ['Home', 'Trial', 'News', 'About us', 'Test', 'Contacts'];

  // Перевірка, чи присутні всі очікувані таби у хедері
  for (const tab of expectedTabs) {
    await expect(headerTabLocator).toContainText(tab);
  }
});