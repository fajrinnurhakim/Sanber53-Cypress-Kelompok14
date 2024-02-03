const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        env: {
            BASE_URL: "https://magento.softwaretestingboard.com/",
            ACCOUNT_URL:
                "https://magento.softwaretestingboard.com/customer/account/login/",
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
