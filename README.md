
# Cypress Simyo Project

This repository contains a Cypress project for automated testing using the Cypress testing framework with TypeScript. The project is designed to demonstrate various features of Cypress and includes integration with Cucumber for behavior-driven development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Report](#test-report)
- [Project Structure](#project-structure)
- [Configuration](#configuration)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/muhammetyilmaz00/cypress-cucumber-simyo.git

2. Navigate to the project directory:

   ```bash
   cd cypress-cucumber-simyo

3. Install project dependencies using npm:

   ```bash
   npm install

## Running Tests
To run the Cypress tests, use the following command:

```bash
npm run test
```

This will execute the Cypress tests in headless mode using the Chrome browser.

## Test Report
After running the tests, you can find the HTML test report in the following location:

```bash
cypress/reports/
```

## Project Structure

The project follows a standard Cypress project structure:

* cypress: Contains support files and page objects.
* features: Includes feature files and step definitions for Cucumber BDD.
* package.json: Configuration file with project metadata and dependencies.
* package-lock.json: Contains consistent dependencies to manage stability.
* cypress.config.ts: Cypress configuration file.
* tsconfig.json: Contains TypeScript configurations.
* github/workflows/cypress.yml: Contains CI/CD configurations
