import { helper } from "../support/helper";

class NumberPage{

    private readonly verderButtonSelector = "[data-name='numberporting'] .orderflow-checkout-cta button";

    clickOnVerderButton() {
        helper.waitAndClick(this.verderButtonSelector);
    }

}

export const nummerPage = new NumberPage();