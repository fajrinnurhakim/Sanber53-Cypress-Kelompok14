import chooseProduct from "../../support/pageObject/choose-product";

describe("Choose Product", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it.only("Choose Product - With Login", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.get("#email").type("rarafebbyy123@gmail.com");
        cy.get("#pass").type("Admin123!");
        cy.get(".action.login.primary").click();
        // choose product
        chooseProduct.choose();
    });
    it("Choose Product - Without Login", () => {
        // choose product
        chooseProduct.choose();
    });
});
