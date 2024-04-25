import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const section1 = document.querySelector('.section1');
        if (section1) {
            section1.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check section1 component presence', async({ page }) => {
    const section1Component = page.locator('.section1')
    await expect(section1Component).toBeVisible()
})

test('Check section1 content rubric text', async({ page }) => {
    const section1Rubric = await page.getByRole('heading', { name: 'NEW DESIGN' }).textContent()
    const expectedRubricText = 'NEW DESIGN'
    expect(section1Rubric).toContain(expectedRubricText)
})

test('Check section1 header text', async({ page }) => {
    const section1Heading = await page.getByRole('heading', { name: 'There is no other platforms for you as like ....' }).textContent()
    const expectedHeadingText = 'There is no other platforms for you as like'
    expect(section1Heading).toContain(expectedHeadingText)
})

test('Check section1 content link', async({ page }) => {
    const section1ContentLink = await page.locator('.content__link').first().textContent()
    const expectedContentLink = '....'
    expect(section1ContentLink).toContain(expectedContentLink)
})

test('Check section1 first description', async({ page }) => {
    const section1FirstDescriptions = await page.locator('.section1 .container p').first().textContent();
    const expectedFirstDescription = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.'
    expect(section1FirstDescriptions).toContain(expectedFirstDescription);
});

test('Check section1 second description', async({ page }) => {
    const section1SecondDescriptions = await page.locator('.section1 .container p').nth(1).textContent();
    const expectedSecondDescription = 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
    expect(section1SecondDescriptions).toContain(expectedSecondDescription);
});