import editAddress from "../../support/pageObject/edit-address";
const addressData = require("../../fixtures/edit-address-data.json");
("../../fixtures/edit-address-data.json");

describe("Edit Address", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Edit Billing Address - Success", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("cek123@gmail.com", "Cek12345!");
        // customer menu
        cy.wait(1000);
        cy.get(".customer-name").first().click();
        cy.get(".customer-menu > .header.links > li:first-child > a")
            .first()
            .click();
        //edit billing address
        cy.get(".box-billing-address > .box-actions > .action > span").click();
        cy.get("#firstname").clear().type(addressData["firstname"]);
        cy.get("#lastname").clear().type(addressData["lastname"]);
        cy.get("#company").clear().type(addressData["company"]);
        cy.get("#telephone").clear().type(addressData["telephone"]);
        cy.get("#street_1").clear().type(addressData["street_1"]);
        cy.get("#city").clear().type(addressData["city"]);
        cy.get("#country").select(addressData["country"]);
        cy.get("#region").clear().type(addressData["region"]);
        cy.get("#zip").clear().type(addressData["zip"]);
        //button save
        cy.get(
            "#form-validate > .actions-toolbar > div.primary > .action"
        ).click();
        // verify success
        editAddress.verifySuccess();
    });

    it("Edit Billing Address - Required Field", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("cek123@gmail.com", "Cek12345!");
        // customer menu
        cy.wait(1000);
        cy.get(".customer-name").first().click();
        cy.get(".customer-menu > .header.links > li:first-child > a")
            .first()
            .click();
        //edit billing address
        editAddress.clearBillingAddress();
        //button save
        cy.get(
            "#form-validate > .actions-toolbar > div.primary > .action"
        ).click();
        // required field
        editAddress.requiredField();
    });

    it("Edit Shipping Address - Success", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("cek123@gmail.com", "Cek12345!");
        // customer menu
        cy.wait(1000);
        cy.get(".customer-name").first().click();
        cy.get(".customer-menu > .header.links > li:first-child > a")
            .first()
            .click();
        //edit shipping address
        editAddress.editShippingAddress();
        //button save
        cy.get(
            "#form-validate > .actions-toolbar > div.primary > .action"
        ).click();
        //verify success
        editAddress.verifySuccess();
    });

    it("Edit Shipping Address - Required Field", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("cek123@gmail.com", "Cek12345!");
        // customer menu
        cy.wait(1000);
        cy.get(".customer-name").first().click();
        cy.get(".customer-menu > .header.links > li:first-child > a")
            .first()
            .click();
        //edit shipping address
        editAddress.clearShippingAddress();
        //button save
        cy.get(
            "#form-validate > .actions-toolbar > div.primary > .action"
        ).click();
        //requiredField
        editAddress.requiredField();
    });
});
