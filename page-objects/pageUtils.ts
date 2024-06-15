//This is function for checking list of links

import { Page, expect } from '@playwright/test';

/**
 * Function to check if a link with a given text is visible, clicks it, and verifies the URL.
 * @param {Page} page - The Playwright page object.
 * @param {string} linkText - The text of the link to check and click.
 * @param {string} expectedUrl - The expected URL after the link is clicked.
 * @param {string} locator - The CSS locator for the link.
 */
export async function checkLinkAndUrl(page: Page, linkText: string, expectedUrl: string, locator: string) {
  let element;

  // Determine the element based on the locator provided
  if (locator === '.f__ul .f__li a') {
    element = page.locator(locator).first();
  } else {
    element = page.locator(`${locator}:has-text("${linkText}")`).first();
  }

  await expect(element).toBeVisible();
  await element.click();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Special handling for the 'Test' link
  if (linkText === 'Test' && expectedUrl === '/TEST/test.html') {
    await page.goBack();
  } else {
    await expect(page).toHaveURL(expectedUrl);
  }

  await page.evaluate(() => window.scrollTo(0, 0));
}
