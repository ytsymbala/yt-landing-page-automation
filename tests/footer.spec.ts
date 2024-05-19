import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { PageFooter } from '../page-objects/pageFooter';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('footer');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check Footer component presence', async ({ page }) => {
    const footer = new PageFooter(page);
    await footer.showFooterComponent();
});

test('Check site logo in the footer', async ({ page }) => {
    const footer = new PageFooter(page);
    await footer.showFooterSiteLogo();
});

test('Check all info text in the footer', async ({ page }) => {
    const footer = new PageFooter(page);
    await footer.showFooterInfoText();
});

test('Click and Check all footer links and titles', async ({ page }) => {
    const footer = new PageFooter(page);
    await footer.checkAndClickOnFooterLinks();
});

test('Check presence of subscription form', async ({ page }) => {
    const footer = new PageFooter(page);
    await footer.showSubscibeForm();
});

test('Fill and Submit subscribe form', async ({ page }) => {
    const footer = new PageFooter(page);

    const randomEmail = faker.internet.exampleEmail();
    await footer.fillAndSubmitFooterSubscribeForm(randomEmail);
});

test('Click on each social link and verify page opens', async ({ page }) => {
    const footer = new PageFooter(page);
    await footer.checkAndClickOnSocialLinks();
});

