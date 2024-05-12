import { Page, Locator, expect } from '@playwright/test';
import { expectedSection3ContentText, expectedSection3HeadingText, expectedSection3ImageSrc, expectedSection3RubricText } from '../test-data';

export class PageAboutClients {
    readonly page: Page;
    readonly aboutClientsComponent: Locator;
    readonly aboutClientsBlocks: Locator;
    readonly clientsIconSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aboutClientsComponent = page.locator('.clients');
        this.aboutClientsBlocks = page.locator('.clients .col-lg-4');
        this.clientsIconSection = page.locator('.clients__icon');
    }

    async showAboutClientsComponent() {
        await expect(this.aboutClientsComponent).toBeVisible();
    }

    async showClientsContent() {
        const getAboutClientsBlocks = await this.aboutClientsBlocks.all()

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
        
        for (let i = 0; i < getAboutClientsBlocks.length; i++) {
            const block = getAboutClientsBlocks[i];
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
    }

    async showClientsLogos() {
        await expect(this.clientsIconSection).toBeVisible();

        const logos = await this.clientsIconSection.locator('img').all();

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
    }
}