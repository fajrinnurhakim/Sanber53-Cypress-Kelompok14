const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        
        env: {
            BASE_URL: "https://magento.softwaretestingboard.com/",
            REGISTER_URL: "https://magento.softwaretestingboard.com/customer/account/create/",
        },

        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
        
    },
});
