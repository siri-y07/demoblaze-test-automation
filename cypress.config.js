const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.demoblaze.com',
    specPattern: 'tests/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 12000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'tests/reports/.jsons',
    overwrite: false,
    html: false,
    json: true,
    quiet: true
  }
});