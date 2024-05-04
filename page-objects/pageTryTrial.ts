import { Page, Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { expectedContentLink, expectedFirstDescription, expectedHeadingText, expectedRubricText, expectedSecondDescription } from '../test-data';

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
        const getTryTrialRubricText = await this.tryTrialRubric.textContent();
        const expectedTryTrialRubricText = 'NEW FEATURES';
        expect(getTryTrialRubricText).toContain(expectedTryTrialRubricText);
    }

    async showTryTrialHeading() {
        const getTryTrialHeading = await this.tryTrialHeading.textContent();
        const expectedTryTrialHeadingText = 'Over 100000 designers are using';
        expect(getTryTrialHeading).toContain(expectedTryTrialHeadingText);
    }
    
    async showTryTrialButtonTextHelper() {
        const getTryTextButtonInfo = await this.tryTextButtonInfo.textContent();
        const expectedTryTextButtonInfo = '30 days free trial for all.';
        expect(getTryTextButtonInfo).toContain(expectedTryTextButtonInfo);
    }

    async showTryTextForAgreements() {
        const getTryTextForAgreements = await this.tryTextForAgreements.textContent()
        const expectedTryTextForAgreements = 'By Signing up you agree to our ';
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
        const expectedTermsAndServiceLinkTitle = 'Terms & Services.'
        expect(getTermsAndServiceLink).toContain(expectedTermsAndServiceLinkTitle);
    }

    async fillAndSubmitTryTrialForm() {
        const randomFullName = faker.person.fullName()
        const randomEmail = `${randomFullName.replace(/ /g, '')}${faker.number.int(1000)}@test.com`;
        const randomPassword = faker.internet.password()

        await this.tryTrialComponent.getByPlaceholder('FULL NAME').fill(randomFullName);
        await this.tryTrialComponent.getByPlaceholder('YOUR EMAIL').fill(randomEmail);
        await this.tryTrialComponent.getByPlaceholder('PASSWORD').fill(randomPassword);
        //await this.tryTrialComponent.getByRole('button', { name: 'TRY NOW' }).click()
    }

}