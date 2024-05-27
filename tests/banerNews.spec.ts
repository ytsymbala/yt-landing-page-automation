import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('.baner__news');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check Baner News component presence', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onBannerNewsComponent().showBannerNewsComponent();
});

test('Check baner news rubric text', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onBannerNewsComponent().showBannerNewsRubricText();
});

test('Check baner news heading text', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onBannerNewsComponent().showBannerNewsHeadingText();
});

test('Check news section content', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onBannerNewsComponent().showNewsSection();
});






