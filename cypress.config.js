const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://magento.softwaretestingboard.com/",
        Register_URL: "https://magento.softwaretestingboard.com/customer/account/create/",
        env: {
            Firstname: "febby",
            Lastname: "testing",
            email: "rarafebby56@gmail.com"
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
