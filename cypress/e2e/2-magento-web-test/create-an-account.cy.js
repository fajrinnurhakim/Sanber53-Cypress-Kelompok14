import RegisterPage from "../../support/pageObject/register-page";
describe("Create An Account", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Register New Acc_firstnamenotfill_Negative", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn);
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy123@gmail.com");
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get(RegisterPage.konfirmpas).type("Admin123!");
        RegisterPage.ClickBut();
        cy.get("#firstname-error");
    });

    it("Register New Acc_Lastnamenotfill_Negative", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn);
        cy.get(RegisterPage.mail).type("rarafebbyy123@gmail.com");
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get(RegisterPage.konfirmpas).type("Admin123!");
        RegisterPage.ClickBut();
        cy.get("#lastname-error");
    });

    it("Register New Acc_Emailnotfill_Negative", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail);
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get(RegisterPage.konfirmpas).type("Admin123!");
        RegisterPage.ClickBut();
        cy.get("#email_address-error");
    });

    it("Register New Acc_EmailFillbutwrong_Negative", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy56@gmail.");
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get(RegisterPage.konfirmpas).type("Admin123!");
        RegisterPage.ClickBut();
        cy.get("#email_address-error");
    });

    it("Register New Acc_MeterPass_Positif", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy56@gmail.");
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get("#password-strength-meter");
    });

    it("Register New Acc_MeterKonfirPass_Positif", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy56@gmail.");
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get("#password-strength-meter");
        cy.get(RegisterPage.konfirmpas).type("Admin123!");
        cy.get("#password-strength-meter");
    });

    it("Register New Acc_Passnotfill_Negative", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy123@gmail.com");
        cy.get(RegisterPage.pass);
        cy.get(RegisterPage.konfirmpas);
        RegisterPage.ClickBut();
        cy.get("#password-strength-meter");
        cy.get("#password-error");
        cy.get("#password-confirmation-error");
    });

    it("Register New Acc_Passnotstrong_Negative", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy123@gmail.com");
        cy.get(RegisterPage.pass).type("Admin");
        cy.get(RegisterPage.konfirmpas).type("Admin");
        RegisterPage.ClickBut();
        cy.get("#password-strength-meter");
        cy.get("#password-error");
    });

    it("Register New Acc_PassStrongButNotfillPassConfirm_Negative", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy123@gmail.com");
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get(RegisterPage.konfirmpas);
        RegisterPage.ClickBut();
        cy.get("#password-confirmation-error");
    });

    it("Register New Acc_PassConfirmnotSame_Negative", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy123@gmail.com");
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get(RegisterPage.konfirmpas).type("Admin123");
        RegisterPage.ClickBut();
        cy.get("#password-confirmation-error");
    });

    it("Register New Acc_Success_Positif", () => {
        RegisterPage.ClickCA();
        RegisterPage.VisitRegis();
        cy.get(RegisterPage.fsn).type("Febby");
        cy.get(RegisterPage.lsn).type("Testing");
        cy.get(RegisterPage.mail).type("rarafebbyy123@gmail.com");
        cy.get(RegisterPage.pass).type("Admin123!");
        cy.get(RegisterPage.konfirmpas).type("Admin123!");
        RegisterPage.ClickBut();
        RegisterPage.PageF();
    });
});
