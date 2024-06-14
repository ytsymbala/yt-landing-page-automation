import { test } from '../page-objects/fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('footer');
  });

test('Check Footer component presence @smoke', async ({ pageManager }) => {
    await pageManager.onFooterComponent().showFooterComponent();
});

test('Check site logo in the footer', async ({ pageManager }) => {
    await pageManager.onFooterComponent().showFooterSiteLogo();
});

test('Check all info text in the footer', async ({ pageManager }) => {
    await pageManager.onFooterComponent().showFooterInfoText();
});

test('Click and Check all footer links and titles @smoke', async ({ pageManager }) => {
    await pageManager.onFooterComponent().checkAndClickOnFooterLinks();
});

test('Check presence of subscription form', async ({ pageManager }) => {
    await pageManager.onFooterComponent().showSubscibeForm();
});

test('Fill and Submit subscribe form @smoke', async ({ pageManager }) => {
    const randomEmail = faker.internet.exampleEmail();
    await pageManager.onFooterComponent().fillAndSubmitFooterSubscribeForm(randomEmail);
});

test('Click on each social link and verify page opens @smoke', async ({ pageManager }) => {
    await pageManager.onFooterComponent().checkAndClickOnSocialLinks();
});

