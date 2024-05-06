import { Page, Locator, expect } from '@playwright/test';
import { expectedBannerNewsHeadigText, expectedBannerNewsRubricText, expectedBlocks } from '../test-data';

export class PageSection2 {
    readonly page: Page;
    readonly section2Component: Locator;
    readonly section2RubricText: Locator;
    readonly section2HeadingText: Locator;
    readonly section2ContentLink: Locator;
    readonly section2ContentText: Locator;
    readonly section2ImageSrc: Locator;

    constructor(page: Page) {
        this.page = page;
        this.section2Component = page.locator('.section2');
        this.section2RubricText = page.locator('.section2 .content__rubric');
        this.section2HeadingText = page.locator('.section2 .content__heading');
        this.section2ContentLink = page.locator('.section2 .content__link');
        this.section2ContentText = page.locator('.section2 .content__text');
        this.section2ImageSrc = page.getByRole('img', { name: 'Macbook' });
    }

    async showSection2Component() {
        await expect(this.section2Component).toBeVisible();
    }

    async showSection2RubricText() {
        await expect(this.section2RubricText).toBeVisible();
        const getSection2RubricText = await this.section2RubricText.textContent();
        const expectedSection2RubricText = 'NEW DESIGN';
        expect(getSection2RubricText).toContain(expectedSection2RubricText);
    }

    async showSection2HeadingText() {
        await expect(this.section2HeadingText).toBeVisible();
        const getSection2HeadingText = await this.section2HeadingText.textContent();
        const expectedSection2HeadingText = 'Resposive design, just need your tap';
        expect(getSection2HeadingText).toContain(expectedSection2HeadingText);
    }

    async showSection2ContentLink() {
        await expect(this.section2ContentLink).toBeVisible();
        const getSection2ContentLink = await this.section2ContentLink.textContent();
        const expectedSection2ContentLink = '....';
        expect(getSection2ContentLink).toContain(expectedSection2ContentLink);
    }

    async showSection2ContentText() {
        await expect(this.section2ContentText).toBeVisible();
        const getSection2ContentText = await this.section2ContentText.textContent();
        const expectedSection2ContentText = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper.';
        expect(getSection2ContentText).toContain(expectedSection2ContentText);
    }

    async showSection2Image() {
        await expect(this.section2ImageSrc).toBeVisible();
        const getSection2ImageSrc = await this.section2ImageSrc.getAttribute('src');
        const expectedSection2ImageSrc = 'images/macbook.png';
        expect(getSection2ImageSrc).toContain(expectedSection2ImageSrc);
    }
}