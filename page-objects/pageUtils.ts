//This is Test Data

import { Page, expect } from '@playwright/test';

export async function checkLinkAndUrl(page: Page, linkText: string, expectedUrl: string, locator: string) {
    //await page.evaluate(() => window.scrollTo(0, 0));
    const element = await page.locator(`${locator}:has-text("${linkText}")`).first();
    if (!element) {
        console.error(`Element with text "${linkText}" not found!`);
        return;
    }
    await expect(element).toBeVisible();
    await element.click();
    if (linkText === 'Test' && expectedUrl === '/TEST/test.html') {
        await page.goBack();
    } else {
        await expect(page).toHaveURL(expectedUrl);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
}



