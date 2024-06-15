import { Page, Locator, expect } from '@playwright/test';
import {
  expectedContentLink,
  expectedFirstDescription,
  expectedHeadingText,
  expectedRubricText,
  expectedSecondDescription,
} from '../test-data';
import { HelperBase } from './helperBase';

export class PageSection1 extends HelperBase {
  readonly sectionComponent: Locator;
  readonly section1Rubric: Locator;
  readonly section1Heading: Locator;
  readonly section1ContentLink: Locator;
  readonly section1FirstDescription: Locator;
  readonly section1SecondDescription: Locator;

  constructor(page: Page) {
    super(page);
    this.sectionComponent = page.locator('.section1');
    this.section1Rubric = page.getByRole('heading', { name: 'NEW DESIGN' });
    this.section1Heading = page.getByRole('heading', { name: 'There is no other platforms for you as like ....' });
    this.section1ContentLink = page.locator('.content__link').first();
    this.section1FirstDescription = page.locator('.section1 .container p').first();
    this.section1SecondDescription = page.locator('.section1 .container p').nth(1);
  }

  async showSection1Component() {
    await expect(this.section1ContentLink).toBeVisible();
  }

  async showSection1RubricText() {
    await expect(this.section1Rubric).toBeVisible();
    const getsection1RubricText = await this.section1Rubric.textContent();
    expect(getsection1RubricText).toContain(expectedRubricText);
  }

  async showSection1HeaderText() {
    await expect(this.section1Heading).toBeVisible();
    const getSection1Heading = await this.section1Heading.textContent();
    expect(getSection1Heading).toContain(expectedHeadingText);
  }

  async showSection1ContentLink() {
    await expect(this.section1ContentLink).toBeVisible();
    const getSection1ContentLink = await this.section1ContentLink.textContent();
    expect(getSection1ContentLink).toContain(expectedContentLink);
  }

  async showSection1FirstDescription() {
    await expect(this.section1FirstDescription).toBeVisible();
    const getSection1FirstDescription = await this.section1FirstDescription.textContent();
    expect(getSection1FirstDescription).toContain(expectedFirstDescription);
  }

  async showSection1SecondDescription() {
    await expect(this.section1SecondDescription).toBeVisible();
    const getSection1SecondDescription = await this.section1SecondDescription.textContent();
    expect(getSection1SecondDescription).toContain(expectedSecondDescription);
  }
}
