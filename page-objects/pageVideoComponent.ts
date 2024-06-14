import { Page, Locator, expect } from '@playwright/test';
import { 
    expectedHeroInfo,
    expectedHeroText, 
    expectedVideoSrc 
} from '../test-data';
import { HelperBase } from './helperBase';

export class PageVideoComponent extends HelperBase {
    readonly videoComponent: Locator;
    readonly videoSoundButton: Locator;
    readonly unmuteButton: Locator;
    readonly muteButton: Locator;
    readonly fullscreenButton: Locator;
    readonly bannerText: Locator;
    readonly heroInfo: Locator;
    readonly buttonTryNow: Locator;

    constructor(page: Page) {
        super(page);
        this.videoComponent = page.locator('#bg__video');
        this.videoSoundButton = page.locator('#video__buts').getByRole('button');
        this.unmuteButton = page.locator('.hero__but__unmute');
        this.muteButton = page.locator('.hero__but__mute');
        this.fullscreenButton = page.locator('#video__buts').getByRole('button').nth(1);
        this.bannerText = page.locator('.baner__text p');
        this.heroInfo = page.locator('.hero__info');
        this.buttonTryNow = page.locator('#hero__video').getByRole('button', { name: 'TRY NOW' });

    }

    async showVideoComponent(){
        await expect(this.videoComponent).toBeVisible();
    }

    async showUsedVideo(){
        const videoSrc = await this.videoComponent.getAttribute('src');
        expect(videoSrc).toContain(expectedVideoSrc);
    }

    async showVideoPreloadAttribute(){
        const preloadAttribute = await this.videoComponent.getAttribute('preload');
        expect(preloadAttribute).toBe('auto');
    }

    async showDefaultVideoState(){
        const hasMuteAttribute = await this.videoComponent.getAttribute('muted');
        expect(hasMuteAttribute).toBe('true');
    }

    async clickMuteUnmuteButton(){
        await this.videoSoundButton.first().click();
        const getUnmuteButtonStyle = await this.unmuteButton.getAttribute('style');
        expect(getUnmuteButtonStyle).toContain('display: inline-block;');

        await this.videoSoundButton.first().click();
        const getMuteButtonStyle = await this.muteButton.getAttribute('style');
        expect(getMuteButtonStyle).toContain('display: inline-block;');
    }

    async showFullscreenResize(){
        await this.fullscreenButton.first().click();

        const isVideoFullscreen = await this.page.evaluate(() => {
            return document.fullscreenElement !== null;
        });
        expect(isVideoFullscreen).toBeTruthy();
    }

    async showHeroBannerTitle(){
        const getBannerText = await this.bannerText.allTextContents();
        expect(getBannerText).toEqual(expectedHeroText);
    }

    async showHeroInfoText(){
        await expect(this.heroInfo).toBeVisible();
        const getHeroInfo = await this.heroInfo.textContent();
        expect(getHeroInfo).toContain(expectedHeroInfo);
    }

    async showTryNowButton(){
        await expect(this.buttonTryNow).toBeVisible();
    }

}

