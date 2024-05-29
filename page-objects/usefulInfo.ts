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

// import { expect, test } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.baner__news');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check Baner News component presence', async({ page }) => {
//     const banerNewsComponent = page.locator('#news');
//     await expect(banerNewsComponent).toBeVisible();
// });

// test('Check baner news rubric text', async({ page }) => {
//     const banerNewsRubricText = await page.getByRole('heading', { name: 'NEW FEATURES' }).textContent();
//     const expectedBanerNewsRubricText = 'NEW FEATURES';
//     expect(banerNewsRubricText).toContain(expectedBanerNewsRubricText);
// });

// test('Check baner news heading text', async({ page }) => {
//     const banerNewsHeadingText = await page.locator('h2').filter({ hasText: 'Some awesone features' }).textContent();
//     const expectedBanerNewsHeadingText = 'Some awesone features';
//     expect(banerNewsHeadingText).toContain(expectedBanerNewsHeadingText);
// });

// test('Check news section content', async ({ page }) => {
//     const newsBlocks = await page.locator('.ban_news .col-lg-4').all();
    
//     const expectedBlocks = [
//         {
//             image: 'images/baner-icon1.svg',
//             title: 'Some awesone features',
//             description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
//         },
//         {
//             image: 'images/baner-icon2.svg',
//             title: 'Some awesone features',
//             description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
//         },
//         {
//             image: 'images/baner-icon3.svg',
//             title: 'Some awesone features',
//             description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
//         }
//     ];
    
//     for (let i = 0; i < newsBlocks.length; i++) {
//         const block = newsBlocks[i];
//         const expectedBlock = expectedBlocks[i];
        
//         const imageElement = block.locator('img')
//         const titleElement = block.locator('.content__subheading')
//         const textElement = block.locator('.content__text')
        
//         const imageSrc = await imageElement.getAttribute('src');
//         const titleText = await titleElement.textContent();
//         const textContent = await textElement.textContent();
        
//         expect(imageSrc).toContain(expectedBlock.image);
//         expect(titleText).toContain(expectedBlock.title);
//         expect(textContent).toContain(expectedBlock.description);
//     }
// });

// import { expect, test } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.section2');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check Section2 component presence', async({ page }) => {
//     const section2Component = page.locator('.section2');
//     await expect(section2Component).toBeVisible();
// });

// test('Check section 2 rubric text', async({ page }) => {
//     const section2RubricText = await page.locator('.section2 .content__rubric').textContent();
//     const expectedSection2RubricText = 'NEW DESIGN';
//     expect(section2RubricText).toContain(expectedSection2RubricText);
// });

// test('Check section 2 heading text', async({ page }) => {
//     const section2HeadingText = await page.locator('.section2 .content__heading').textContent();
//     const expectedSection2HeadingText = 'Resposive design, just need your tap';
//     expect(section2HeadingText).toContain(expectedSection2HeadingText);
// })

// test('Check section 2 content link', async({ page }) => {
//     const section2ContentLink = await page.locator('.section2 .content__link').textContent();
//     const expectedSection2ContentLink = '....';
//     expect(section2ContentLink).toContain(expectedSection2ContentLink);
// })

// test('Check section 2 content text', async({ page }) => {
//     const section2ContentText = await page.locator('.section2 .content__text').textContent();
//     const expectedSection2ContentText = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper.';
//     expect(section2ContentText).toContain(expectedSection2ContentText);
// })

// test('Check section 2 image', async({ page }) => {
//     const section2ImageSrc = await page.getByRole('img', { name: 'Macbook' }).getAttribute('src');
//     const expectedSection2ImageSrc = 'images/macbook.png';
//     expect(section2ImageSrc).toContain(expectedSection2ImageSrc);
// })

//Function to Optimise
// import { Locator, expect } from '@playwright/test';

