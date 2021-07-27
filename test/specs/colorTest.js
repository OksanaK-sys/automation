import { expect } from "chai";
import expected from './../../data/expected.json';
import { userLogin } from "../../helper/methods";
import testData from "../../data/testData.json";
import selectors from "../../data/selectors.json";


describe('USER SIGNUP', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('/');
    });
    it('04/SUP Should verify SignUp page opens',  () => {
        $(selectors.mainPage.loginRegister).click();
        expect($(selectors.signInSignUp.h1).isDisplayed()).true;
        expect($(selectors.signInSignUp.h3New).isDisplayed()).true;
        expect($(selectors.signInSignUp.signUpBtn).isDisplayed()).true;
        $(selectors.signInSignUp.signUpBtn).click();
        expect($(selectors.newUser.createAcc).isDisplayed()).true;
    });
    it('07/SUP Should verify Passwords IFs accept valid data',  () => {
        $(selectors.newUser.passwordIF)
            .setValue(testData.userSignUp.wrongPassword);
        browser.pause(3000);
        $(selectors.newUser.retypePasswordIF)
            .setValue(testData.userSignUp.wrongPassword2);
        browser.pause(3000);
        // expect(browser.getElementCSSValue("#for-tPassword", 'color')
        //     === '#a94442').true;
        const element = document.querySelector('.control-label ');
        const style = getComputedStyle(element);
        const color = style.color
        $(selectors.newUser.usernameIF).setValue(color);
        browser.pause(5000);
    });
});