import chooseProduct from "../../support/pageObject/choose-product";

describe("choose-products", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Choose Product - Without Login", () => {
        // choose product
        chooseProduct.choose();
    });
    it("Choose Product - With Login", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("cek123@gmail.com", "Cek12345!");
        // choose product
        chooseProduct.choose();
    });
});
