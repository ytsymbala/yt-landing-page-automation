import { test } from '../page-objects/test-options';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.clients');
  });

test('Check About Clients component presence', async({ pageManager }) => {
    await pageManager.onAboutClientsComponent().showAboutClientsComponent();
});

test('Check About Clients section content', async ({ pageManager }) => {
    await pageManager.onAboutClientsComponent().showClientsContent();
});

test('Check About Clients section logos', async ({ pageManager }) => {
    await pageManager.onAboutClientsComponent().showClientsLogos();
});

