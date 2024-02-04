class RegisterPage{
    firstregis = '.panel > .header > :nth-child(3) > a'
    fsn = '#firstname'
    lsn = '#lastname'
    mail = '#email_address'
    pass = '.account > .password'
    konfirmpas = '#password-confirmation'
    regis = '#form-validate > .actions-toolbar > div.primary > .action > span'
    urlRegis = 'https://magento.softwaretestingboard.com/customer/account/create/'
    PageFirst = 'https://magento.softwaretestingboard.com/customer/account/'

    ClickCA(){
        cy.get(this.firstregis).click()
    }

    VisitRegis(){
        cy.visit(this.urlRegis)
    }

    ClickBut(){
        cy.get(this.regis).click()
    }

    PageF(){
        cy.visit(this.PageFirst)
    }

}
export default new RegisterPage()