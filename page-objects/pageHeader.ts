import { Page, Locator, expect } from '@playwright/test';

export class PageHeader {
    readonly page: Page;
    readonly headerComponent: Locator;
    readonly siteLogo: Locator;
    readonly userLogoImg: Locator;
    readonly userIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerComponent = page.locator('header');
        this.siteLogo = page.locator('img[alt="StartEx"]').first();
        this.userLogoImg = page.getByRole('img', { name: 'UserLogo' });
        this.userIcon = page.locator('.user__icon')

    }

    async showHeader() {
        await expect(this.headerComponent).toBeVisible();
    }

    async siteLogoIsDisplayed() {
        await expect(this.siteLogo).toBeVisible();
        const siteLogoSrc = await this.siteLogo.getAttribute('src');
        const expectedSitreLogoSrc = 'images/logo.svg'
        expect(siteLogoSrc).toContain(expectedSitreLogoSrc);
    }

    async headerTabsDisplayedAndLinksWorks() {
        const linksToTest = [
            { text: 'Home', url: '#home' },
            { text: 'Trial', url: '#trial' },
            { text: 'News', url: '#news' },
            { text: 'About us', url: '#about' },
            { text: 'Test', url: '/TEST/test.html' },
            { text: 'Contacts', url: '#contacts' },

        ];

        for (const link of linksToTest) {
            await this.checkHeaderLinksAndTitles(link.text, link.url);
        }
    }

    private async checkHeaderLinksAndTitles(linkText: string, expectedUrl: string) {
        await this.page.evaluate(() => window.scrollTo(0, 0));
        const header = await this.headerComponent.first();
        if (!header) {
            await this.page.evaluate(() => window.scrollTo(0, 0));
        }
        const link = await this.page.locator(`a:has-text("${linkText}")`).first();
        if(!link) {
            console.error(`Link with text "${linkText}" not found!`)
            return;
        }
        await expect(link).toBeVisible();
        await link.click();
        if (linkText === 'Test' && expectedUrl === '/TEST/test.html'){
            await this.page.goBack();
        } else {
            await expect(this.page).toHaveURL(expectedUrl);
        }
        await this.page.evaluate(() => window.scrollTo(0, 0));
    }

    async showDefaultUserLogoWithCorrectImage(){
        await expect(this.userLogoImg).toBeVisible();
        const userLogoSrc = await this.userLogoImg.getAttribute('src');
        const expectedUserLogoSrc = 'images/user2.svg'
        expect(userLogoSrc).toContain(expectedUserLogoSrc);

    }

    async showUserLogoOnHover(){
        await this.userIcon.hover();
        const hoveredUserLogo = await this.userLogoImg.getAttribute('src');
        const hoveredSrc = 'images/user1.svg'
        expect(hoveredUserLogo).toContain(hoveredSrc);
    }

    async checkUserMenuItems(){
        await this.userIcon.hover();
        const userMenuItems = await this.page.$$('.user__menu .user__item a');
        
        for (const menuItem of userMenuItems) {
            expect(await menuItem.isVisible()).toBeTruthy();
        }
        for (const menuItem of userMenuItems) {
            await menuItem.click();
            const expectedUrl = await this.getExpectedUrlForMenuItem(menuItem);
            await expect(this.page).toHaveURL(expectedUrl);
        }
        expect(userMenuItems.length).toBe(4)
    }

    async getExpectedUrlForMenuItem(menuItem: any) {
        return await menuItem.getAttribute('href');
    }
}
