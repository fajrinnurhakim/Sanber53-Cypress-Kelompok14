import viewAndUpdateCart from "../../support/pageObject/view-and-update-cart";

describe("View and update cart", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it.only("view and edit cart", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajrin123@gmail.com", "Fajrin123!");
        // View cart
        viewAndUpdateCart.addCart();
        viewAndUpdateCart.viewUpdate();
    });

    it("view and delete product", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajrin123@gmail.com", "Fajrin123!");
        // View cart
        viewAndUpdateCart.addCart();
        viewAndUpdateCart.viewDelete();
    });

    it("view cart when cart is empty", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajrin123@gmail.com", "Fajrin123!");
        // View cart
        viewAndUpdateCart.empetyCart();
    });
});
