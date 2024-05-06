import { test } from '@playwright/test';
import { PageSection2 } from '../page-objects/pageSection2';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('.section2');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check Section2 component presence', async({ page }) => {
    const section2 = new PageSection2(page);
    await section2.showSection2Component();
});

test('Check section 2 rubric text', async({ page }) => {
    const section2 = new PageSection2(page);
    await section2.showSection2RubricText();
});

test('Check section 2 heading text', async({ page }) => {
    const section2 = new PageSection2(page);
    await section2.showSection2HeadingText();
})

test('Check section 2 content link', async({ page }) => {
    const section2 = new PageSection2(page);
    await section2.showSection2ContentLink();
})

test('Check section 2 content text', async({ page }) => {
    const section2 = new PageSection2(page);
    await section2.showSection2ContentText();
})

test('Check section 2 image', async({ page }) => {
    const section2 = new PageSection2(page);
    await section2.showSection2Image();
})