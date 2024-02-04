describe('login test', () => {
  it('fail login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get('#email').type('test_1@yop.com')
    cy.get('#pass').type(63636)
    cy.get('.action.login.primary').click()
    cy.get('.message-error')

   })
})