import { test } from '../page-objects/test-options';
import { faker } from '@faker-js/faker';
// import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('footer');
  });
// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('footer');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

test('Check Footer component presence', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onFooterComponent().showFooterComponent();
});

test('Check site logo in the footer', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onFooterComponent().showFooterSiteLogo();
});

test('Check all info text in the footer', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onFooterComponent().showFooterInfoText();
});

test('Click and Check all footer links and titles', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onFooterComponent().checkAndClickOnFooterLinks();
});

test('Check presence of subscription form', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onFooterComponent().showSubscibeForm();
});

test('Fill and Submit subscribe form', async ({ pageManager }) => {
    //const pm = new PageManager(page);

    const randomEmail = faker.internet.exampleEmail();
    await pageManager.onFooterComponent().fillAndSubmitFooterSubscribeForm(randomEmail);
});

test('Click on each social link and verify page opens', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onFooterComponent().checkAndClickOnSocialLinks();
});

