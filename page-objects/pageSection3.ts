import { Page, Locator, expect } from '@playwright/test';
import { expectedSection2ContentLink, expectedSection2ContentText, expectedSection2HeadingText, expectedSection2ImageSrc, expectedSection2RubricText } from '../test-data';

export class PageSection3 {
    readonly page: Page;
    readonly section3Component: Locator;
    readonly section3RubricText: Locator;
    readonly section3HeadingText: Locator;
    readonly section3ContentText: Locator;
    readonly section3ImageSrc: Locator;

    constructor(page: Page) {
        this.page = page;
        this.section3Component = page.locator('.section3');
        this.section3RubricText = page.locator('.section3 .content__rubric');
        this.section3HeadingText = page.locator('.section3 .content__heading');
        this.section3ContentText = page.locator('.section3 .content__text')
        this.section3ImageSrc = page.getByRole('img', { name: 'Safari Browser' })
    }

    async showSection3Component() {
        await expect(this.section3Component).toBeVisible();
    }

    async showSection3RubricText() {
        await expect(this.section3RubricText).toBeVisible();
        const getSection3RubricText = await this.section3RubricText.textContent();
        const expectedSection3RubricText = 'NEW FEATURES';
        expect(getSection3RubricText).toContain(expectedSection3RubricText);
    }

    async showSection3HeadingText() {
        await expect(this.section3HeadingText).toBeVisible();
        const getSection3HeadingText = await this.section3HeadingText.textContent();
        const expectedSection3HeadingText = 'Some awesone features';
        expect(getSection3HeadingText).toContain(expectedSection3HeadingText);
    }

    async showSection3ContentText() {
        await expect(this.section3ContentText).toBeVisible();
        const getSection3ContentText = await this.section3ContentText.textContent();
        const expectedSection3ContentText = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper.';
        expect(getSection3ContentText).toContain(expectedSection3ContentText);
    }

    async showSection3Image() {
        await expect(this.section3ImageSrc).toBeVisible();
        const getSection3ImageSrc = await this.section3ImageSrc.getAttribute('src');
        const expectedSection3ImageSrc = 'images/safari.svg';
        expect(getSection3ImageSrc).toContain(expectedSection3ImageSrc);
    }
}