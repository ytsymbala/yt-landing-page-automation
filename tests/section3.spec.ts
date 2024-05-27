import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('.section3');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check Section 3 component presence', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onSection3Component().showSection3Component();
});

test('Check section 3 rubric text', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onSection3Component().showSection3RubricText();
});

test('Check section 3 heading text', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onSection3Component().showSection3HeadingText();
})

test('Check section 3 content text', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onSection3Component().showSection3ContentText();
})

test('Check section 3 image', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onSection3Component().showSection3Image();
})
