import { Page, Locator, expect } from '@playwright/test';
import { expectedTermsAndServiceLinkTitle, expectedTryTextButtonInfo, expectedTryTextForAgreements, expectedTryTrialHeadingText, expectedTryTrialRubricText } from '../test-data';

export class PageTryTrial {
    readonly page: Page;
    readonly tryTrialComponent: Locator;
    readonly tryTrialRubric: Locator;
    readonly tryTrialHeading: Locator;
    readonly tryTextButtonInfo: Locator;
    readonly tryTextForAgreements: Locator;
    readonly formElements: Locator;
    readonly formSubmitButton: Locator;
    readonly termsAndServiceLink: Locator;  


    constructor(page: Page) {
        this.page = page;
        this.tryTrialComponent = page.locator('#trial');
        this.tryTrialRubric = page.locator('#trial').getByText('NEW FEATURES');
        this.tryTrialHeading = page.locator('.try__heading');
        this.tryTextButtonInfo = page.locator('.try__text').first();
        this.tryTextForAgreements = page.locator('.try__text').nth(1);
        this.formElements = page.locator('.contact__ul .try__input');
        this.formSubmitButton = page.locator('.try__button');
        this.termsAndServiceLink = page.getByRole('link', { name: 'Terms & Services.' })

    }

    async showTryTrialComponent() {
        await expect(this.tryTrialComponent).toBeVisible();
    }

    async showTryTrialRubric() {
        await expect(this.tryTrialRubric).toBeVisible();
        const getTryTrialRubricText = await this.tryTrialRubric.textContent();
        expect(getTryTrialRubricText).toContain(expectedTryTrialRubricText);
    }

    async showTryTrialHeading() {
        await expect(this.tryTrialHeading).toBeVisible();
        const getTryTrialHeading = await this.tryTrialHeading.textContent();
        expect(getTryTrialHeading).toContain(expectedTryTrialHeadingText);
    }
    
    async showTryTrialButtonTextHelper() {
        await expect(this.tryTextButtonInfo).toBeVisible();
        const getTryTextButtonInfo = await this.tryTextButtonInfo.textContent();
        expect(getTryTextButtonInfo).toContain(expectedTryTextButtonInfo);
    }

    async showTryTextForAgreements() {
        await expect(this.tryTextForAgreements).toBeVisible();
        const getTryTextForAgreements = await this.tryTextForAgreements.textContent()
        expect(getTryTextForAgreements).toContain(expectedTryTextForAgreements);
    }

    async showTryTrialFormElements() {
        const getFormElements = await this.formElements.all();
        expect(getFormElements).toHaveLength(3);
        expect(this.formSubmitButton).not.toBeNull();
    }

    async showTryTrialFormRequiredFields() {
        const formElements = await this.formElements.all()
        for (const inputElement of formElements) {
            const isRequired = await inputElement.getAttribute('required') !== null
            expect(isRequired).toBe(true);
        }

    }

    async showAndClickOnTermsAndServiceLink() {
        const getTermsAndServiceLink = await this.termsAndServiceLink.textContent()
        await this.termsAndServiceLink.click()
        expect(this.page.url()).toMatch(/#/);
        expect(getTermsAndServiceLink).toContain(expectedTermsAndServiceLinkTitle);
    }

    async fillAndSubmitTryTrialForm(fullName: string, email: string, password: string) {
        await this.tryTrialComponent.getByPlaceholder('FULL NAME').fill(fullName);
        await this.tryTrialComponent.getByPlaceholder('YOUR EMAIL').fill(email);
        await this.tryTrialComponent.getByPlaceholder('PASSWORD').fill(password);
        await this.tryTrialComponent.getByRole('button', { name: 'TRY NOW' }).click()
    }

}