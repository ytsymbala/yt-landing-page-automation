import { test } from '@playwright/test';
import { PageAboutClients } from '../page-objects/pageAboutClients';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('.clients');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check About Clients component presence', async({ page }) => {
    const aboutClients = new PageAboutClients(page);
    await aboutClients.showAboutClientsComponent();
});

test('Check About Clients section content', async ({ page }) => {
    const aboutClients = new PageAboutClients(page);
    await aboutClients.showClientsContent();
});

test('Check About Clients section logos', async ({ page }) => {
    const aboutClients = new PageAboutClients(page);
    await aboutClients.showClientsLogos();
});

