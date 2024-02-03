import addReview from "../../support/pageObject/add-review";

describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Add Review - success", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajrin123@gmail.com", "Fajrin123!");
        // Review
        addReview.success();
    });
    it("Add Review - required", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajrin123@gmail.com", "Fajrin123!");
        // Review
        addReview.required();
    });
});
