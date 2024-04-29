import { test } from '@playwright/test';
import { PageVideoComponent } from '../page-objects/pageVideoComponent';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Check video component presence', async ({ page }) => {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.showVideoComponent();
})

test('Check that valid video used', async({ page }) =>  {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.showUsedVideo();

})

test('Check video preload attribute', async ({ page }) => {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.showVideoPreloadAttribute();
});

test('Check that video is muted by default', async ({ page }) => {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.showDefaultVideoState();
})

 test('Check mute and unmute buttons', async ({ page }) => {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.clickMuteUnmuteButton();
});

test.skip('Check fullscreen resize button', async ({ page }) => {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.showFullscreenResize();
});

test('Check the hero banner title', async ({ page }) => {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.showHeroBannerTitle();
});

test('Check the hero info text', async ({ page }) => {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.showHeroInfoText();
})

test('Check that button "Try now" is displayed on the hero banner', async ({ page }) => {
    const videoComponentPage = new PageVideoComponent(page);
    await videoComponentPage.showTryNowButton();
})

