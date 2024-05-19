import { Page, Locator, expect } from '@playwright/test';
import { expectedClientsBlocks, expectedLogos } from '../test-data';

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
        
        for (let i = 0; i < getAboutClientsBlocks.length; i++) {
            const block = getAboutClientsBlocks[i];
            const expectedClientsBlock = expectedClientsBlocks[i];
            
            const imageElement = block.locator('img');
            const nameElement = block.locator('.client__name');
            const titleElement = block.locator('.content__rubric');
            const textElement = block.locator('.content__text_w');

            await expect(imageElement).toBeVisible();
            await expect(nameElement).toBeVisible();
            await expect(titleElement).toBeVisible();
            await expect(textElement).toBeVisible();
            
            const imageSrc = await imageElement.getAttribute('src');
            const nameText = await nameElement.textContent();
            const titleText = await titleElement.textContent();
            const textContent = await textElement.textContent();
            
            expect(imageSrc).toContain(expectedClientsBlock.image);
            expect(nameText).toContain(expectedClientsBlock.name);
            expect(titleText).toContain(expectedClientsBlock.title);
            expect(textContent).toContain(expectedClientsBlock.description);
        }
    }

    async showClientsLogos() {
        await expect(this.clientsIconSection).toBeVisible();

        const logos = await this.clientsIconSection.locator('img').all();
    
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            const expectedLogoSrc = expectedLogos[i];
    
            const logoSrc = await logo.getAttribute('src');
    
            expect(logoSrc).toContain(expectedLogoSrc);
        }
    }
}