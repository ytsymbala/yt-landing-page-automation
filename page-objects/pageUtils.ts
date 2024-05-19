//This is Test Data

import { Page, expect } from '@playwright/test';

export async function checkLinkAndUrl(page: Page, linkText: string, expectedUrl: string, locator: string) {

    let element;

    if (locator === '.f__ul .f__li a') {
        element = page.locator(locator).first();
    } else {
        element = page.locator(`${locator}:has-text("${linkText}")`).first();
    }

    await expect(element).toBeVisible();
    await element.click();
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    if (linkText === 'Test' && expectedUrl === '/TEST/test.html') {
        await page.goBack();
    } else {
        await expect(page).toHaveURL(expectedUrl);
    }
    
    await page.evaluate(() => window.scrollTo(0, 0));
}



