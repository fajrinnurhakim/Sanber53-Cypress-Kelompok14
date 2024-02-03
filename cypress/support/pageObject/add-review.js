const addReviewData = require("../../fixtures/add-review-data.json");

class addReview {
    success() {
        // choose product
        cy.get('.product-item-link[title="Breathe-Easy Tank"]').click();
        // click add review
        cy.get("a.action.add").click({ multiple: true });
        // content attribute
        cy.wait(8000);
        cy.get('input[type="radio"][value="18"]').check({ force: true });
        cy.get("#nickname_field").clear().type(addReviewData["nickname_field"]);
        cy.get("#summary_field").clear().type(addReviewData["summary_field"]);
        cy.get("#review_field").clear().type(addReviewData["review_field"]);
        cy.get(".action.submit.primary").click();
        // message success
        cy.get(".message-success")
            .should("be.visible")
            .contains("You submitted your review for moderation");
    }
    required() {
        // choose product
        cy.get('.product-item-link[title="Breathe-Easy Tank"]').click();
        // click add review
        cy.get("a.action.add").click({ multiple: true });
        // content attribute
        cy.wait(8000);
        cy.get('input[type="radio"][value="19"]').check({ force: true });
        cy.get("#nickname_field").clear();
        cy.get("#summary_field").clear();
        cy.get("#review_field").clear();
        cy.get(".action.submit.primary").click();
        // message required
        cy.get("#nickname_field-error")
            .should("be.visible")
            .contains("This is a required field.");
        cy.get("#summary_field-error")
            .should("be.visible")
            .contains("This is a required field.");
        cy.get("#review_field-error")
            .should("be.visible")
            .contains("This is a required field.");
    }
}

export default new addReview();