// export async function checkElementVisibilityAndContent(element: Locator, expectedText: string, attribute?: string) {
//     await expect(element).toBeVisible();
//     const text = attribute ? await element.getAttribute(attribute) : await element.textContent();
//     expect(text).toContain(expectedText);
// }

//EXAMPLE:
// import { Page, Locator, expect } from '@playwright/test';
// import { expectedSection2ContentLink, expectedSection2ContentText, expectedSection2HeadingText, expectedSection2ImageSrc, expectedSection2RubricText } from '../test-data';

// export class PageSection2 {
//     readonly page: Page;
//     readonly section2Component: Locator;
//     readonly section2RubricText: Locator;
//     readonly section2HeadingText: Locator;
//     readonly section2ContentLink: Locator;
//     readonly section2ContentText: Locator;
//     readonly section2ImageSrc: Locator;

//     constructor(page: Page) {
//         this.page = page;
//         // Локатори елементів на сторінці
//         this.section2Component = page.locator('.section2');
//         this.section2RubricText = page.locator('.section2 .content__rubric');
//         this.section2HeadingText = page.locator('.section2 .content__heading');
//         this.section2ContentLink = page.locator('.section2 .content__link');
//         this.section2ContentText = page.locator('.section2 .content__text');
//         this.section2ImageSrc = page.getByRole('img', { name: 'Macbook' });
//     }

//     // Методи для перевірки видимості та змісту елементів
//     async showSection2Component() {
//         await expect(this.section2Component).toBeVisible();
//     }

//     async showSection2RubricText() {
//         await this.checkElementVisibilityAndContent(this.section2RubricText, expectedSection2RubricText);
//     }

//     async showSection2HeadingText() {
//         await this.checkElementVisibilityAndContent(this.section2HeadingText, expectedSection2HeadingText);
//     }

//     async showSection2ContentLink() {
//         await this.checkElementVisibilityAndContent(this.section2ContentLink, expectedSection2ContentLink);
//     }

//     async showSection2ContentText() {
//         await this.checkElementVisibilityAndContent(this.section2ContentText, expectedSection2ContentText);
//     }

//     async showSection2Image() {
//         await this.checkElementVisibilityAndContent(this.section2ImageSrc, expectedSection2ImageSrc, 'src');
//     }

//     // Внутрішня функція для перевірки видимості та змісту елемента
//     private async checkElementVisibilityAndContent(element: Locator, expectedText: string, attribute?: string) {
//         await expect(element).toBeVisible();
//         const text = attribute ? await element.getAttribute(attribute) : await element.textContent();
//         expect(text).toContain(expectedText);
//     }
// }

// import { expect, test } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.section3');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check Section2 component presence', async({ page }) => {
//     const section3Component = page.locator('.section3');
//     await expect(section3Component).toBeVisible();
// });

// test('Check section 3 rubric text', async({ page }) => {
//     const section3RubricText = await page.locator('.section3 .content__rubric').textContent();
//     const expectedSection3RubricText = 'NEW FEATURES';
//     expect(section3RubricText).toContain(expectedSection3RubricText);
// });

// test('Check section 3 heading text', async({ page }) => {
//     const section3HeadingText = await page.locator('.section3 .content__heading').textContent();
//     const expectedSection3HeadingText = 'Some awesone features';
//     expect(section3HeadingText).toContain(expectedSection3HeadingText);
// })

// test('Check section 3 content text', async({ page }) => {
//     const section3ContentText = await page.locator('.section3 .content__text').textContent();
//     const expectedSection3ContentText = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper.';
//     expect(section3ContentText).toContain(expectedSection3ContentText);
// })

// test('Check section 3 image', async({ page }) => {
//     const section3ImageSrc = await page.getByRole('img', { name: 'Safari Browser' }).getAttribute('src');
//     const expectedSection3ImageSrc = 'images/safari.svg';
//     expect(section3ImageSrc).toContain(expectedSection3ImageSrc);
// })

// import { expect, test } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.clients');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check About Clients component presence', async({ page }) => {
//     const aboutClientsComponent = page.locator('.clients');
//     await expect(aboutClientsComponent).toBeVisible();
// });

