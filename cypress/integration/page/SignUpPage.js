import BasePage from "./basePage";
import locator from "../../fixtures/locator"
import contanst from "../../fixtures/contanst.json"

class SignUpPage extends BasePage {

    constructor(){
        super();
    }
    
    clickStartUpPlan(){
        this.clickElement(locator.selectPlanStartup);
    }
    // Create account ===============================
    fillFirstName(){
        let firstName = this.stringRandom("dao")
        this.sendKeyLocator(locator.firstNameField, firstName);
    }

    fillLastName(){
        let lastName = this.stringRandom("nghia")
        this.sendKeyLocator(locator.lastNameField, lastName);
    }

    fillEmailAddress(){
        let emailAddress = this.emailRandom(contanst.emailAddress)
        this.sendKeyLocator(locator.emailAddressField, emailAddress);
    }

    fillPassword(){
        this.sendKeyLocator(locator.passwordField, contanst.password)
    }

    fillConfirmPassword(){
        this.sendKeyLocator(locator.confirmPasswordField, contanst.password)
    }

    fillAllInfoAccount(){
        this.fillFirstName();
        this.fillLastName();
        this.fillEmailAddress();
        this.fillPassword();
        this.fillConfirmPassword();
    }

    clickCreateAccountButton(){
        this.clickElement(locator.createAccountButton)
    }
    // Create account end ===============================

    // Create organization ===============================

    fillInCompanyName(){
        this.sendKeyLocator(locator.companyName, contanst.companyName)
    }

    fillInCompanyURL(){
        this.sendKeyLocator(locator.companyURLField, contanst.companyURL)
    }

    fillInCompanyNameAndCompanyURL(){
        this.fillInCompanyName();
        this.fillInCompanyURL();
    }

    clickContinueButton(){
        this.clickElement(locator.continueButton)
    }
    // Create organization end ===============================

    // Create organization ===============================

    fillInStreetAddressField(){
        this.sendKeyLocator(locator.streetAddressField, "testAddress")
    }

    fillInAptSuiteField(){
        this.sendKeyLocator(locator.aptsuiteField, "testAddress")
    }

    fillInCityField(){
        this.sendKeyLocator(locator.cityField, "testAddress")
    }

    fillInState(){
        this.clickElement(locator.state_dropdown)
        let index = Math.floor(Math.random() * 52) + 1;
        this.clickElement(locator.item_state(index))
    }

    fillInZipCodeField(){
        this.sendKeyLocator(locator.zipCodeField, this.indexRandom(5))
    }

    fillInNameOnCardField(){
        this.sendKeyLocator(locator.nameOnCardField, "test")
    }

    fillInPhoneNumberField(){
        this.sendKeyLocator(locator.phoneNumberField, this.indexRandom(12))
    }
    
    fillInCreditCardNumberField(){
        this.sendKeyIframeLocator(
            locator.creditCardNumber,parseInt(contanst.creditCardNumber))
    }

    fillInCvvField(){
        this.sendKeyLocator(locator.cvvField, this.indexRandom(3))
    }

    fillInExpiryField(){
        this.clickElement(locator.expiryField)
        this.sendKeyLocator(locator.expiryField, this.getExpiryDate())
    }

    fillInPostalCodeField(){
        this.sendKeyLocator(locator.postalCodeField, this.indexRandom(5))
    }

    clickStartTrialButton(){
        this.clickElement(locator.startTrialButton)
    }

    fillInAllInfoPayMent(){
        this.fillInStreetAddressField()
        this.fillInAptSuiteField()
        this.fillInCityField()
        this.fillInState()
        this.fillInZipCodeField()
        this.fillInNameOnCardField()
        this.fillInPhoneNumberField()
        this.fillInCreditCardNumberField()
        this.fillInCvvField()
        this.fillInExpiryField()
        this.fillInPostalCodeField()
    }

    clickAPIStartUpBox(){
        this.clickElement(locator.apiStartupBox)
        this.clickContinueButton()
        this.verifyElementVisibleByString(contanst.paymentMethodTitle)
    }

    verifyURLCreateYourAccountPage(){
        this.verifyIncludeUrl(contanst.URLCreateYourAccount)
    }

    verifyURLCreateYourOranigationPage(){
        this.verifyElementVisibleByString(contanst.organizationTitle)
        this.verifyIncludeUrl(contanst.URLCreateYourOranigation)
    }

    verifyStartUpPlanBilling(){
        this.verifyElementVisibleByString(locator.planBillingTitle)
    }


    
}

export default SignUpPage;