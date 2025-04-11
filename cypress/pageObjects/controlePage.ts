import { helper } from "../support/helper";

class ControlPage{

    private readonly simkaartControleSelector = "[data-id='1'] .orderflow-steps-progress-summary-item__content__description";
    private readonly nummerbehoudControleSelector = "[data-id='2'] .orderflow-steps-progress-summary-item__content__description";
    private readonly persoonlijkeGegevensSelector = "[data-id='3'] .orderflow-steps-progress-summary-item__content__description";

    getSimkaartControleData() {
        return helper.getText(this.simkaartControleSelector);
    }

    getNummerbehoudControleData() {
        return helper.getText(this.nummerbehoudControleSelector);
    }

    getPersoonlijkeGegevens() {
        return helper.getText(this.persoonlijkeGegevensSelector);
    }

}

export const controlePage = new ControlPage();