import { simyoHomePage } from "../pageObjects/simyoHomePage";

// Runs once before all tests in the suite
before(() => {
  cy.log('Test suite setup: tests started...');
});

// Runs before each test
beforeEach(() => {
  cy.log('Test scenario started...');  
});

// Runs after each test
afterEach(() => {
  cy.log('Test scenario finished...');
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Runs once after all tests in the suite
after(() => {
  cy.log('Test suite teardown: tests finished...');
});
