import { test } from '../page-objects/test-options';
//import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.section1');
  });
// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const section1 = document.querySelector('.section1');
//         if (section1) {
//             section1.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

test('Check section1 component presence', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection1Component().showSection1Component()
})

test('Check section1 content rubric text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection1Component().showSection1RubricText();
})

test('Check section1 header text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection1Component().showSection1HeaderText();
})

test('Check section1 content link', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection1Component().showSection1ContentLink();
})

test('Check section1 first description', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection1Component().showSection1FirstDescription();
});

test('Check section1 second description', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onSection1Component().showSection1SecondDescription();
});