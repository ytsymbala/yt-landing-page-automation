import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

test('Header is displayed', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onHeaderComponent().showHeader();
});

test('Site logo is displayed with correct image', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onHeaderComponent().siteLogoIsDisplayed();
});

test('Header tabs are present and links work', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onHeaderComponent().headerTabsDisplayedAndLinksWorks();
});

test('User logo is displayed with correct image in default state', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onHeaderComponent().showDefaultUserLogoWithCorrectImage();
});

test('User logo was changed on hover mouse button', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onHeaderComponent().showUserLogoOnHover();
});

test('Check the user menu items when navigate on user icon', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onHeaderComponent().userInfoItemsDisplayedAndLinksWorks();
});
