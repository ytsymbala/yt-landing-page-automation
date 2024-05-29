import {test as base} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

export type TestOptions = {
    pageManager: PageManager;
    navigateTo: (locator: string) => Promise<void>;
  };
  
  export const test = base.extend<TestOptions>({
    pageManager: async ({ page }, use) => {
      const pm = new PageManager(page);
      await use(pm);
    },
  
    navigateTo: async ({ page }, use) => {
      const navigate = async (locator: string) => {
        await page.goto('/');
        await page.waitForSelector(locator);
        await page.evaluate((locator) => {
          const sectionTry = document.querySelector(locator);
          if (sectionTry) {
            sectionTry.scrollIntoView();
            return true; // return something to indicate success
          }
          return false; // return something to indicate failure
        }, locator);
      };
      await use(navigate);
    }
  });

