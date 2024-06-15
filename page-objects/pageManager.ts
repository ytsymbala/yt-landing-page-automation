import { Page } from '@playwright/test';
import { PageAboutClients } from './pageAboutClients';
import { PageBannerNews } from './pageBanerNews';
import { PageFooter } from './pageFooter';
import { PageHeader } from './pageHeader';
import { PageSection1 } from './pageSection1';
import { PageSection2 } from './pageSection2';
import { PageSection3 } from './pageSection3';
import { PageTryTrial } from './pageTryTrial';
import { PageVideoComponent } from './pageVideoComponent';

export class PageManager {
  private readonly page: Page; //field for the page fixture
  private readonly pageAboutClients: PageAboutClients;
  private readonly pageBannerNews: PageBannerNews;
  private readonly pageFooter: PageFooter;
  private readonly pageHeader: PageHeader;
  private readonly pageSection1: PageSection1;
  private readonly pageSection2: PageSection2;
  private readonly pageSection3: PageSection3;
  private readonly pageTryTrial: PageTryTrial;
  private readonly pageVideoComponent: PageVideoComponent;

  constructor(page: Page) {
    this.page = page;
    this.pageAboutClients = new PageAboutClients(this.page);
    this.pageBannerNews = new PageBannerNews(this.page);
    this.pageFooter = new PageFooter(this.page);
    this.pageHeader = new PageHeader(this.page);
    this.pageSection1 = new PageSection1(this.page);
    this.pageSection2 = new PageSection2(this.page);
    this.pageSection3 = new PageSection3(this.page);
    this.pageTryTrial = new PageTryTrial(this.page);
    this.pageVideoComponent = new PageVideoComponent(this.page);
  }

  onAboutClientsComponent() {
    return this.pageAboutClients;
  }

  onBannerNewsComponent() {
    return this.pageBannerNews;
  }

  onFooterComponent() {
    return this.pageFooter;
  }

  onHeaderComponent() {
    return this.pageHeader;
  }

  onSection1Component() {
    return this.pageSection1;
  }

  onSection2Component() {
    return this.pageSection2;
  }

  onSection3Component() {
    return this.pageSection3;
  }

  onTryTrialComponent() {
    return this.pageTryTrial;
  }

  onVideoComponent() {
    return this.pageVideoComponent;
  }
}
