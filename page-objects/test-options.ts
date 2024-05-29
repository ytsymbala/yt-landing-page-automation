import {test as base} from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

// Declaration of the test options type
export type TestOptions = {
    pageManager: PageManager;
    navigateTo: (locator: string) => Promise<void>;
  };

// Extending the base test with custom options 
export const test = base.extend<TestOptions>({
    // Initializing PageManager before each test
    pageManager: async ({ page }, use) => {
      const pm = new PageManager(page);
      await use(pm);
    },
    
    // Function for navigating to a specific component on the page
    navigateTo: async ({ page }, use) => {
      const navigate = async (locator: string) => {
        await page.goto('/');
        await page.waitForSelector(locator);
        await page.evaluate((locator) => {
          const pageSectionComponent = document.querySelector(locator);
          if (pageSectionComponent) {
            pageSectionComponent.scrollIntoView();
            return true; // return something to indicate success
          }
          return false; // return something to indicate failure
        }, locator);
      };
      await use(navigate);
    }
  });

