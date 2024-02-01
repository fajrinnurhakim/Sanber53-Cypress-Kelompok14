const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        env: {
            BASE_URL: "https://magento.softwaretestingboard.com/",
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 5000,
        requestTimeout: 12000,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
