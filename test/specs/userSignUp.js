import { expect } from "chai";
import expected from './../../data/expected.json';
import { userLogin } from "../../helper/methods";
import testData from "../../data/testData.json";
import selectors from "../../data/selectors.json";

describe('USER SIGNUP', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('/');
    })
    it('01/SUP Should verify main page has correct title',  () => {
        expect(browser.getTitle()).to.equal(expected.titleName);
    });
    it('02/SUP Should verify User in on the main page',  () => {
        expect($(selectors.mainPage.globalLogo).isDisplayed()).true;
        expect($(selectors.mainPage.loginRegister).isDisplayed()).true;
    });
    it('03/SUP Should verify User is on the main page',  () => {
        expect($(selectors.mainPage.globalLogo).isDisplayed()).true;
        expect($(selectors.mainPage.loginRegister).isDisplayed()).true;
    });
    it('04/SUP Should verify SignUp page opens',  () => {
        $(selectors.mainPage.loginRegister).click();
        expect($(selectors.signInSignUp.h1).isDisplayed()).true;
        expect($(selectors.signInSignUp.h3New).isDisplayed()).true;
        expect($(selectors.signInSignUp.signUpBtn).isDisplayed()).true;
        $(selectors.signInSignUp.signUpBtn).click();
        expect($(selectors.newUser.createAcc).isDisplayed()).true;
    });
    it('05/SUP User should be able select language',  () => {
        $(selectors.newUser.selectLang).click();
        $(selectors.newUser.selectLang).click();
        expect($(selectors.newUser.selectLang)
                .getValue() === expected.signUp.language);
    });
    it('06/SUP Should verify Username IF accepts valid data',  () => {
        $(selectors.newUser.usernameIF)
                .setValue(testData.userSignUp.userName);
        expect($(selectors.newUser.usernameIF)
            .getValue() === testData.userSignUp.userName);
        expect($(expected.signUp.userNameErrorMessage).isDisplayed()).false;
    });
    it('07/SUP Should verify Passwords IFs accept valid data',  () => {
        $(selectors.newUser.passwordIF)
            .setValue(testData.userSignUp.password);
    });
});

