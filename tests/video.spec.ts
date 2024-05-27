import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Check video component presence', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onVideoComponent().showVideoComponent();
})

test('Check that valid video used', async({ page }) =>  {
    const pm = new PageManager(page);
    await pm.onVideoComponent().showUsedVideo();

})

test('Check video preload attribute', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onVideoComponent().showVideoPreloadAttribute();
});

test('Check that video is muted by default', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onVideoComponent().showDefaultVideoState();
})

 test('Check mute and unmute buttons', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onVideoComponent().clickMuteUnmuteButton();
});

test.skip('Check fullscreen resize button', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onVideoComponent().showFullscreenResize();
});

test('Check the hero banner title', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onVideoComponent().showHeroBannerTitle();
});

test('Check the hero info text', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onVideoComponent().showHeroInfoText();
})

test('Check that button "Try now" is displayed on the hero banner', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onVideoComponent().showTryNowButton();
})

