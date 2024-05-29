import { test } from '../page-objects/test-options';
// import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.section3');
  });
// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.section3');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

test('Check Section 3 component presence', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection3Component().showSection3Component();
});

test('Check section 3 rubric text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection3Component().showSection3RubricText();
});

test('Check section 3 heading text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection3Component().showSection3HeadingText();
});

test('Check section 3 content text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection3Component().showSection3ContentText();
});

test('Check section 3 image', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection3Component().showSection3Image();
});
