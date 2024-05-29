import { test } from '../page-objects/test-options';
//import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.baner__news');
  });
// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.baner__news');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

test('Check Baner News component presence', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onBannerNewsComponent().showBannerNewsComponent();
});

test('Check baner news rubric text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onBannerNewsComponent().showBannerNewsRubricText();
});

test('Check baner news heading text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onBannerNewsComponent().showBannerNewsHeadingText();
});

test('Check news section content', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onBannerNewsComponent().showNewsSection();
});






