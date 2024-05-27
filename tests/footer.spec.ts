import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { PageManager } from '../page-objects/pageManager';

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
    const pm = new PageManager(page);
    await pm.onFooterComponent().showFooterComponent();
});

test('Check site logo in the footer', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onFooterComponent().showFooterSiteLogo();
});

test('Check all info text in the footer', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onFooterComponent().showFooterInfoText();
});

test('Click and Check all footer links and titles', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onFooterComponent().checkAndClickOnFooterLinks();
});

test('Check presence of subscription form', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onFooterComponent().showSubscibeForm();
});

test('Fill and Submit subscribe form', async ({ page }) => {
    const pm = new PageManager(page);

    const randomEmail = faker.internet.exampleEmail();
    await pm.onFooterComponent().fillAndSubmitFooterSubscribeForm(randomEmail);
});

test('Click on each social link and verify page opens', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onFooterComponent().checkAndClickOnSocialLinks();
});

