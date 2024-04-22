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

// import { expect, test } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//   });

// test('Check video component presence', async({ page }) => {
//     const videoComponent = page.locator('#bg__video')
//     await expect(videoComponent).toBeVisible()
// })

// test('Check that valid video used', async({ page }) =>  {
//     const videoComponent = page.locator('#bg__video')
//     const videoSrc = await videoComponent.getAttribute('src')
//     const expectedVideoSrc = 'video/315536202_1280.mp4';
//     expect(videoSrc).toContain(expectedVideoSrc);

// })

// test('Check video preload attribute', async ({ page }) => {
//     const videoComponent = page.locator('#bg__video');
//     const preloadAttribute = await videoComponent.getAttribute('preload');
//     await expect(preloadAttribute).toBe('auto');
// });

// test('Check that video is muted by default', async ({ page }) => {
//     const videoComponent = page.locator('#bg__video');
//     const hasMuteAttribute = await videoComponent.getAttribute('muted')
//     await expect(hasMuteAttribute).toBe('true')
// })

//  test('Check mute and unmute buttons', async ({ page }) => {
//     const videoSoundButton = await page.locator('#video__buts').getByRole('button')
//     await videoSoundButton.first().click();

//     // Перевіряємо, чи кнопка "unmute" прихована після кліку
//     const unmuteButtonStyle = await page.locator('.hero__but__unmute').getAttribute('style');
//     expect(unmuteButtonStyle).toContain('display: inline-block;');

//     // Перевіряємо, чи кнопка "mute" прихована після кліку
//     await videoSoundButton.first().click();
//     const muteButtonStyle = await page.locator('.hero__but__mute').getAttribute('style');
//     expect(muteButtonStyle).toContain('display: inline-block;');
// });

// test('Check fullscreen resize button', async ({ page }) => {
//     const fullscreenButton = await page.locator('#video__buts').getByRole('button').nth(1)
//     await fullscreenButton.first().click();
    
//     // Очікуємо, що відео відкрилося на повний екран
//     const isVideoFullscreen = await page.evaluate(() => {
//         return document.fullscreenElement !== null;
//     });

//     // Перевіряємо, що відео відкрилося на повний екран
//     expect(isVideoFullscreen).toBeTruthy();
// });

// test('Check the hero banner title', async ({ page }) => {
//     const bannerText = await page.locator('.baner__text p').allTextContents()
//     const expectedText = ['There is no other', 'platforms for you as like']
//     expect(bannerText).toEqual(expectedText)
// });

// test('Check the hero info text', async ({ page }) => {
//     const heroInfo = await page.locator('.hero__info').textContent()
//     const expectedHeroInfo = '* No neds to add cards details *'
//     expect(heroInfo).toContain(expectedHeroInfo)
// })

// test('Check that button "Try now" is displayed on the hero banner', async ({ page }) => {
//     const buttonTryNow = await page.locator('#hero__video').getByRole('button', { name: 'TRY NOW' });
//     await expect(buttonTryNow).toBeVisible();
// })

