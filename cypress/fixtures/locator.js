class locator {
    static selectPlanStartup = ":nth-child(2) > .box-boundary-6qw > .overview > .btn-control-6qw > button"
    static selectFeePlan = ":nth-child(1) > .box-boundary-6qw > .overview > .btn-control-6qw > button"

    static firstNameField = ":nth-child(1) > .label-input > input"
    static lastNameField = ":nth-child(2) > .label-input > input"
    static emailAddressField = ":nth-child(3) > .label-input > input"
    static passwordField = ":nth-child(4) > .label-input > input"
    static confirmPasswordField = ":nth-child(5) > .label-input > input"
    static createAccountButton = "button"

    static companyName = ":nth-child(1) > .label-input > input"
    static companyURLField = ":nth-child(2) > .label-input > input"
    static continueButton = "button"

    static apiStartupBox = "div[class='option box-content-6qw inactive'] > div > div[class='title']"

    static streetAddressField= ":nth-child(3) > .label-input > input"
    static aptsuiteField = ":nth-child(4) > .label-input > input"
    static cityField =":nth-child(5) > .label-input > input"
    static state_dropdown = ".toggle > input"
    static items_state = "div.item"
    static item_state (index){
        return `div.item:nth-child(${index})`
    }

    static zipCodeField =":nth-child(7) > .label-input > input"
    static phoneNumberField ="input[placeholder='Phone Number']"
    static nameOnCardField =".payment-method > :nth-child(2) > .label-input > input"
    static cardNumberIframe = "#card-number > div > iframe"
    static creditCardNumber = "#root > form > span:nth-child(4) > div > div.CardNumberField-input-wrapper > span > input"
    static expiryIframe = "#card-expiry > div > iframe"
    static cvviframe = "#card-cvv > div > iframe"
    static cvvField = "#root > form > span:nth-child(4) > span > input[name='cvc']"
    static expiryField = "#root > form > span:nth-child(4) > span > input[name='exp-date']"
    static postalCodeField = ":nth-child(2) > .basic-input-3fv input"
    static startTrialButton = 'div.btn-control-6qw > button'

    static userInfo = 'div[class="user-info"]'
}

export default locator;