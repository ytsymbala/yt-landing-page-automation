import { expect, test } from '@playwright/test';

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
    const aboutClientsComponent = page.locator('.clients');
    await expect(aboutClientsComponent).toBeVisible();
});

test('Check About Clients section content', async ({ page }) => {
    const aboutClientsBlocks = await page.locator('.clients .col-lg-4').all();
    
    const expectedBlocks = [
        {
            image: 'images/user_1.svg',
            name: 'Jonathon Doe',
            title: 'Co Founder',
            description: '“Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id gravida at eget metus. Etiasem malesuada magn”'
        },
        {
            image: 'images/user_2.svg',
            name: 'Jonathon Doe',
            title: 'Co Founder',
            description: '“Pellentesque ornare sem lacinia quam. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn”'
        },
        {
            image: 'images/user_3.svg',
            name: 'Jonathon Doe',
            title: 'Co Founder',
            description: '“Aenean eu leo quam. Pellentesque ornare sem lacinia qua emere wancerid elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn”'
        }
    ];
    
    for (let i = 0; i < aboutClientsBlocks.length; i++) {
        const block = aboutClientsBlocks[i];
        const expectedBlock = expectedBlocks[i];
        
        const imageElement = block.locator('img');
        const nameElement = block.locator('.client__name');
        const titleElement = block.locator('.content__rubric');
        const textElement = block.locator('.content__text_w');
        
        const imageSrc = await imageElement.getAttribute('src');
        const nameText = await nameElement.textContent();
        const titleText = await titleElement.textContent();
        const textContent = await textElement.textContent();
        
        expect(imageSrc).toContain(expectedBlock.image);
        expect(nameText).toContain(expectedBlock.name);
        expect(titleText).toContain(expectedBlock.title);
        expect(textContent).toContain(expectedBlock.description);
    }
});

test('Check About Clients section logos', async ({ page }) => {
    const clientsIconSection = await page.locator('.clients__icon');
    const logos = await clientsIconSection.locator('img').all();

    const expectedLogos = [
        'images/partner-logo-1.svg',
        'images/partner-logo-2.svg',
        'images/partner-logo-3.svg',
        'images/partner-logo-4.svg',
        'images/partner-logo-5.svg',
    ];

    for (let i = 0; i < logos.length; i++) {
        const logo = logos[i];
        const expectedLogoSrc = expectedLogos[i];

        const logoSrc = await logo.getAttribute('src');

        expect(logoSrc).toContain(expectedLogoSrc);
    }
});

