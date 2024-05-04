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
// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const section1 = document.querySelector('.section1');
//         if (section1) {
//             section1.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check section1 component presence', async({ page }) => {
//     const section1Component = page.locator('.section1')
//     await expect(section1Component).toBeVisible()
// })

// test('Check section1 content rubric text', async({ page }) => {
//     const section1Rubric = await page.getByRole('heading', { name: 'NEW DESIGN' }).textContent()
//     const expectedRubricText = 'NEW DESIGN'
//     expect(section1Rubric).toContain(expectedRubricText)
// })

// test('Check section1 header text', async({ page }) => {
//     const section1Heading = await page.getByRole('heading', { name: 'There is no other platforms for you as like ....' }).textContent()
//     const expectedHeadingText = 'There is no other platforms for you as like'
//     expect(section1Heading).toContain(expectedHeadingText)
// })

// test('Check section1 content link', async({ page }) => {
//     const section1ContentLink = await page.locator('.content__link').first().textContent()
//     const expectedContentLink = '....'
//     expect(section1ContentLink).toContain(expectedContentLink)
// })

// test('Check section1 first description', async({ page }) => {
//     const section1FirstDescriptions = await page.locator('.section1 .container p').first().textContent();
//     const expectedFirstDescription = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.'
//     expect(section1FirstDescriptions).toContain(expectedFirstDescription);
// });

// test('Check section1 second description', async({ page }) => {
//     const section1SecondDescriptions = await page.locator('.section1 .container p').nth(1).textContent();
//     const expectedSecondDescription = 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
//     expect(section1SecondDescriptions).toContain(expectedSecondDescription);
// });

// import { faker } from '@faker-js/faker';
// import { expect, test } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.try');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check Try Trial component presence', async({ page }) => {
//     const tryTrialComponent = page.locator('#trial');
//     await expect(tryTrialComponent).toBeVisible();
// });

// test('Check Try Trial rubric text', async({ page }) => {
//     const tryTrialRubric = await page.locator('#trial').getByText('NEW FEATURES').textContent();
//     const expectedTryTrialRubricText = 'NEW FEATURES';
//     expect(tryTrialRubric).toContain(expectedTryTrialRubricText);
// })

// test('Check Try Trial Heading text', async({ page }) => {
//     const tryTrialHeading = await page.locator('.try__heading').textContent();
//     const expectedTryTrialHeadingText = 'Over 100000 designers are using';
//     expect(tryTrialHeading).toContain(expectedTryTrialHeadingText);
// });

// test('Check Try Trial text helper for button', async({ page }) => {
//     const tryTextButtonInfo = await page.locator('.try__text').first().textContent()
//     const expectedTryTextButtonInfo = '30 days free trial for all.';
//     expect(tryTextButtonInfo).toContain(expectedTryTextButtonInfo);
// })

// test('Check Try Trial text for Terms & Services.', async({ page }) => {
//     const tryTextForAgreements = await page.locator('.try__text').nth(1).textContent()
//     const expectedTryTextForAgreements = 'By Signing up you agree to our ';
//     expect(tryTextForAgreements).toContain(expectedTryTextForAgreements);
// })

// test('Check Trial Form elements', async({ page }) => {
//     const formElements = await page.locator('.contact__ul .try__input').all();
//     const formSubmitButton = page.locator('.try__button');
//     expect(formElements).toHaveLength(3);
//     expect(formSubmitButton).not.toBeNull();
// });

// test('Check mandatory fields for Try Trial form', async({ page }) => {
//     const formInputElements = await page.locator('.contact__ul .try__input').all();
    
//     for (const inputElement of formInputElements) {
//         const isRequired = await inputElement.getAttribute('required') !== null
//         expect(isRequired).toBe(true);
//     }
// })

// test('Check Terms & Services link and title', async({ page }) => {
//     const termsAndServiceLink = await page.getByRole('link', { name: 'Terms & Services.' }).textContent();
//     await page.getByRole('link', { name: 'Terms & Services.' }).click()
//     expect(page.url()).toMatch(/#/);
//     const expectedTermsAndServiceLinkTitle = 'Terms & Services.'
//     expect(termsAndServiceLink).toContain(expectedTermsAndServiceLinkTitle);
// })

// test('Check try Now Form', async({ page }) => {
//     const randomFullName = faker.person.fullName()
//     const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`
//     const randomPassword = faker.internet.password()

//     const tryTrialComponent = page.locator('#trial');
//     await tryTrialComponent.getByPlaceholder('FULL NAME').fill(randomFullName);
//     await tryTrialComponent.getByPlaceholder('YOUR EMAIL').fill(randomEmail);
//     await tryTrialComponent.getByPlaceholder('PASSWORD').fill(randomPassword);
//     await tryTrialComponent.getByRole('button', { name: 'TRY NOW' }).click()
// });