// test('Check About Clients section content', async ({ page }) => {
//     const aboutClientsBlocks = await page.locator('.clients .col-lg-4').all();
    
//     const expectedBlocks = [
//         {
//             image: 'images/user_1.svg',
//             name: 'Jonathon Doe',
//             title: 'Co Founder',
//             description: '“Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id gravida at eget metus. Etiasem malesuada magn”'
//         },
//         {
//             image: 'images/user_2.svg',
//             name: 'Jonathon Doe',
//             title: 'Co Founder',
//             description: '“Pellentesque ornare sem lacinia quam. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn”'
//         },
//         {
//             image: 'images/user_3.svg',
//             name: 'Jonathon Doe',
//             title: 'Co Founder',
//             description: '“Aenean eu leo quam. Pellentesque ornare sem lacinia qua emere wancerid elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn”'
//         }
//     ];
    
//     for (let i = 0; i < aboutClientsBlocks.length; i++) {
//         const block = aboutClientsBlocks[i];
//         const expectedBlock = expectedBlocks[i];
        
//         const imageElement = block.locator('img');
//         const nameElement = block.locator('.client__name');
//         const titleElement = block.locator('.content__rubric');
//         const textElement = block.locator('.content__text_w');
        
//         const imageSrc = await imageElement.getAttribute('src');
//         const nameText = await nameElement.textContent();
//         const titleText = await titleElement.textContent();
//         const textContent = await textElement.textContent();
        
//         expect(imageSrc).toContain(expectedBlock.image);
//         expect(nameText).toContain(expectedBlock.name);
//         expect(titleText).toContain(expectedBlock.title);
//         expect(textContent).toContain(expectedBlock.description);
//     }
// });

// test('Check About Clients section logos', async ({ page }) => {
//     const clientsIconSection = await page.locator('.clients__icon');
//     const logos = await clientsIconSection.locator('img').all();

//     const expectedLogos = [
//         'images/partner-logo-1.svg',
//         'images/partner-logo-2.svg',
//         'images/partner-logo-3.svg',
//         'images/partner-logo-4.svg',
//         'images/partner-logo-5.svg',
//     ];

//     for (let i = 0; i < logos.length; i++) {
//         const logo = logos[i];
//         const expectedLogoSrc = expectedLogos[i];

//         const logoSrc = await logo.getAttribute('src');

//         expect(logoSrc).toContain(expectedLogoSrc);
//     }
// });

//Updated checkLinkAndUrl function
// export async function checkLinkAndUrl(page: Page, linkText: string, expectedUrl: string, locator: string) {
//     //await page.evaluate(() => window.scrollTo(0, 0));
//     //const element = await page.locator(`${locator}:has-text("${linkText}")`).first();
//     let element;
//     if (locator === '.f__ul .f__li a') {
//         element = page.locator(locator).first();
//     } else {
//         element = page.locator(`${locator}:has-text("${linkText}")`).first();
//     }
//     // if (!element) {
//     //     console.error(`Element with text "${linkText}" not found!`);
//     //     return;
//     // }
//     await expect(element).toBeVisible();
//     await element.click();
//     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//     if (linkText === 'Test' && expectedUrl === '/TEST/test.html') {
//         await page.goBack();
//     } else {
//         await expect(page).toHaveURL(expectedUrl);
//     }
//     await page.evaluate(() => window.scrollTo(0, 0));
// }

// import { expect, test } from '@playwright/test';
// import { checkLinkAndUrl } from '../page-objects/pageUtils';
// import { faker } from '@faker-js/faker';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('footer');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check Footer component presence', async ({ page }) => {
//     const footerComponent = page.locator('footer#contacts');
//     await expect(footerComponent).toBeVisible();
// });

