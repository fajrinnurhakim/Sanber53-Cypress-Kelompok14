class editAddress {
    clearBillingAddress() {
        cy.get(".box-billing-address > .box-actions > .action > span").click();
        cy.get("#firstname").clear();
        cy.get("#lastname").clear();
        cy.get("#company").clear();
        cy.get("#telephone").clear();
        cy.get("#street_1").clear();
        cy.get("#city").clear();
        cy.get("#country").select("");
        cy.get("#region").clear();
        cy.get("#zip").clear();
    }
    editShippingAddress() {
        cy.get(".box-shipping-address > .box-actions > .action > span").click();
        cy.get("#firstname").clear().type("Fajrin");
        cy.get("#lastname").clear().type("Nurhakim");
        cy.get("#company").clear().type("Sventh Group");
        cy.get("#telephone").clear().type("082324502000");
        cy.get("#street_1").clear().type("Cimanggu");
        cy.get("#city").clear().type("Cilacap");
        cy.get("#country").select("Indonesia");
        cy.get("#region").clear().type("Jawa Tengah");
        cy.get("#zip").clear().type("53256");
    }
    clearShippingAddress() {
        cy.get(".box-shipping-address > .box-actions > .action > span").click();
        cy.get("#firstname").clear();
        cy.get("#lastname").clear();
        cy.get("#company").clear();
        cy.get("#telephone").clear();
        cy.get("#street_1").clear();
        cy.get("#city").clear();
        cy.get("#country").select("");
        cy.get("#region").clear();
        cy.get("#zip").clear();
    }
    verifySuccess() {
        cy.get('.message-success[data-ui-id="message-success"]').should(
            "contain",
            "You saved the address."
        );
    }
    requiredField() {
        cy.get("#firstname-error")
            .should("be.visible")
            .and("contain", "This is a required field.");
        cy.get("#lastname-error")
            .should("be.visible")
            .and("contain", "This is a required field.");
        cy.get("#telephone-error")
            .should("be.visible")
            .and("contain", "This is a required field.");
        cy.get("#street_1-error")
            .should("be.visible")
            .and("contain", "This is a required field.");
        cy.get("#city-error")
            .should("be.visible")
            .and("contain", "This is a required field.");
        cy.get("#country-error")
            .should("be.visible")
            .and("contain", "Please select an option.");
    }
}

export default new editAddress();
