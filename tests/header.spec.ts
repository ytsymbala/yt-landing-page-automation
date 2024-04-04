import { test } from '@playwright/test';
import { PageHeader } from '../page-objects/pageHeader'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

test('Header is displayed', async ({ page }) => {
    const pageHeader = new PageHeader(page);
    await pageHeader.showHeader();
});

test('Site logo is displayed with correct image', async ({ page }) => {
    const pageHeader = new PageHeader(page);
    await pageHeader.siteLogoIsDisplayed();
});

test('Header tabs are present and links work', async ({ page }) => {
    const pageHeader = new PageHeader(page);
    await pageHeader.headerTabsDisplayedAndLinksWorks();
});

test('User logo is displayed with correct image in default state', async ({ page }) => {
    const pageHeader = new PageHeader(page);
    await pageHeader.showDefaultUserLogoWithCorrectImage();
})

test('User logo was changed on hover mouse button', async ({ page }) => {
    const pageHeader = new PageHeader(page);
    await pageHeader.showUserLogoOnHover();
})

test('Check the user menu items when navigate on user icon', async({ page }) => {
    const pageHeader = new PageHeader(page);
    await pageHeader.userInfoItemsDisplayedAndLinksWorks();
})
