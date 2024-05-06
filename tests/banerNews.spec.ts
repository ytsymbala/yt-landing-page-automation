import { expect, test } from '@playwright/test';
import { PageBannerNews } from '../page-objects/pageBanerNews';

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
    const bannerNews = new PageBannerNews(page);
    await bannerNews.showBannerNewsComponent();
});

test('Check baner news rubric text', async({ page }) => {
    const bannerNews = new PageBannerNews(page);
    await bannerNews.showBannerNewsRubricText();
});

test('Check baner news heading text', async({ page }) => {
    const bannerNews = new PageBannerNews(page);
    await bannerNews.showBannerNewsHeadingText();
});

test('Check news section content', async ({ page }) => {
    const bannerNews = new PageBannerNews(page);
    await bannerNews.showNewsSection()
});






