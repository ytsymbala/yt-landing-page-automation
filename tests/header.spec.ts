import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Header loads successfully', async ({ page }) => {
    // Check if the header element exists on the page
    const header = page.locator('header');
    expect(header).toBeDefined();
  });

  test('Landing page logo is present', async ({page}) => {
    const siteLogo = page.getByRole('img',{name: "StartEx"}).first()
    await expect (siteLogo).toBeVisible()
    expect(await siteLogo.getAttribute('src')).not.toBeNull()
    
  })

  test('Items in the header are present', async ({ page }) => {

  // Очікувані текстові значення айтемів хедера
  const expectedItems = ['Home', 'Trial', 'News', 'About us', 'Test', 'Contacts'];

  // Отримати всі елементи айтемів хедера
  const headerItems = page.locator('header nav ul.header-list li');;

  // Перевірити, що кількість елементів хедера відповідає очікуваній
  expect(await headerItems.count()).toBe(expectedItems.length);

  // Перевірити, чи присутні очікувані текстові значення у списку айтемів хедера
  for (const itemText of expectedItems) {
    const itemExists = await headerItems.locator('text=' + itemText).isVisible();
    expect(itemExists).toBe(true);
  }
  
  async function testHeaderLink(page: any, linkText: string, expectedUrl: string) {
    const link = page.locator(`a:has-text("${linkText}")`);
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(expectedUrl);
  }
  
  test('Header links navigate to the correct URLs', async ({ page }) => {
    const linksToTest = [
      { text: 'Home', url: 'https://nazar237.github.io/#home' },
      { text: 'Trial', url: 'https://nazar237.github.io/#trial' },
      { text: 'News', url: 'https://nazar237.github.io/#news' },
      { text: 'About us', url: 'https://nazar237.github.io/#about' },
      { text: 'Test', url: 'https://nazar237.github.io/TEST/test.html' },
      { text: 'Contacts', url: 'https://nazar237.github.io/#contacts' }
    ];
  
    for (const link of linksToTest) {
      await testHeaderLink(page, link.text, link.url);
    }
  });
 })