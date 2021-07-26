const {
    test_el_is_visible, test_el_is_text, elWait, 
} = require("../lib/fn");
const { pageLogin } = require(`../lib/loginPage/selectors`);
const { pageRestore } = require(`../lib/restorePage/selectors`);


beforeAll(async() => {
    await browser.manage().deleteAllCookies();
    await browser.get(__DS__.url());
});

describe("Authorization", () => {

    test("Unable to login with invalid data", async() => {
        await elWait(l(pageLogin.authorizationBlock()));
        await el(l(pageLogin.emailInputField())).sendKeys("randomdomain");
        await el(l(pageLogin.passwordInputField())).sendKeys("randompassword");
        await el(l(pageLogin.loginBtn())).click();
        await elWait(l(pageLogin.authorizationBlock()));
        await test_el_is_visible(l(pageLogin.authorizationBlock()));
    });

    test("The restore page is opened after click on 'Не получается войти?'", async() => {
        await el(l(pageLogin.restorePasswordBtn())).click();
        await elWait(l(pageRestore.restoreByBlock()));
        await test_el_is_visible(l(pageRestore.restoreByBlock()));
    });

    test("The restore by number module is opened after click on 'Телефон'", async() => {
        await el(l(pageRestore.restoreByNumberBtn())).click();
        await elWait(l(pageRestore.restoreByNumberModule()));
        await test_el_is_text(l(pageRestore.restoreByNumberTitle()), "Укажите телефон");
    });

});
