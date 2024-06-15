import { Page, Locator, expect } from '@playwright/test';
import { checkLinkAndUrl } from './pageUtils';
import {
  expectedSitreLogoSrc,
  expectedUserLogoSrc,
  headerlinksToTest,
  hoveredSrc,
  userItemsLinksToTest,
} from '../test-data';
import { HelperBase } from './helperBase';

export class PageHeader extends HelperBase {
  readonly headerComponent: Locator;
  readonly siteLogo: Locator;
  readonly userLogoImg: Locator;
  readonly userIcon: Locator;

  constructor(page: Page) {
    super(page);
    this.headerComponent = page.locator('header');
    this.siteLogo = page.locator('img[alt="StartEx"]').first();
    this.userLogoImg = page.getByRole('img', { name: 'UserLogo' });
    this.userIcon = page.locator('.user__icon');
  }

  async showHeader() {
    await expect(this.headerComponent).toBeVisible();
  }

  async siteLogoIsDisplayed() {
    await expect(this.siteLogo).toBeVisible();
    const siteLogoSrc = await this.siteLogo.getAttribute('src');
    expect(siteLogoSrc).toContain(expectedSitreLogoSrc);
  }

  async showDefaultUserLogoWithCorrectImage() {
    await expect(this.userLogoImg).toBeVisible();
    const userLogoSrc = await this.userLogoImg.getAttribute('src');
    expect(userLogoSrc).toContain(expectedUserLogoSrc);
  }

  async showUserLogoOnHover() {
    await this.userIcon.hover();
    const hoveredUserLogo = await this.userLogoImg.getAttribute('src');
    expect(hoveredUserLogo).toContain(hoveredSrc);
  }

  async headerTabsDisplayedAndLinksWorks() {
    for (const link of headerlinksToTest) {
      await checkLinkAndUrl(this.page, link.title, link.url, '.header__ul .header__li a');
    }
  }

  async userInfoItemsDisplayedAndLinksWorks() {
    await this.userIcon.hover();
    for (const link of userItemsLinksToTest) {
      await checkLinkAndUrl(this.page, link.title, link.url, '.user__menu .user__item a');
    }
  }
}
