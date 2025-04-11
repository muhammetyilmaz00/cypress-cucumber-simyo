import DataTable from "@badeball/cypress-cucumber-preprocessor/dist/data_table";
import { helper } from "../support/helper";

class Data {

    private readonly dhrSelector = "[data-value='M']";
    private readonly mevrSelector = "[data-value='F']";
    private readonly firstNameSelector = "[name='simyo-first-name']";
    private readonly lastNameSelector = "[name='simyo-last-name']";
    private readonly birthDateSelector = "[name='simyo-birth-date']";
    private readonly zipCodeSelector = "[name='simyo-zip-code']";
    private readonly houseNumberSelector = "[name='simyo-house-number']";
    private readonly houseNumberAdditionSelector = "[name='simyo-house-number-addition']";
    private readonly citySelector = "[placeholder='Stad']";
    private readonly streetSelector = "[placeholder='Straat']";
    private readonly emailSelector = "[name='simyo-email']";
    private readonly personalDetailsSelector = "[data-title='Persoonlijke gegevens'] .orderflow-checkout-cta button";

    fillPersonalDetails(dataTable: DataTable) {
        dataTable.hashes().forEach((element) => {
            if (element.aanhef == "Dhr.") {
                helper.waitAndClick(this.dhrSelector);
            } else if (element.aanhef == "Mevr.") {
                helper.waitAndClick(this.mevrSelector);
            }
            helper.waitAndType(this.firstNameSelector, element.voornaam);
            helper.waitAndType(this.lastNameSelector, element.achternaam);
            helper.waitAndType(this.birthDateSelector, element.geboortedatum);
            helper.waitAndType(this.zipCodeSelector, element.postcode);
            helper.waitAndType(this.houseNumberSelector, element.huisnummer);
            helper.waitAndType(this.houseNumberAdditionSelector, element.toevoeging);
            helper.waitAndType(this.citySelector, element.stad);
            helper.waitAndType(this.streetSelector, element.straat);
            helper.waitAndType(this.emailSelector, element.email);
        });
    }

    clickOnVerderButton() {
        helper.waitAndClick(this.personalDetailsSelector);
    }
}

export const gegevensPage = new Data();