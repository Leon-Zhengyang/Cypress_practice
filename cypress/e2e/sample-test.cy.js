describe('Sample test', () => {
      it('check data', () => {
          cy.visit('test_cypress.html')
  
          cy.get('#input-email').type('dummy@email.com')
          cy.get('#select-role').select('管理者')
          cy.get('#submit').click()
          cy.get('#result-email').should('have.text', 'dummy@email.com')
          cy.get('#result-role').should('have.text', '管理者')
      })
  })