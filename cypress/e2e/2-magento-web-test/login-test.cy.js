describe('login test', () => {
  beforeEach(()=> {
     cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')      
 })
  it('positive login', () => {
    cy.get('#email').type('mafrizal@g.com')
    cy.get('#pass').type('Cek081330')
    cy.get('.action.login.primary').click()
 })
  it('negative login password', () => {
    cy.get('#email').type('mafrizal@g.com')
    cy.get('#pass').type('89829')
    cy.get('.action.login.primary').click()
    cy.get('.note')
 })
  it('negative login email note', () => {
    cy.get('#email').type('mafri@g.com')
    cy.get('#pass').type('89829')
    cy.get('.action.login.primary').click()
    cy.get('.note')
  })
  it('negative login message-error', () => {
    cy.get('#email').type('mafri@g.com')
    cy.get('#pass').type('89829')
    cy.get('.action.login.primary').click()
    cy.get('.message-error')
  })
   it('negative login', () => {
    cy.get('#email').type('mafrizal@g.com')
    cy.get('#pass').type('Cek0')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click();
  })
})