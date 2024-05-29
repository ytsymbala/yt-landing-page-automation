import { test } from '../page-objects/test-options';
//import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.hero-baner#home');
  });
// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
// });

test('Check video component presence', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().showVideoComponent();
})

test('Check that valid video used', async({ pageManager }) =>  {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().showUsedVideo();

})

test('Check video preload attribute', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().showVideoPreloadAttribute();
});

test('Check that video is muted by default', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().showDefaultVideoState();
})

 test('Check mute and unmute buttons', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().clickMuteUnmuteButton();
});

test.skip('Check fullscreen resize button', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().showFullscreenResize();
});

test('Check the hero banner title', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().showHeroBannerTitle();
});

test('Check the hero info text', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().showHeroInfoText();
})

test('Check that button "Try now" is displayed on the hero banner', async ({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onVideoComponent().showTryNowButton();
})

