import { faker } from '@faker-js/faker';
import { test } from '../page-objects/test-options';
//import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.try');
  });
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

test('Check Try Trial component presence', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onTryTrialComponent().showTryTrialComponent();
});

test('Check Try Trial rubric text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onTryTrialComponent().showTryTrialRubric();
});

test('Check Try Trial Heading text', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onTryTrialComponent().showTryTrialHeading();
});

test('Check Try Trial text helper for button', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onTryTrialComponent().showTryTrialButtonTextHelper();
});

test('Check Try Trial text for Terms & Services.', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onTryTrialComponent().showTryTextForAgreements();
});

test('Check Trial Form elements', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onTryTrialComponent().showTryTrialFormElements();
});

test('Check mandatory fields for Try Trial form', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onTryTrialComponent().showTryTrialFormRequiredFields();
});

test('Check Terms & Services link and title', async({ pageManager }) => {
    //const pm = new PageManager(page);
    await pageManager.onTryTrialComponent().showAndClickOnTermsAndServiceLink();
});

test('Fill and Submit try Now Form', async({ pageManager }) => {
    //const pm = new PageManager(page);

    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(/ /g, '')}${faker.number.int(1000)}@test.com`;
    const randomPassword = faker.internet.password()

    await pageManager.onTryTrialComponent().fillAndSubmitTryTrialForm(randomFullName, randomEmail, randomPassword);
});






