import proceedToCheckout from "../../support/pageObject/proceed-to-checkout";

describe("Proceed to Checkout", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Proceed To Checkout - Login First", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("rarafebbyy123@gmail.com", "Admin123!");
        cy.wait(5000);
        cy.get("a.action.showcart").click();
        cy.get("#top-cart-btn-checkout").click({ force: true });
        cy.wait(10000);
        cy.get(".button > span").click();
        cy.get("button.action.primary.checkout").click();
        cy.get("span.base").should("be.visible");
    });
});
