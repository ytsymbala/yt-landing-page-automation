import { faker } from '@faker-js/faker';
import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

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
    const pm = new PageManager(page);
    await pm.onTryTrialComponent().showTryTrialComponent();
});

test('Check Try Trial rubric text', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onTryTrialComponent().showTryTrialRubric();
});

test('Check Try Trial Heading text', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onTryTrialComponent().showTryTrialHeading();
});

test('Check Try Trial text helper for button', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onTryTrialComponent().showTryTrialButtonTextHelper();
});

test('Check Try Trial text for Terms & Services.', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onTryTrialComponent().showTryTextForAgreements();
});

test('Check Trial Form elements', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onTryTrialComponent().showTryTrialFormElements();
});

test('Check mandatory fields for Try Trial form', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onTryTrialComponent().showTryTrialFormRequiredFields();
});

test('Check Terms & Services link and title', async({ page }) => {
    const pm = new PageManager(page);
    await pm.onTryTrialComponent().showAndClickOnTermsAndServiceLink();
});

test('Fill and Submit try Now Form', async({ page }) => {
    const pm = new PageManager(page);

    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(/ /g, '')}${faker.number.int(1000)}@test.com`;
    const randomPassword = faker.internet.password()

    await pm.onTryTrialComponent().fillAndSubmitTryTrialForm(randomFullName, randomEmail, randomPassword);
});






