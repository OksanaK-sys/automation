import { expect } from "chai";
import expected from './../../data/expected.json';
import { userLogin } from "../../helper/methods";
import testData from "../../data/testData.json";
import selectors from "../../data/selectors.json";

describe('USER LOGIN', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('/');
    })
    it('01/LP Should verify Login page has correct title',  () => {
        expect(browser.getTitle()).to.equal(expected.titleName);
    });
    it('02/LP Should verify user can log in with valid credentials',  () => {
        userLogin(testData.userLogin.loginName253, testData.userLogin.password253);
        expect($(selectors.login.homeBtn).isExisting()).to.equal(true);
        expect($(selectors.navigationBar.userProfile)
            .getText()
            .includes(testData.userLogin.loginName253.toUpperCase()))
            .true;
    });
});
