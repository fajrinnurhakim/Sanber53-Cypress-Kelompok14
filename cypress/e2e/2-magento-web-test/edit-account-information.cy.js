import editAccountInformation from "../../support/pageObject/edit-account-information";

describe("Edit Account Information", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Edit Account Information - Success", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajarnugrahasugiarto@gmail.com", "Fajarns22");
        // customer menu
        cy.wait(1000);
        cy.get(".customer-name").first().click();
        cy.get(".customer-menu > .header.links > li:first-child > a")
            .first()
            .click();
        //edit account information
        cy.get(".box-account-information > .box-actions > .action > span").click();
        cy.get("#firstname").clear().type(editAccountInformation["firstname"]);
        cy.get("#lastname").clear().type(editAccountInformation["lastname"]);
        cy.get("#email").clear().type(editAccountInformation["email"]);
        cy.get("#password").clear().type(editAccountInformation["password"]);
        cy.get("#newpassword").clear().type(editAccountInformation["newpassword"]);
        cy.get("#confirmpassword").clear().type(editAccountInformation["confirmpassword"]);
        //button save
        cy.get(
            "#form-validate > .actions-toolbar > div.primary > .action"
        ).click();
        // verify success
        editAccountInformation.verifySuccess();
    });
});
