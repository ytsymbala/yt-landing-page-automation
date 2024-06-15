import { Page, Locator, expect } from '@playwright/test';
import { expectedFoterImageSrc, expectedTexts, footerlinksToTest, socialLinks } from '../test-data';
import { checkLinkAndUrl } from './pageUtils';
import { HelperBase } from './helperBase';

export class PageFooter extends HelperBase {
  readonly footerComponent: Locator;
  readonly footerSiteLogo: Locator;
  readonly footerParagraphElements: Locator;
  readonly inputElement: Locator;
  readonly buttonElement: Locator;
  readonly submitSubscribeForm: Locator;

  constructor(page: Page) {
    super(page);
    this.footerComponent = page.locator('footer#contacts');
    this.footerSiteLogo = page.locator('#contacts').getByRole('img', { name: 'StartEx' });
    this.footerParagraphElements = page.locator('.f__info');
    this.inputElement = page.locator('.subscribe__input');
    this.buttonElement = page.locator('.subscribe__button');
    this.submitSubscribeForm = page.locator('.f_subscribe');
  }

  async showFooterComponent() {
    await expect(this.footerComponent).toBeVisible();
  }

  async showFooterSiteLogo() {
    await expect(this.footerSiteLogo).toBeVisible();
    const getFooterSiteLogo = await this.footerSiteLogo.getAttribute('src');
    expect(getFooterSiteLogo).toContain(expectedFoterImageSrc);
  }

  async showFooterInfoText() {
    const getFooterParagraphElements = await this.footerParagraphElements.all();

    for (let i = 0; i < getFooterParagraphElements.length; i++) {
      const paragraph = getFooterParagraphElements[i];
      const expectedText = await paragraph.textContent();
      await expect(getFooterParagraphElements[i]).toBeVisible();
      expect(expectedText).toContain(expectedTexts[i]);
    }
  }

  async checkAndClickOnFooterLinks() {
    for (const link of footerlinksToTest) {
      await checkLinkAndUrl(this.page, link.title, link.url, '.f__ul .f__li a');
    }
  }

  async showSubscibeForm() {
    await expect(this.inputElement).toBeVisible();
    await expect(this.buttonElement).toBeVisible();

    const inputType = await this.inputElement.getAttribute('type');
    const inputPlaceholder = await this.inputElement.getAttribute('placeholder');

    expect(inputType).toEqual('email');
    expect(inputPlaceholder).toEqual('EMAIL');
  }

  async fillAndSubmitFooterSubscribeForm(email: string) {
    await this.submitSubscribeForm.getByPlaceholder('EMAIL').fill(email);
    await this.submitSubscribeForm.getByRole('button', { name: 'Send' }).click();
  }

  async checkAndClickOnSocialLinks() {
    for (const link of socialLinks) {
      const socialLinkElement = this.page.locator(`.social__ul a[href="${link}"]`);
      await socialLinkElement.click();
      //await expect(page).toHaveURL(link);
      await this.page.goBack();
    }
  }
}
