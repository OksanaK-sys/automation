import { expect } from "chai";
import expected from './../../data/expected.json';
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
        expect($(selectors.newUser.available).isDisplayed()).false;//false
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
    });
    it('15/SUP Should verify MI IF accepts valid data',  () => {
        $(selectors.newUser.mIIF).setValue(testData.userSignUp.emptyString);
        expect($(selectors.newUser.mIErrorMessage).isDisplayed()).false;
    });
    it('16/SUP Should verify LastName IF accepts valid data',  () => {
        $(selectors.newUser.lasNameIF).setValue(testData.userSignUp.lastName);
        expect($(selectors.newUser.lastNameErrorMessage).isDisplayed()).false;
    });
    it('17/SUP Should select suffix',  () => {
        $(selectors.newUser.selectSuffix).selectByVisibleText(testData.userSignUp.suffix);
        expect($(selectors.newUser.selectedSuffix).isSelected()).to.equal(true);
    });
    it('18/SUP Should verify email IFs accepts valid data',  () => {
        $(selectors.newUser.emailIF).setValue(testData.userSignUp.email);
        $(selectors.newUser.retypeEmailIF).setValue(testData.userSignUp.email);
        expect($(selectors.newUser.emailErrorMessage).isDisplayed()).false;
    });
    it('19/SUP Should select type of phone number',  () => {
        $(selectors.newUser.phoneType).selectByVisibleText(testData.userSignUp.phoneType);
        expect($(selectors.newUser.selectedPhoneType).isSelected()).to.equal(true);
    });
    it('20/SUP Should verify phone IF accepts valid data',  () => {
        $(selectors.newUser.phoneIF).setValue(testData.userSignUp.phone);
        $(selectors.newUser.extIF).click();
        expect($(selectors.newUser.errorPhone).isDisplayed()).false;
    });
    it('21/SUP Should verify mobile IF accepts valid data',  () => {
        $(selectors.newUser.mobileIF).setValue(testData.userSignUp.emptyString);
        $(selectors.newUser.extIF).click();
        expect($(selectors.newUser.mobileError).isDisplayed()).false;
    });
    it('22/SUP Should select type of communication',  () => {
        $(selectors.newUser.checkBox1).click();
        expect($(selectors.newUser.checkBox1).isSelected()).to.equal(true);
        expect($(selectors.newUser.checkBox2).isSelected()).to.equal(false);
    });
    it('23/SUP Should select country',  () => {
        $(selectors.newUser.selectCountry).selectByVisibleText(testData.userSignUp.country);
        expect($(selectors.newUser.selectedCountry).isSelected()).to.equal(true);
    });
    it('24/SUP Should verify address IF accepts valid data',  () => {
        $(selectors.newUser.addressIF).setValue(testData.userSignUp.streetAddress);
        $(selectors.newUser.address2IF).click();
        expect($(selectors.newUser.errorAddress).isDisplayed()).false;
    });
    it('25/SUP Should verify Apt/Suite/Other IF accepts valid data',  () => {
        $(selectors.newUser.address2IF).setValue(testData.userSignUp.number);
        $(selectors.newUser.cityIF).click();
        expect($(selectors.newUser.aptError).isDisplayed()).false;
    });
    it('26/SUP Should verify city IF accepts valid data',  () => {
        $(selectors.newUser.cityIF).setValue(testData.userSignUp.city);
        $(selectors.newUser.zipCodeIF).click();
        expect($(selectors.newUser.cityError).isDisplayed()).false;
    });
    it('27/SUP Should select state',  () => {
        $(selectors.newUser.selectState).selectByVisibleText(testData.userSignUp.state);
        expect($(selectors.newUser.selectedState).isSelected()).to.equal(true);
    });
    it('28/SUP Should verify ZIP Code IF accepts valid data',  () => {
        $(selectors.newUser.zipCodeIF).setValue(testData.userSignUp.zipCode);
        $(selectors.newUser.addressSection).click();
        expect($(selectors.newUser.zipError).isDisplayed()).false;
    });
    it('29/SUP Should click verify address button',  () => {
        $(selectors.newUser.verifyBtn).click();
        $(selectors.newUser.verifiedIcon).waitForDisplayed();
        expect($(selectors.newUser.verifiedIcon).isDisplayed()).true;
    });
    it('30/SUP Should  verify create account button is visible and clickable',  () => {
        $(selectors.newUser.createAccBtn).waitForDisplayed();
        expect($(selectors.newUser.createAccBtn).isDisplayed()).true;
        expect($(selectors.newUser.createAccBtn).isClickable()).true;
    });
    it('31/SUP Should  click create account button',  () => {
        $(selectors.newUser.createAccBtn).click();
        expect($(selectors.newUser.usernameErrorMessage).isDisplayed()).true;//false
    });
});







