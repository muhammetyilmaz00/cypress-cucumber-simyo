import { controlePage } from '../../cypress/pageObjects/controlePage';
import { gegevensPage } from '../../cypress/pageObjects/gegevensPage';
import { nummerPage } from '../../cypress/pageObjects/nummerPage';
import { simOnlyPage } from '../../cypress/pageObjects/simOnlyPage';
import { simkaartPage } from '../../cypress/pageObjects/simkaartPage';
import { simyoHomePage } from '../../cypress/pageObjects/simyoHomePage';
import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Simyo website', () => {
    simyoHomePage.navigateToSimyoWebsite();
    simyoHomePage.clickAccepterenButtonOnCookies();
});

When('I click on Sim Only link', () => {
    simyoHomePage.clickOnSimOnly();
});

When('I click on Bestellen button', () => {
    simOnlyPage.clickOnBestellenButton();
});

When('I click Verder button in Simkaart step', () => {
    simkaartPage.clickOnVerderButton();
});

When('I click Verder button in Nummer step', () => {
    nummerPage.clickOnVerderButton();
});

When('I fill in all personal details in Gegevens step', (dataTable: DataTable) => {
    gegevensPage.fillPersonalDetails(dataTable);
});

When('I click Verder button in Gegevens step', () => {
    gegevensPage.clickOnVerderButton();
});

Then('I should see the personal details validated in Controle step', (dataTable: DataTable) => {
    const data = dataTable.hashes()[0];
    const persoonlijkeGegevens = `${data.aanhef} ${data.voornaam} ${data.achternaam}${data.email}${data.straat} ${data.huisnummer} ${data.toevoeging}${data.postcode} ${data.stad}`;
    controlePage.getSimkaartControleData().should("have.text", "Ik wil een fysieke simkaart");
    controlePage.getNummerbehoudControleData().should("have.text", "Ik wil een nieuw nummer");
    controlePage.getPersoonlijkeGegevens().should("have.text", persoonlijkeGegevens);
});
