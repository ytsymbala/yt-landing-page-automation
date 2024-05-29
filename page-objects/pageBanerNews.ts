import { Page, Locator, expect } from '@playwright/test';
import { expectedBannerNewsHeadigText, 
    expectedBannerNewsRubricText, 
    expectedBlocks 
} from '../test-data';
import { HelperBase } from './helperBase';

export class PageBannerNews extends HelperBase {
    readonly bannerNewsComponent: Locator;
    readonly bannerNewsRubricText: Locator;
    readonly bannerNewsHeadingText: Locator;
    readonly newsBlocks: Locator;

    constructor(page: Page) {
        super(page);
        this.bannerNewsComponent = page.locator('#news');
        this.bannerNewsRubricText = page.getByRole('heading', { name: 'NEW FEATURES' });
        this.bannerNewsHeadingText = page.locator('h2').filter({ hasText: 'Some awesone features' });
        this.newsBlocks = page.locator('.ban_news .col-lg-4');
    }

    async showBannerNewsComponent() {
        await expect(this.bannerNewsComponent).toBeVisible();
    }

    async showBannerNewsRubricText() {
        await expect(this.bannerNewsRubricText).toBeVisible();
        const getBannerNewsRubricText = await this.bannerNewsRubricText.textContent();
        expect(getBannerNewsRubricText).toContain(expectedBannerNewsRubricText);
    }

    async showBannerNewsHeadingText() {
        await expect(this.bannerNewsHeadingText).toBeVisible();
        const getBannerNewsHeadingText = await this.bannerNewsHeadingText.textContent();
        expect(getBannerNewsHeadingText).toContain(expectedBannerNewsHeadigText);
    }

    async showNewsSection() {
        const getNewsBlocks = await this.newsBlocks.all();

        for (let i = 0; i < getNewsBlocks.length; i++) {
            const block = getNewsBlocks[i];
            const expectedBlock = expectedBlocks[i];
            
            const imageElement = block.locator('img');
            const titleElement = block.locator('.content__subheading');
            const textElement = block.locator('.content__text');

            for (const element of [imageElement, titleElement, textElement]) {
                await expect(element).toBeVisible();
            }
            
            const imageSrc = await imageElement.getAttribute('src');
            const titleText = await titleElement.textContent();
            const textContent = await textElement.textContent();
            
            expect(imageSrc).toContain(expectedBlock.image);
            expect(titleText).toContain(expectedBlock.title);
            expect(textContent).toContain(expectedBlock.description);
        }
    } 
}

