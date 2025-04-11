import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true,
        charts: true,
        reportPageTitle: 'Cypress Inline Reporter',
        embeddedScreenshots: true,
        inlineAssets: true,
    },
    e2e: {
        baseUrl: 'https://www.simyo.nl/',
        env: {
            hideXHRInCommandLog: true, // Enable hiding XHR logs
          },
        pageLoadTimeout: 10000,
        viewportHeight: 1028,
        viewportWidth: 1920,
        chromeWebSecurity: false,
        video: false,
        specPattern: "**/*.feature",
        async setupNodeEvents(
            on: Cypress.PluginEvents,
            config: Cypress.PluginConfigOptions
        ): Promise<Cypress.PluginConfigOptions> {
            await addCucumberPreprocessorPlugin(on, config);

            require('cypress-mochawesome-reporter/plugin')(on);

            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
            return config;
        },
    },
});