// test('Check site logo in the footer', async ({ page }) => {
//     const footerSiteLogo = await page.locator('#contacts').getByRole('img', { name: 'StartEx' }).getAttribute('src');
//     const expectedFoterImageSrc = 'images/logo.svg';
//     expect(footerSiteLogo).toContain(expectedFoterImageSrc);
// });

// test('Check all info text in the footer', async ({ page }) => {
//     const paragraphElements = await page.locator('.f__info').all();

//     const expectedTexts = [
//         'Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.',
//         'USA &  CAN: 1-888-123-4567',
//         'Address: 34 Brokel Rd. NY'
//     ];

//     for (let i = 0; i < paragraphElements.length; i++) {
//         const paragraph = paragraphElements[i];
//         const expectedText = await paragraph.textContent();
//         expect(expectedText).toContain(expectedTexts[i]);
//     }
// });

// test('Click and Check all footer links and titles', async ({ page }) => {
//     const footerlinksToTest = [
//         { title: 'Support', url: '#' },
//         { title: 'Help Center', url: '#' },
//         { title: 'Get Started', url: '#' },
//         { title: 'Contact Us', url: '#' },
//         { title: 'About US', url: '#' },
//         { title: 'About Us', url: '#' },
//         { title: 'Terms of Use', url: '#' },
//         { title: 'Privacy Policy', url: '#' },
//         { title: 'Get Newsletter', url: '#' },
        
//     ];
    
//     for (const link of footerlinksToTest) {
//         await checkLinkAndUrl(page, link.title, link.url, '.f__ul .f__li a');
//     }
// });

// test('Check presence of subscription form', async ({ page }) => {
//     const inputElement = page.locator('.subscribe__input')
//     const buttonElement = page.locator('.subscribe__button');

//     await expect(inputElement).toBeVisible()
//     await expect(buttonElement).toBeVisible()

//     const inputType = await inputElement.getAttribute('type');
//     const inputPlaceholder = await inputElement.getAttribute('placeholder');

//     expect(inputType).toEqual('email');
//     expect(inputPlaceholder).toEqual('EMAIL');
// });

// test('Fill and Submit subscribe form', async ({ page }) => {
//     const randomEmail = faker.internet.exampleEmail()

//     const submitSubscribeForm = page.locator('.f_subscribe');
//     await submitSubscribeForm.getByPlaceholder('EMAIL').fill(randomEmail);
//     await submitSubscribeForm.getByRole('button', { name: 'Send' }).click()
// });

// test('Click on each social link and verify page opens', async ({ page }) => {
//     const socialLinks = [
//         'https://dribbble.com',
//         'https://fb.com',
//         'https://plus.google.com',
//         'https://twitter.com',
//         'https://github.com/nazar237'
//     ];

//     for (const link of socialLinks) {
//         const socialLinkElement = await page.locator(`.social__ul a[href="${link}"]`);
//         await socialLinkElement.click();
//         //await expect(page).toHaveURL(link);
//         await page.goBack();
//     }
// });
// Example of the test case based on the page object !!!!!!!

// import { test } from '@playwright/test';
// import { PageSection3 } from '../page-objects/pageSection3';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.section3');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check Section 3 component presence', async({ page }) => {
//     const section3 = new PageSection3(page);
//     await section3.showSection3Component();
// });

// test('Check section 3 rubric text', async({ page }) => {
//     const section3 = new PageSection3(page);
//     await section3.showSection3RubricText();
// });

// test('Check section 3 heading text', async({ page }) => {
//     const section3 = new PageSection3(page);
//     await section3.showSection3HeadingText();
// })

// test('Check section 3 content text', async({ page }) => {
//     const section3 = new PageSection3(page);
//     await section3.showSection3ContentText();
// })

// test('Check section 3 image', async({ page }) => {
//     const section3 = new PageSection3(page);
//     await section3.showSection3Image();
// })

// import { faker } from '@faker-js/faker';
// import { test } from '@playwright/test';
// import { PageTryTrial } from '../page-objects/pageTryTrial'

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
//     const tryTrial = new PageTryTrial(page);
//     await tryTrial.showTryTrialComponent();
// });

