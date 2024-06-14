import { Page } from '@playwright/test';


// Base class for helpers
export class HelperBase{

    readonly page: Page;
    // Constructor to initialize the page property
    constructor(page: Page){
        this.page = page;
    }
}