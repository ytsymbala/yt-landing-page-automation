import { Page, expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('User logo is displayed with correct image in default state', async ({ page }) => {
  const userLogo = page.getByRole('img', { name: 'UserLogo' })
  await expect(userLogo).toBeVisible()
  const userLogoSrc = await userLogo.getAttribute('src');
  const expectedUserLogoSrc = 'images/user2.svg'
  expect(userLogoSrc).toContain(expectedUserLogoSrc);

});

test('User log was changed on hover', async ({ page }) => {
  const userLogo = page.locator('.user__icon')
  await userLogo.hover();
  //await page.waitForTimeout(1000); // Чекаємо 1 секунду для зміни логотипу (можливо, знадобиться налаштування цього таймауту)
  //const initialSrc = await page.locator('.user__img_h1').getAttribute('src');
  const hoveredUserLogo = await page.getByRole('img', { name: 'UserLogo' }).getAttribute('src');
  const hoveredSrc = 'images/user1.svg'
  expect(hoveredUserLogo).toContain(hoveredSrc);
})

test('should verify user menu items after clicking on user logo', async ({page}) => {
  // Click on user logo
  await page.click('.user__icon .header__image');

  // Wait for the user menu to appear
  await page.waitForSelector('.user__menu');

  // Define the expected user menu items
  const expectedMenuItems = ['My Account111', 'Settings', 'About', 'Support'];

  // Get the actual user menu items from the page
  const menuItems = await page.locator('.user__menu .user__item').evaluate((items) =>
  items.map((item) => item.textContent())
  );

  // Assert that all expected menu items are present
  for (const expectedItem of expectedMenuItems) {
    expect(menuItems).toContain(expectedItem);
  }
});
