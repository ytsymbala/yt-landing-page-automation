import { expect, test } from '@playwright/test';
import { PageSection3 } from '../page-objects/pageSection3';

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
    const section3 = new PageSection3(page);
    await section3.showSection3Component();
});

test('Check section 3 rubric text', async({ page }) => {
    const section3 = new PageSection3(page);
    await section3.showSection3RubricText();
});

test('Check section 3 heading text', async({ page }) => {
    const section3 = new PageSection3(page);
    await section3.showSection3HeadingText();
})

test('Check section 3 content text', async({ page }) => {
    const section3 = new PageSection3(page);
    await section3.showSection3ContentText();
})

test('Check section 3 image', async({ page }) => {
    const section3 = new PageSection3(page);
    await section3.showSection3Image();
})
