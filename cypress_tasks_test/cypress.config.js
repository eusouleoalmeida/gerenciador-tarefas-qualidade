const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7v4p5c',
  e2e: {
    baseUrl: "http://localhost:5000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});