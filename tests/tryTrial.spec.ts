import { faker } from '@faker-js/faker';
import { test } from '@playwright/test';
import { PageTryTrial } from '../page-objects/pageTryTrial'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('.try');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check Try Trial component presence', async({ page }) => {
    const tryTrial = new PageTryTrial(page);
    await tryTrial.showTryTrialComponent();
});

test('Check Try Trial rubric text', async({ page }) => {
    const tryTrial = new PageTryTrial(page);
    await tryTrial.showTryTrialRubric();
});

test('Check Try Trial Heading text', async({ page }) => {
    const tryTrial = new PageTryTrial(page);
    await tryTrial.showTryTrialHeading();
});

test('Check Try Trial text helper for button', async({ page }) => {
    const tryTrial = new PageTryTrial(page);
    await tryTrial.showTryTrialButtonTextHelper();
});

test('Check Try Trial text for Terms & Services.', async({ page }) => {
    const tryTrial = new PageTryTrial(page);
    await tryTrial.showTryTextForAgreements();
});

test('Check Trial Form elements', async({ page }) => {
    const tryTrial = new PageTryTrial(page);
    await tryTrial.showTryTrialFormElements();
});

test('Check mandatory fields for Try Trial form', async({ page }) => {
    const tryTrial = new PageTryTrial(page);
    await tryTrial.showTryTrialFormRequiredFields();
});

test('Check Terms & Services link and title', async({ page }) => {
    const tryTrial = new PageTryTrial(page);
    await tryTrial.showAndClickOnTermsAndServiceLink();
});

test('Check try Now Form', async({ page }) => {
    const tryTrial = new PageTryTrial(page);

    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(/ /g, '')}${faker.number.int(1000)}@test.com`;
    const randomPassword = faker.internet.password()

    await tryTrial.fillAndSubmitTryTrialForm(randomFullName, randomEmail, randomPassword);
});






