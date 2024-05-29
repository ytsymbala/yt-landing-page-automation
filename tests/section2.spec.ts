import { test } from '../page-objects/test-options';
//import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.section2');
  });
// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.section2');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

test('Check Section2 component presence', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection2Component().showSection2Component();
});

test('Check section 2 rubric text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection2Component().showSection2RubricText();
});

test('Check section 2 heading text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection2Component().showSection2HeadingText();
})

test('Check section 2 content link', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection2Component().showSection2ContentLink();
})

test('Check section 2 content text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection2Component().showSection2ContentText();
})

test('Check section 2 image', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection2Component().showSection2Image();
})