import { Page, Locator, expect } from '@playwright/test';
import { expectedSitreLogoSrc, expectedUserLogoSrc, headerlinksToTest, hoveredSrc, userItemsLinksToTest } from '../test-data';

export class PageSection1 {
    readonly page: Page;
    readonly sectionComponent: Locator;
    readonly section1Rubric: Locator;
    readonly section1Heading: Locator;
    readonly section1ContentLink: Locator;
    readonly section1FirstDescription: Locator;
    readonly section1SecondDescription: Locator;  


    constructor(page: Page) {
        this.page = page;
        this.sectionComponent = page.locator('.section1');
        this.section1Rubric = page.getByRole('heading', { name: 'NEW DESIGN' });
        this.section1Heading = page.getByRole('heading', { name: 'There is no other platforms for you as like ....' });
        this.section1ContentLink = page.locator('.content__link').first();
        this.section1FirstDescription = page.locator('.section1 .container p').first();
        this.section1SecondDescription = page.locator('.section1 .container p').nth(1);

    }

    async showSection1Component() {
        await expect(this.section1ContentLink).toBeVisible();
    }

    async showSection1RubricText() {
        const getsection1RubricText = await this.section1Rubric.textContent();
        const expectedRubricText = 'NEW DESIGN';
        expect(getsection1RubricText).toContain(expectedRubricText);
    }

    async showSection1HeaderText() {
        const getSection1Heading = await this.section1Heading.textContent();
        const expectedHeadingText = 'There is no other platforms for you as like';
        expect(getSection1Heading).toContain(expectedHeadingText);
    }

    async showSection1ContentLink() {
        const getSection1ContentLink = await this.section1ContentLink.textContent();
        const expectedContentLink = '....';
        expect(getSection1ContentLink).toContain(expectedContentLink);
    }

    async showSection1FirstDescription() {
        const getSection1FirstDescription = await this.section1FirstDescription.textContent();
        const expectedFirstDescription = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.'
        expect(getSection1FirstDescription).toContain(expectedFirstDescription);
    }

    async showSection1SecondDescription() {
        const getSection1SecondDescription = await this.section1SecondDescription.textContent();
        const expectedSecondDescription = 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
        expect(getSection1SecondDescription).toContain(expectedSecondDescription);
    }
}