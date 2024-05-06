import { Page, Locator, expect } from '@playwright/test';
import { expectedTermsAndServiceLinkTitle, expectedTryTextButtonInfo, expectedTryTextForAgreements, expectedTryTrialHeadingText, expectedTryTrialRubricText } from '../test-data';

export class PageBannerNews {
    readonly page: Page;
    readonly bannerNewsComponent: Locator;
    readonly bannerNewsRubricText: Locator;
    readonly bannerNewsHeadingText: Locator;
    readonly newsBlocks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.bannerNewsComponent = page.locator('#news');
        this.bannerNewsRubricText = page.getByRole('heading', { name: 'NEW FEATURES' });
        this.bannerNewsHeadingText = page.locator('h2').filter({ hasText: 'Some awesone features' });
        this.newsBlocks = page.locator('.ban_news .col-lg-4');
    }

    async showBannerNewsComponent() {
        await expect(this.bannerNewsComponent).toBeVisible();
    }

    async showBannerNewsRubricText() {
        const getBannerNewsRubricText = await this.bannerNewsRubricText.textContent();
        const expectedBannerNewsRubricText = 'NEW FEATURES';
        expect(getBannerNewsRubricText).toContain(expectedBannerNewsRubricText);
    }

    async showBannerNewsHeadingText() {
        const getBannerNewsHeadingText = await this.bannerNewsHeadingText.textContent();
        const expectedBannerNewsHeadigText = 'Some awesone features';
        expect(getBannerNewsHeadingText).toContain(expectedBannerNewsHeadigText);
    }

    async showNewsSection() {
        const getNewBlocks = await this.newsBlocks.all();

        const expectedBlocks = [
            {
                image: 'images/baner-icon1.svg',
                title: 'Some awesone features',
                description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
            },
            {
                image: 'images/baner-icon2.svg',
                title: 'Some awesone features',
                description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
            },
            {
                image: 'images/baner-icon3.svg',
                title: 'Some awesone features',
                description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
            }
        ];

        for (let i = 0; i < getNewBlocks.length; i++) {
            const block = getNewBlocks[i];
            const expectedBlock = expectedBlocks[i];
            
            const imageElement = block.locator('img')
            const titleElement = block.locator('.content__subheading')
            const textElement = block.locator('.content__text')
            
            const imageSrc = await imageElement.getAttribute('src');
            const titleText = await titleElement.textContent();
            const textContent = await textElement.textContent();
            
            expect(imageSrc).toContain(expectedBlock.image);
            expect(titleText).toContain(expectedBlock.title);
            expect(textContent).toContain(expectedBlock.description);
        }
    }



    
}