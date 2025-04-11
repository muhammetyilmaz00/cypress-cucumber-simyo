import { helper } from "../support/helper";

class SimyoHomePage{

  private readonly cookieBarAcceptSelector = ".cookie-bar__footer [data-id='1']";
  private readonly simOnlyNavBarSelector = "[data-id='sim-only'] > [href='/sim-only']";

  navigateToSimyoWebsite(){
    cy.visit('/');
  }

  clickAccepterenButtonOnCookies(){
    helper.waitAndClick(this.cookieBarAcceptSelector);
  }

  clickOnSimOnly(){
    helper.waitAndClick(this.simOnlyNavBarSelector);
  }
    
}

export const simyoHomePage = new SimyoHomePage();