// test('Check Try Trial rubric text', async({ page }) => {
//     const tryTrial = new PageTryTrial(page);
//     await tryTrial.showTryTrialRubric();
// });

// test('Check Try Trial Heading text', async({ page }) => {
//     const tryTrial = new PageTryTrial(page);
//     await tryTrial.showTryTrialHeading();
// });

// test('Check Try Trial text helper for button', async({ page }) => {
//     const tryTrial = new PageTryTrial(page);
//     await tryTrial.showTryTrialButtonTextHelper();
// });

// test('Check Try Trial text for Terms & Services.', async({ page }) => {
//     const tryTrial = new PageTryTrial(page);
//     await tryTrial.showTryTextForAgreements();
// });

// test('Check Trial Form elements', async({ page }) => {
//     const tryTrial = new PageTryTrial(page);
//     await tryTrial.showTryTrialFormElements();
// });

// test('Check mandatory fields for Try Trial form', async({ page }) => {
//     const tryTrial = new PageTryTrial(page);
//     await tryTrial.showTryTrialFormRequiredFields();
// });

// test('Check Terms & Services link and title', async({ page }) => {
//     const tryTrial = new PageTryTrial(page);
//     await tryTrial.showAndClickOnTermsAndServiceLink();
// });

// test('Fill and Submit try Now Form', async({ page }) => {
//     const tryTrial = new PageTryTrial(page);

//     const randomFullName = faker.person.fullName()
//     const randomEmail = `${randomFullName.replace(/ /g, '')}${faker.number.int(1000)}@test.com`;
//     const randomPassword = faker.internet.password()

//     await tryTrial.fillAndSubmitTryTrialForm(randomFullName, randomEmail, randomPassword);
// });

// import { test } from '@playwright/test';
// import { PageVideoComponent } from '../page-objects/pageVideoComponent';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
// });

// test('Check video component presence', async ({ page }) => {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.showVideoComponent();
// })

// test('Check that valid video used', async({ page }) =>  {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.showUsedVideo();

// })

// test('Check video preload attribute', async ({ page }) => {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.showVideoPreloadAttribute();
// });

// test('Check that video is muted by default', async ({ page }) => {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.showDefaultVideoState();
// })

//  test('Check mute and unmute buttons', async ({ page }) => {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.clickMuteUnmuteButton();
// });

// test.skip('Check fullscreen resize button', async ({ page }) => {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.showFullscreenResize();
// });

// test('Check the hero banner title', async ({ page }) => {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.showHeroBannerTitle();
// });

// test('Check the hero info text', async ({ page }) => {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.showHeroInfoText();
// })

// test('Check that button "Try now" is displayed on the hero banner', async ({ page }) => {
//     const videoComponentPage = new PageVideoComponent(page);
//     await videoComponentPage.showTryNowButton();
// })

//Old tests without page fixture
// import { test } from '@playwright/test';
// import { PageManager } from '../page-objects/pageManager';

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.evaluate(() => {
//         const sectionTry = document.querySelector('.baner__news');
//         if (sectionTry) {
//             sectionTry.scrollIntoView();
//             return true; // return something to indicate success
//         }
//         return false; // return something to indicate failure
//     });
//   });

// test('Check Baner News component presence', async({ page }) => {
//     const pm = new PageManager(page);
//     await pm.onBannerNewsComponent().showBannerNewsComponent();
// });

// test('Check baner news rubric text', async({ page }) => {
//     const pm = new PageManager(page);
//     await pm.onBannerNewsComponent().showBannerNewsRubricText();
// });

// test('Check baner news heading text', async({ page }) => {
//     const pm = new PageManager(page);
//     await pm.onBannerNewsComponent().showBannerNewsHeadingText();
// });

// test('Check news section content', async ({ page }) => {
//     const pm = new PageManager(page);
//     await pm.onBannerNewsComponent().showNewsSection();
// });


































