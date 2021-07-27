import selectors from "./../data/selectors.json"
import {expect} from "chai";

export function userLogin(username, password) {
    $(selectors.login.loginIF).setValue(username);
    $(selectors.login.passwordIF).setValue(password);
    $(selectors.login.singInBtn).click();
}
export function getExpectedValues(value){

       const expectedValues = [];
        let  valueInt = parseInt(value);
           if(valueInt >= 0 && valueInt <= 4194303){
               expectedValues.push(String(valueInt));
              for (let i = 1; i < 10; i++) {
                  valueInt = valueInt * 2;
                  expectedValues.push(String(valueInt));
              }
              return  expectedValues;
          }
           return  null;
}

export function reset() {
    $(selectors.navigationBar.userProfile).click();
    waitForAnimation($(selectors.navigationBar.resetAll));
    $(selectors.navigationBar.resetAll).click();
}

export function getRowCount() {
    if ($(selectors.common.entityCarBody).getText() === "")
        return 0;
    else return $$(selectors.common.recordsRows).length;
}

export function getRecordsCount(){
    const recordsLine = $(selectors.parent.resultLine).getText().split(' ')
        .filter(el => Number(+el));
    return recordsLine[2];
}
export function getRecycleBinRecordCount() {
    if (!$(selectors.navigationBar.recycleBinNotification).isExisting) return 0;
    return parseInt($(selectors.navigationBar.recycleBinNotification)
        .getText());
}

export function waitForAnimation(element) {
    element.waitForExist();

    let animating = true;
    let preLoc = element.getLocation();

    while(animating){
        browser.pause(75);
        let postLoc = element.getLocation();
        if( preLoc.x === postLoc.x &&
            preLoc.y === postLoc.y )
        {
            animating = false;
        }

        let spread = [postLoc.x - preLoc.x, postLoc.y - preLoc.y]
        console.log(`WaitForAnimation: Spread x: ${spread[0]};
        Spread y: ${spread[1]}`)

        preLoc = postLoc;
    }
    console.log('WaitForAnimation: Done')
    return true;
}

function clickActionMenu(number) {
    let actionButton = `//tbody/tr[${number}]//button`;
    $(actionButton).click();
}

function clickActionMode(mode, number) {
    if (number === 0) {
        number = $$(selectors.common.recordsRows).length;
    }
    clickActionMenu(number);
    let modeButton = `//tbody/tr[${number}]//a[contains(text(), '${mode}')]`
    waitForAnimation($(modeButton));
    $(modeButton).click();
}

export function clickActionView(number = 0) {
    clickActionMode('view', number);
}

export function clickActionEdit(number = 0) {
    clickActionMode('edit', number);
}

export function clickActionDelete(number = 0) {
    clickActionMode('delete', number);
}

export function checkRecordActualData(expectedData, number = 0) {
    if (number === 0) {
        number = $$(selectors.common.recordsRows).length;
    }
    let actualData = `//tbody/tr[${number}]/td[@class='pa-list-table-th']`
    if (expectedData.length !== $$(actualData).length)
        return false;

    for(let el = 0; el < expectedData.length; el++){
        if (!expect($$(actualData)[el]
            .getText()).to.equal(expectedData[el])) return false;
    }
    return true;
}

export function checkActualData(expectedData, actualData) {
    for(let el = 0; el < expectedData.length; el++){
       if (expectedData[el] !== (actualData[el].getText())) return false;
    }
    return true;
}

export function setValueAfterClear(selector, value) {
    selector.click();
    selector.clearValue();
    selector.setValue(value);
}

export function scrollLeftAndClick(selector) {
    selector.scrollIntoView({inline: "end"});
    selector.click();
}

