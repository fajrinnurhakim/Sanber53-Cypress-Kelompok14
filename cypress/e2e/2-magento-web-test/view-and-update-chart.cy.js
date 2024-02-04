import viewAndUpdateChart from "../../support/pageObject/view-and-update-chart";

describe("View and update cart", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it.only("view and edit cart", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajrin123@gmail.com", "Fajrin123!");
        // View chart
        viewAndUpdateChart.addChart();
        viewAndUpdateChart.viewUpdate();
    });

    it("view and delete product", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajrin123@gmail.com", "Fajrin123!");
        // View chart
        viewAndUpdateChart.addChart();
        viewAndUpdateChart.viewDelete();
    });

    it("view cart when cart is empty", () => {
        cy.get('.authorization-link > a:contains("Sign In")').first().click();
        // login with command
        cy.loginCommand("fajrin123@gmail.com", "Fajrin123!");
        // View chart
        viewAndUpdateChart.empetyChart();
    });
});
