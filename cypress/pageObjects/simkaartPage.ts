import { helper } from "../support/helper";

class SimkaartPage {

    private readonly verderButtonSelector = "[data-name='simcard'] .orderflow-checkout-cta button";

    clickOnVerderButton() {
        // There is a performance issue of Verder button on Simkaart page 
        // It has a loading issue, so we need to wait for 1 second before clicking
        helper.waitAndClick(this.verderButtonSelector, "Verder", 1000);
    }

}

export const simkaartPage = new SimkaartPage();