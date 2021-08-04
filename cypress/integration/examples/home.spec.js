
describe('My First Test', () => {
    it('Does not do much!1111', () => {
      cy.visit('https://www.nopcommerce.com/en/demo');
      cy.title().should('eq','Store Demo - nopCommerce');
      console.log('123');
    })

    it('Does not do much!222222222', () => {
      cy.visit('https://www.nopcommerce.com/en/demo');
      cy.title().should('eq','Store Demo - nopCommerce');
      console.log('123');
    })

    it('Does not do much!3333', () => {
      cy.visit('https://www.nopcommerce.com/en/demo');
      cy.title().should('eq','Store Demo - nopCommerce');
      console.log('123');
    })
  })