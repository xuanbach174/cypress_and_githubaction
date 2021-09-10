// /// <reference types = "Cypress-iframe"/>
// import 'cypress-iframe'

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
class BasePage {
    clickElement(elementLocator) {
      cy.get(elementLocator).click({ multiple: true, force: true });
    }
  
    sendKeyLocator(elementLocator, key) {
      cy.get(elementLocator).clear({force: true}).type(key, { force: true });
    }


    sendKeyIframeLocator(elementLocator,key){
      cy.get("#card-number > div > iframe").then($iframe => {

        const iframe = $iframe.contents();
        const myInput = iframe.find('#root > form > span:nth-child(4) > div > div.CardNumberField-input-wrapper > span > input')
        cy.wrap(myInput).type("99999999",{force: true});
      });
    }
  


    uploadFile(elementLocator, fileToUpload) {
      cy.get(elementLocator).attachFile(fileToUpload, {
        subjectType: "drag-n-drop",
      });
    }

    sendKeyLocatorInIframe(iframe, locator, key){
      cy.get(iframe).then($iframe => {

        const iframe = $iframe.contents();
        const myInput = iframe.find(locator)
        cy.wrap(myInput).type(key,{force: true});
      });
      }
  
    verifyIncludeUrl(url) {
      expect(cy.url().should("include", url));
    }
  
    verifyNotIncludeUrl(url) {
      expect(cy.url().should("not.include", url));
    }
  
    verifyElementVisibleByString(string) {
      expect(cy.contains(string, {timeout: 15000}).should("be.visible"));
    }
  
    verifyElementVisibleByLocator(locator) {
      expect(cy.get(locator, {timeout: 15000}).should("be.visible"));
    }

    stringRandom(text){
        let r = Math.random().toString(36).substring(7);
        let txt = text + r;
        return txt;
    }

    indexRandom(index){
      let r = Math.random().toString(9).substring(2,2+index);
      return r;
  }

    emailRandom(email){
        let r = Math.random().toString(36).substring(7);
        let txt = email + "+" + r + "@gmail.com"
        return txt
    }

    getExpiryDate(){
      var date = new Date();
      date.setMonth(date.getMonth() + 2);
      let prevExpiryDate = (date.getMonth() + 1)+ "/"  + (date.getFullYear())
      let expiry = prevExpiryDate.substring(0,2)+ prevExpiryDate.substring(5,7)
      return expiry
    }

    countLenghtLocator(locator){
      cy.get(locator).then(($el) =>{
        return ($el.find(locator).length) 
    })
    }

  }
  
export default BasePage;