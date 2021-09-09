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
  
    uploadFile(elementLocator, fileToUpload) {
      cy.get(elementLocator).attachFile(fileToUpload, {
        subjectType: "drag-n-drop",
      });
    }

    sendKeyLocatorInIframe(iframe, locator, key){
      // cy.get(iframe).then($a =>{
      //   cy.log($a.contents())
      // })
      cy
      .get(iframe)
      .should(iframe => expect(iframe.contents().find('body').to.exist)
      .then(iframe => cy.wrap(iframe.contents().find('body')))
      .within({}, $iframe => {
        cy.get(locator).type(key)
      }))
      // var iframe = document.getElementById(iframe);
      // var elmnt = iframe.contentWindow.document.get(locator);
      // elmnt.type(key)
  }
  
    verifyIncludeUrl(url) {
      expect(cy.url().should("include", url));
    }
  
    verifyNotIncludeUrl(url) {
      expect(cy.url().should("not.include", url));
    }
  
    verifyElementVisibleByString(string) {
      expect(cy.contains(string, {timeout: 20000}).should("be.visible"));
    }
  
    verifyElementVisibleByLocator(locator) {
      expect(cy.get(locator).should("be.visible"));
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
      return prevExpiryDate
    }

    countLenghtLocator(locator){
      cy.get(locator).then(($el) =>{
        return ($el.find(locator).length) 
    })
    }

  }
  
export default BasePage;