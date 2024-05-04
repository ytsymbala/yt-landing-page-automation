import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

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
    const tryTrialComponent = page.locator('#trial');
    await expect(tryTrialComponent).toBeVisible();
});

test('Check Try Trial rubric text', async({ page }) => {
    const tryTrialRubric = await page.locator('#trial').getByText('NEW FEATURES').textContent();
    const expectedTryTrialRubricText = 'NEW FEATURES';
    expect(tryTrialRubric).toContain(expectedTryTrialRubricText);
})

test('Check Try Trial Heading text', async({ page }) => {
    const tryTrialHeading = await page.locator('.try__heading').textContent();
    const expectedTryTrialHeadingText = 'Over 100000 designers are using';
    expect(tryTrialHeading).toContain(expectedTryTrialHeadingText);
});

test('Check Try Trial text helper for button', async({ page }) => {
    const tryTextButtonInfo = await page.locator('.try__text').first().textContent()
    const expectedTryTextButtonInfo = '30 days free trial for all.';
    expect(tryTextButtonInfo).toContain(expectedTryTextButtonInfo);
})

test('Check Try Trial text for Terms & Services.', async({ page }) => {
    const tryTextForAgreements = await page.locator('.try__text').nth(1).textContent()
    const expectedTryTextForAgreements = 'By Signing up you agree to our ';
    expect(tryTextForAgreements).toContain(expectedTryTextForAgreements);
})

test('Check Trial Form elements', async({ page }) => {
    const formElements = await page.locator('.contact__ul .try__input').all();
    const formSubmitButton = page.locator('.try__button');
    expect(formElements).toHaveLength(3);
    expect(formSubmitButton).not.toBeNull();
});

test('Check mandatory fields for Try Trial form', async({ page }) => {
    const formInputElements = await page.locator('.contact__ul .try__input').all();
    
    for (const inputElement of formInputElements) {
        const isRequired = await inputElement.getAttribute('required') !== null
        expect(isRequired).toBe(true);
    }
})

test('Check Terms & Services link and title', async({ page }) => {
    const termsAndServiceLink = await page.getByRole('link', { name: 'Terms & Services.' }).textContent();
    await page.getByRole('link', { name: 'Terms & Services.' }).click()
    expect(page.url()).toMatch(/#/);
    const expectedTermsAndServiceLinkTitle = 'Terms & Services.'
    expect(termsAndServiceLink).toContain(expectedTermsAndServiceLinkTitle);
})

test('Check try Now Form', async({ page }) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`
    const randomPassword = faker.internet.password()

    const tryTrialComponent = page.locator('#trial');
    await tryTrialComponent.getByPlaceholder('FULL NAME').fill(randomFullName);
    await tryTrialComponent.getByPlaceholder('YOUR EMAIL').fill(randomEmail);
    await tryTrialComponent.getByPlaceholder('PASSWORD').fill(randomPassword);
    await tryTrialComponent.getByRole('button', { name: 'TRY NOW' }).click()
});






