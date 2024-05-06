import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        const sectionTry = document.querySelector('.baner__news');
        if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
        }
        return false; // return something to indicate failure
    });
  });

test('Check Baner News component presence', async({ page }) => {
    const banerNewsComponent = page.locator('#news');
    await expect(banerNewsComponent).toBeVisible();
});

test('Check baner news rubric text', async({ page }) => {
    const banerNewsRubricText = await page.getByRole('heading', { name: 'NEW FEATURES' }).textContent();
    const expectedBanerNewsRubricText = 'NEW FEATURES';
    expect(banerNewsRubricText).toContain(expectedBanerNewsRubricText);
});

test('Check baner news heading text', async({ page }) => {
    const banerNewsHeadingText = await page.locator('h2').filter({ hasText: 'Some awesone features' }).textContent();
    const expectedBanerNewsHeadingText = 'Some awesone features';
    expect(banerNewsHeadingText).toContain(expectedBanerNewsHeadingText);
});

test('Check news section content', async ({ page }) => {
    const newsBlocks = await page.locator('.ban_news .col-lg-4').all();
    
    const expectedBlocks = [
        {
            image: 'images/baner-icon1.svg',
            title: 'Some awesone features',
            description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
        },
        {
            image: 'images/baner-icon2.svg',
            title: 'Some awesone features',
            description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
        },
        {
            image: 'images/baner-icon3.svg',
            title: 'Some awesone features',
            description: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.'
        }
    ];
    
    for (let i = 0; i < newsBlocks.length; i++) {
        const block = newsBlocks[i];
        const expectedBlock = expectedBlocks[i];
        
        const imageElement = block.locator('img')
        const titleElement = block.locator('.content__subheading')
        const textElement = block.locator('.content__text')
        
        const imageSrc = await imageElement.getAttribute('src');
        const titleText = await titleElement.textContent();
        const textContent = await textElement.textContent();
        
        expect(imageSrc).toContain(expectedBlock.image);
        expect(titleText).toContain(expectedBlock.title);
        expect(textContent).toContain(expectedBlock.description);
    }
});






