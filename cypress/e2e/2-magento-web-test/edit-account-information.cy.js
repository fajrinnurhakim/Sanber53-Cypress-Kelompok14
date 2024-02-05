describe("Edit Account Information", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Edit Account Information - Success", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajarnugrahasugiarto@gmail.com", "Fajarns22");
        // cy.loginCommand("fajarnug@gmail.com", "Fajarns22");
        // customer menu
        cy.wait(1000);
        cy.get(".customer-name").first().click();
        cy.get(".customer-menu > .header.links > li:first-child > a")
            .first()
            .click();
        //edit account information
        cy.contains(".box-actions a", "Edit").click();
        cy.get("#firstname").clear().type("Fajar");
        cy.get("#lastname").clear().type("Nugraha S");
        cy.get("#change-email.checkbox").click();
        cy.wait(1000);
        // cy.get("#email").clear().type("fajarnugrahasugiarto@gmail.com");
        cy.get("#email").clear().type("fajarnug@gmail.com");
        cy.get("#current-password").clear().type("Fajarns22");
        //button save
        cy.get("button.action.save.primary").click();
        // verify success
        cy.get(".messages .message-success")
            .should("be.visible")
            .contains("You saved the account information.");
    });
});