import { test } from '../page-objects/fixtures';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.baner__news');
  });

test('Check Baner News component presence', async({ pageManager }) => {
    await pageManager.onBannerNewsComponent().showBannerNewsComponent();
});

test('Check baner news rubric text', async({ pageManager }) => {
    await pageManager.onBannerNewsComponent().showBannerNewsRubricText();
});

test('Check baner news heading text', async({ pageManager }) => {
    await pageManager.onBannerNewsComponent().showBannerNewsHeadingText();
});

test('Check news section content', async ({ pageManager }) => {
    await pageManager.onBannerNewsComponent().showNewsSection();
});






