/// <reference types="Cypress" />

import SignUpPage from "../page/SignUpPage";
import contanst from "../../fixtures/contanst.json"

beforeEach(() => {
  cy.visit(contanst.URL);
});

describe("Sign up ", () => {
    const signUpPage = new SignUpPage();
    //--------------------------------------------------------------------------------------
    specify("Sign up startup plan with API", () => {
      signUpPage.clickStartUpPlan();
      signUpPage.verifyURLCreateYourAccountPage();
      signUpPage.fillAllInfoAccount();
      signUpPage.clickCreateAccountButton();
      signUpPage.verifyURLCreateYourOranigationPage();
      signUpPage.fillInCompanyNameAndCompanyURL();
      signUpPage.clickContinueButton();
      signUpPage.verifyStartUpPlanBilling();
      signUpPage.clickAPIStartUpBox();
      signUpPage.fillInAllInfoPayMent();
      signUpPage.clickStartTrialButton();
      signUpPage.verifyUserInfo();
    });

    specify("Sign up free plan with API", () => {
      signUpPage.clickFreePlan();
      signUpPage.verifyURLCreateYourAccountPage();
      signUpPage.fillAllInfoAccount();
      signUpPage.clickCreateAccountButton();
      signUpPage.verifyURLCreateYourOranigationPage();
      signUpPage.fillInCompanyNameAndCompanyURL();
      signUpPage.clickContinueButton();
      signUpPage.verifyStartUpPlanBilling();
      signUpPage.clickAPIStartUpBox();
      signUpPage.fillInAllInfoPayMent();
      signUpPage.clickStartTrialButton();
      signUpPage.verifyUserInfo();
    });
  });