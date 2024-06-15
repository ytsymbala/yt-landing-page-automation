import { test } from '../page-objects/fixtures';

test.beforeEach(async ({ navigateTo }) => {
  await navigateTo('header');
});

test('Header is displayed @smoke', async ({ pageManager }) => {
  await pageManager.onHeaderComponent().showHeader();
});

test('Site logo is displayed with correct image', async ({ pageManager }) => {
  await pageManager.onHeaderComponent().siteLogoIsDisplayed();
});

test('Header tabs are present and links work @smoke', async ({ pageManager }) => {
  await pageManager.onHeaderComponent().headerTabsDisplayedAndLinksWorks();
});

test('User logo is displayed with correct image in default state', async ({ pageManager }) => {
  await pageManager.onHeaderComponent().showDefaultUserLogoWithCorrectImage();
});

test('User logo was changed on hover mouse button', async ({ pageManager }) => {
  await pageManager.onHeaderComponent().showUserLogoOnHover();
});

test('Check the user menu items when navigate on user icon @smoke', async ({ pageManager }) => {
  await pageManager.onHeaderComponent().userInfoItemsDisplayedAndLinksWorks();
});
