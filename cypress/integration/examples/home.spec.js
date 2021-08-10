
describe('My First Test', () => {
    it('Does not do much!1111', () => {
      cy.visit('https://web.staging.verbdata.app');
      cy.title().should('eq','Verb1111');
      
    })

    it('Does not do much!222222222', () => {
      cy.visit('https://web.staging.verbdata.app/#/login');
      cy.title().should('eq','Verb');
      
    })

    it('Does not do much!3333', () => {
      cy.visit('https://web.staging.verbdata.app/#/login');
      cy.title().should('eq','Verb');
      
    })
  })