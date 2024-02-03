const chooseProductData = require("../../fixtures/choose-product-data.json");

class proceedToCheckout {
    choose() {
        // choose product
        cy.get('.product-item-link[title="Breathe-Easy Tank"]').click();
        // content attribute
        cy.get('.swatch-option.text[option-label="M"]').click();
        cy.get('.swatch-option.color[option-label="Purple"]').click();
        cy.get("#qty").clear().type(chooseProductData["qty"]);
        // add to chart
        cy.get("button.action.tocart.primary").click();
        // message success
        cy.get(".message-success")
            .should("be.visible")
            .contains("You added Breathe-Easy Tank to your shopping cart");
    }

    proceed() {
        cy.wait(5000);
        cy.get("a.action.showcart").click();
        cy.get("#top-cart-btn-checkout").click({ force: true });
        cy.wait(12000);
        // cy.get(".action-auth-toggle").click();
        cy.loginCommandCheckout("fajrin123@gmail.com", "Fajrin123!");
        cy.wait(20000);
        cy.get("button.button.action.continue.primary").click();
        cy.get("button.action.primary.checkout").click();
        cy.get("span.base").should("be.visible");
    }
}

export default new proceedToCheckout();
