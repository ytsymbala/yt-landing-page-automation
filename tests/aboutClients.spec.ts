import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

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
    const pm = new PageManager(page);
    await pm.onAboutClientsComponent().showAboutClientsComponent();
});

test('Check About Clients section content', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onAboutClientsComponent().showClientsContent();
});

test('Check About Clients section logos', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onAboutClientsComponent().showClientsLogos();
});

