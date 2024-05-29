import { test } from '../page-objects/test-options';
//import { PageManager } from '../page-objects/pageManager';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.clients');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });


test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.clients');
  });

test('Check About Clients component presence', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onAboutClientsComponent().showAboutClientsComponent();
});

test('Check About Clients section content', async ({ pageManager }) => {
    ///const pm = new PageManager(page);
    await pageManager.onAboutClientsComponent().showClientsContent();
});

test('Check About Clients section logos', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onAboutClientsComponent().showClientsLogos();
});

