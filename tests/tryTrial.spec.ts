import { faker } from '@faker-js/faker';
import { test } from '../page-objects/test-options';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.try');
  });

test('Check Try Trial component presence', async({ pageManager }) => {
    await pageManager.onTryTrialComponent().showTryTrialComponent();
});

test('Check Try Trial rubric text', async({ pageManager }) => {
    await pageManager.onTryTrialComponent().showTryTrialRubric();
});

test('Check Try Trial Heading text', async({ pageManager }) => {
    await pageManager.onTryTrialComponent().showTryTrialHeading();
});

test('Check Try Trial text helper for button', async({ pageManager }) => {
    await pageManager.onTryTrialComponent().showTryTrialButtonTextHelper();
});

test('Check Try Trial text for Terms & Services.', async({ pageManager }) => {
    await pageManager.onTryTrialComponent().showTryTextForAgreements();
});

test('Check Trial Form elements', async({ pageManager }) => {
    await pageManager.onTryTrialComponent().showTryTrialFormElements();
});

test('Check mandatory fields for Try Trial form', async({ pageManager }) => {
    await pageManager.onTryTrialComponent().showTryTrialFormRequiredFields();
});

test('Check Terms & Services link and title', async({ pageManager }) => {
    await pageManager.onTryTrialComponent().showAndClickOnTermsAndServiceLink();
});

test('Fill and Submit try Now Form', async({ pageManager }) => {
    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace(/ /g, '')}${faker.number.int(1000)}@test.com`;
    const randomPassword = faker.internet.password();

    await pageManager.onTryTrialComponent().fillAndSubmitTryTrialForm(randomFullName, randomEmail, randomPassword);
});






