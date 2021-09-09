/// <reference types="Cypress" />

import SignUpPage from "../page/SignUpPage";
import contanst from "../../fixtures/contanst.json"

// Cypress.on("uncaught:exception", (err, runnable) => {
//   return false;
// });

beforeEach(() => {
  cy.visit(contanst.URL);
});

describe("Sign up ", () => {
    const signUpPage = new SignUpPage();
  
    //--------------------------------------------------------------------------------------
    specify("Sign up startup with API", () => {
      signUpPage.clickStartUpPlan();
      signUpPage.verifyURLCreateYourAccountPage();
      signUpPage.fillAllInfoAccount();
      signUpPage.clickCreateAccountButton();
      signUpPage.verifyURLCreateYourOranigationPage();
      signUpPage.fillInCompanyNameAndCompanyURL();
      signUpPage.clickContinueButton();
      signUpPage.clickAPIStartUpBox();
      signUpPage.fillInAllInfoPayMent();
      signUpPage.clickStartTrialButton();
    });
  });