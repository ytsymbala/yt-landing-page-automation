//Old Methods:


    // async headerTabsDisplayedAndLinksWorks() {
    //     const linksToTest = [
    //         { text: 'Home', url: '#home' },
    //         { text: 'Trial', url: '#trial' },
    //         { text: 'News', url: '#news' },
    //         { text: 'About us', url: '#about' },
    //         { text: 'Test', url: '/TEST/test.html' },
    //         { text: 'Contacts', url: '#contacts' },

    //     ];

    //     for (const link of linksToTest) {
    //         await this.checkHeaderLinksAndTitles(link.text, link.url);
    //     }
    // }

    // private async checkHeaderLinksAndTitles(linkText: string, expectedUrl: string) {
    //     //await this.page.evaluate(() => window.scrollTo(0, 0));
    //     const header = await this.headerComponent.first();
    //     if (!header) {
    //         await this.page.evaluate(() => window.scrollTo(0, 0));
    //     }
    //     const link = await this.page.locator(`a:has-text("${linkText}")`).first();
    //     if(!link) {
    //         console.error(`Link with text "${linkText}" not found!`)
    //         return;
    //     }
    //     await expect(link).toBeVisible();
    //     await link.click();
    //     if (linkText === 'Test' && expectedUrl === '/TEST/test.html'){
    //         await this.page.goBack();
    //     } else {
    //         await expect(this.page).toHaveURL(expectedUrl);
    //     }
    //     await this.page.evaluate(() => window.scrollTo(0, 0));
    // }

    // async checkUserMenuItems(){
//     await this.userIcon.hover();
//     const userMenuItems = await this.page.$$('.user__menu .user__item a');
    
//     for (const menuItem of userMenuItems) {
//         expect(await menuItem.isVisible()).toBeTruthy();
//     }
//     for (const menuItem of userMenuItems) {
//         await menuItem.click();
//         const expectedUrl = await this.getExpectedUrlForMenuItem(menuItem);
//         await expect(this.page).toHaveURL(expectedUrl);
//     }
//     expect(userMenuItems.length).toBe(4)
// }

//     async getExpectedUrlForMenuItem(menuItem: any) {
//         return await menuItem.getAttribute('href');
//     }
// async userInfoItemsDisplayedAndLinksWorks() {
//     const userItemsLinksToTest = [
//         { text: 'My Account', url: '#'},
//         { text: 'Settings', url: '#'},
//         { text: 'About', url: '#'},
//         { text: 'Support', url: '#'},
//     ];

//     for (const menuItem of userItemsLinksToTest) {
//         await this.checkUserInfoLinksAndTitles(menuItem.text, menuItem.url);
//     }
// }

// private async checkUserInfoLinksAndTitles(linkText: string, expectedUrl: string) {
//     await this.userIcon.hover();
//     const menuItem = await this.page.locator(`.user__menu .user__item a:has-text("${linkText}")`);
    
//     if (!menuItem) {
//         console.error(`User menu item with text "${linkText}" not found!`);
//         return;
//     }

//     await expect(menuItem).toBeVisible();
//     await menuItem.click();
//     await expect(this.page).toHaveURL(expectedUrl);
// }

// async checkLinksAndUrls(linksToTest: { title: string; url: string }[], locator: string) {
//     for (const link of linksToTest) {
//         await this.checkLinkAndUrl(link.title, link.url, locator);
//     }
// }

// private async checkLinkAndUrl(linkText: string, expectedUrl: string, locator: string) {
//     await this.page.evaluate(() => window.scrollTo(0, 0));
//     const element = await this.page.locator(`${locator}:has-text("${linkText}")`).first();
//     if (!element) {
//         console.error(`Element with text "${linkText}" not found!`);
//         return;
//     }
//     await expect(element).toBeVisible();
//     await element.click();
//     if (linkText === 'Test' && expectedUrl === '/TEST/test.html') {
//         await this.page.goBack();
//     } else {
//         await expect(this.page).toHaveURL(expectedUrl);
//     }
//     await this.page.evaluate(() => window.scrollTo(0, 0));
// }