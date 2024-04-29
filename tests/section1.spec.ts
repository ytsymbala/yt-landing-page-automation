import { test } from '@playwright/test';
import { PageSection1 } from '../page-objects/pageSection1'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const section1 = document.querySelector('.section1');
        if (section1) {
            section1.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check section1 component presence', async({ page }) => {
    const PageSection1Component = new PageSection1(page);
    await PageSection1Component.showSection1Component();
})

test('Check section1 content rubric text', async({ page }) => {
    const PageSection1Component = new PageSection1(page);
    await PageSection1Component.showSection1RubricText();
})

test('Check section1 header text', async({ page }) => {
    const PageSection1Component = new PageSection1(page);
    await PageSection1Component.showSection1HeaderText();
})

test('Check section1 content link', async({ page }) => {
    const PageSection1Component = new PageSection1(page);
    await PageSection1Component.showSection1ContentLink();
})

test('Check section1 first description', async({ page }) => {
    const PageSection1Component = new PageSection1(page);
    await PageSection1Component.showSection1FirstDescription();
});

test('Check section1 second description', async({ page }) => {
    const PageSection1Component = new PageSection1(page);
    await PageSection1Component.showSection1SecondDescription();
});