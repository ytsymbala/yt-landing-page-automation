import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('.section3');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check Section2 component presence', async({ page }) => {
    const section3Component = page.locator('.section3');
    await expect(section3Component).toBeVisible();
});

test('Check section 3 rubric text', async({ page }) => {
    const section3RubricText = await page.locator('.section3 .content__rubric').textContent();
    const expectedSection3RubricText = 'NEW FEATURES';
    expect(section3RubricText).toContain(expectedSection3RubricText);
});

test('Check section 3 heading text', async({ page }) => {
    const section3HeadingText = await page.locator('.section3 .content__heading').textContent();
    const expectedSection3HeadingText = 'Some awesone features';
    expect(section3HeadingText).toContain(expectedSection3HeadingText);
})

test('Check section 3 content text', async({ page }) => {
    const section3ContentText = await page.locator('.section3 .content__text').textContent();
    const expectedSection3ContentText = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper.';
    expect(section3ContentText).toContain(expectedSection3ContentText);
})

test('Check section 3 image', async({ page }) => {
    const section3ImageSrc = await page.getByRole('img', { name: 'Safari Browser' }).getAttribute('src');
    const expectedSection3ImageSrc = 'images/safari.svg';
    expect(section3ImageSrc).toContain(expectedSection3ImageSrc);
})
