import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('.section2');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check Section2 component presence', async({ page }) => {
    const section2Component = page.locator('.section2');
    await expect(section2Component).toBeVisible();
});

test('Check section 2 rubric text', async({ page }) => {
    const section2RubricText = await page.locator('.section2 .content__rubric').textContent();
    const expectedSection2RubricText = 'NEW DESIGN';
    expect(section2RubricText).toContain(expectedSection2RubricText);
});

test('Check section 2 heading text', async({ page }) => {
    const section2HeadingText = await page.locator('.section2 .content__heading').textContent();
    const expectedSection2HeadingText = 'Resposive design, just need your tap';
    expect(section2HeadingText).toContain(expectedSection2HeadingText);
})

test('Check section 2 content link', async({ page }) => {
    const section2ContentLink = await page.locator('.section2 .content__link').textContent();
    const expectedSection2ContentLink = '....';
    expect(section2ContentLink).toContain(expectedSection2ContentLink);
})

test('Check section 2 content text', async({ page }) => {
    const section2ContentText = await page.locator('.section2 .content__text').textContent();
    const expectedSection2ContentText = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper.';
    expect(section2ContentText).toContain(expectedSection2ContentText);
})

test('Check section 2 image', async({ page }) => {
    const section2ImageSrc = await page.getByRole('img', { name: 'Macbook' }).getAttribute('src');
    const expectedSection2ImageSrc = 'images/macbook.png';
    expect(section2ImageSrc).toContain(expectedSection2ImageSrc);
})