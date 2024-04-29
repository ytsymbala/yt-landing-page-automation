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
    const formElements = await page.$$('.try__input');
    const formSubmitButton = page.locator('.try__button');
    expect(formElements).toHaveLength(3);
    expect(formSubmitButton).not.toBeNull();
});



