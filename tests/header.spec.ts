import { test } from '../page-objects/test-options';
//import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('header');
  });

test('Header is displayed', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onHeaderComponent().showHeader();
});

test('Site logo is displayed with correct image', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onHeaderComponent().siteLogoIsDisplayed();
});

test('Header tabs are present and links work', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onHeaderComponent().headerTabsDisplayedAndLinksWorks();
});

test('User logo is displayed with correct image in default state', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onHeaderComponent().showDefaultUserLogoWithCorrectImage();
});

test('User logo was changed on hover mouse button', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onHeaderComponent().showUserLogoOnHover();
});

test('Check the user menu items when navigate on user icon', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onHeaderComponent().userInfoItemsDisplayedAndLinksWorks();
});
