
describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://www.nopcommerce.com/en/demo');
      cy.title().should('eq','Store Demo - nopCommerce');
      console.log('123');
    })
  })