import { helper } from "../support/helper";

class SimOnlyPage {

  private readonly orderFlowSidebarSelector = "[data-interaction-element='orderflow-sidebar-receipt']";
  private readonly bestellenButtonSelector = "[data-interaction-element='orderflow-sticky-receipt'] .orderflow-sticky-receipt__bar__right .btn";
  
  clickOnBestellenButton() {
    cy.get(this.orderFlowSidebarSelector).scrollIntoView();
    helper.waitAndClick(this.bestellenButtonSelector);
  }

}

export const simOnlyPage = new SimOnlyPage();
