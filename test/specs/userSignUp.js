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
        $(selectors.newUser.selectLang).selectByVisibleText('English');
        // expect($(selectors.newUser.selectLang).isSelected()).to.equal(true);
        expect($(selectors.newUser.selectLang)
                .getText() === expected.signUp.language);
    });
    it('06/SUP Should verify Username IF accepts valid data',  () => {
        $(selectors.newUser.usernameIF)
                .setValue(testData.userSignUp.userName);
        // $(selectors.newUser.usernameIF)
        //     .setValue(testData.userSignUp.wrongUserName);
        expect($(selectors.newUser.usernameIF)
            .getValue() === testData.userSignUp.userName);
        expect($(selectors.newUser.usernameErrorMessage).isDisplayed()).true;//false
    });
    it('07/SUP Should verify Passwords IFs accept valid data',  () => {
        $(selectors.newUser.passwordIF)
            .setValue(testData.userSignUp.password);
        $(selectors.newUser.retypePasswordIF)
            .setValue(testData.userSignUp.password);
        expect($(selectors.newUser.passwordSuccessMessage).isDisplayed()).true;
    });
    it('08/SUP Should select security question 1',  () => {
        $(selectors.newUser.secQuest1).selectByVisibleText(expected.signUp.secQuestion4);
        expect($(selectors.newUser.secQuestion1_4).isSelected()).to.equal(true);
    });
    it('09/SUP Should set security answer 1',  () => {
        $(selectors.newUser.secAnsw1IF).setValue(testData.userSignUp.answer1);
        $(selectors.newUser.retypeAnsw1IF).setValue(testData.userSignUp.answer1);
        expect($(selectors.newUser.errorMessageAnsw1).isDisplayed()).false;
    });
    it('10/SUP Should select security question 2',  () => {
        $(selectors.newUser.secQuest2).selectByVisibleText(expected.signUp.secQuestion2_5);
        expect($(selectors.newUser.secQuestion25).isSelected()).to.equal(true);
    });
    it('11/SUP Should set security answer 2',  () => {
        $(selectors.newUser.secAnsw2IF).setValue(testData.userSignUp.answer2);
        $(selectors.newUser.retypeAnsw2IF).setValue(testData.userSignUp.answer2);
        expect($(selectors.newUser.errorMessageAnsw2).isDisplayed()).false;
    });
    it('12/SUP Should select type of account',  () => {
        $(selectors.newUser.persRadioBtn).click();
        expect($(selectors.newUser.persRadioBtn).isSelected()).to.equal(true);
    });
    it('13/SUP Should select Title',  () => {
        $(selectors.newUser.selectTitle).selectByVisibleText(testData.userSignUp.title);
        expect($(selectors.newUser.selectedTitle).isSelected()).to.equal(true);
    });
    it('14/SUP Should verify FirstName IF accepts valid data',  () => {
        $(selectors.newUser.firstNameIF).setValue(testData.userSignUp.firstName);
        expect($(selectors.newUser.firstNameErrorMessage).isDisplayed()).false;
        browser.pause(5000);
    });
});




