const chooseProductData = require("../../fixtures/choose-product-data.json");

class chooseProduct {
    choose() {
        // choose product
        cy.get(".product-item-link").eq(2).click();
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
}

export default new chooseProduct();
