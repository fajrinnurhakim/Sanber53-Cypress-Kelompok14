const chooseProductData = require("../../fixtures/choose-product-data.json");

class viewAndUpdateChart {
    empetyChart() {
        cy.get("a.action.showcart").click();
        cy.get("div.cart-empty").should("be.visible");
    }

    addChart() {
        cy.get('.product-item-link[title="Breathe-Easy Tank"]').click();
        // content attribute
        cy.get('.swatch-option.text[option-label="M"]')
            .click()
            .should("have.attr", "aria-checked", "true");
        cy.get('.swatch-option.color[option-label="Purple"]').click();
        cy.get("#qty").clear().type(chooseProductData["qty"]);
        cy.get("button.action.tocart.primary").click();
    }

    viewUpdate() {
        cy.wait(5000);
        cy.get("a.action.showcart").click();
        cy.get("a.action.viewcart").click();
        cy.url().should(
            "eq",
            "https://magento.softwaretestingboard.com/checkout/cart/"
        );
        cy.get("a.action-edit").click();
        cy.get("#qty.input-text").clear().type(2);
        cy.get(".actions #product-updatecart-button").click();
        cy.get(".message-success").should("be.visible");
    }

    viewDelete() {
        cy.wait(5000);
        cy.get("a.action.showcart").click();
        cy.get("a.action.viewcart").click();
        cy.get("a.action-delete").click();
        cy.get("div.cart-empty").should("be.visible");
    }
}

export default new viewAndUpdateChart();
