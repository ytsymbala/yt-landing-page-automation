import { test } from '../page-objects/fixtures';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.hero-baner#home');
  });

test('Check video component presence', async ({ pageManager }) => {
    await pageManager.onVideoComponent().showVideoComponent();
});

test('Check that valid video used', async({ pageManager }) =>  {
    await pageManager.onVideoComponent().showUsedVideo();

});

test('Check video preload attribute', async ({ pageManager }) => {
    await pageManager.onVideoComponent().showVideoPreloadAttribute();
});

test('Check that video is muted by default', async ({ pageManager }) => {
    await pageManager.onVideoComponent().showDefaultVideoState();
});

 test('Check mute and unmute buttons', async ({ pageManager }) => {
    await pageManager.onVideoComponent().clickMuteUnmuteButton();
});

test.skip('Check fullscreen resize button', async ({ pageManager }) => {
    await pageManager.onVideoComponent().showFullscreenResize();
});

test('Check the hero banner title', async ({ pageManager }) => {
    await pageManager.onVideoComponent().showHeroBannerTitle();
});

test('Check the hero info text', async ({ pageManager }) => {
    await pageManager.onVideoComponent().showHeroInfoText();
});

test('Check that button "Try now" is displayed on the hero banner', async ({ pageManager }) => {
    await pageManager.onVideoComponent().showTryNowButton();
});

