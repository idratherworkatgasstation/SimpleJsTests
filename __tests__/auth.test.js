const { test_el_is_visible, test_el_is_text, elWait } = require("../lib/fn");
const { pageLogin } = require(`../lib/loginPage/selectors`);
const { pageRestore } = require(`../lib/restorePage/selectors`);

beforeAll(async () => {
  await browser.manage().deleteAllCookies();
  await browser.get(__DS__.url());
});

describe("Authorization", () => {
  describe("Unable to login with invalid data", () => {
    beforeAll(async () => {
      await elWait(l(pageLogin.authorizationBlock()));
      await el(l(pageLogin.emailInputField())).sendKeys("randomdomain");
      await el(l(pageLogin.passwordInputField())).sendKeys("randompassword");
      await el(l(pageLogin.loginBtn())).click();
    });

    test("Login page is stil opened", async () => {
      await elWait(l(pageLogin.authorizationBlock()));
      await test_el_is_visible(l(pageLogin.authorizationBlock()));
    });

    test("Email input field error is visible", async () => {
        await test_el_is_visible(l(pageLogin.emailInputFieldError()));
    });

    test("Password input field error is visible", async () => {
        await test_el_is_visible(l(pageLogin.passwordInputFieldError()));
    });

    test("Error message with correct text is visible", async () => {
        await test_el_is_text(
            l(pageLogin.invalidLoginOrPasswordErrorMessage()),
            "Incorrect username and/or password"
        );
    });

    test("The restore page is opened after click on 'Can't log in?'", async () => {
      await el(l(pageLogin.restorePasswordBtn())).click();
      await elWait(l(pageRestore.restoreByBlock()));
      await test_el_is_visible(l(pageRestore.restoreByBlock()));
    });

    test("The restore by number button is visible", async () => {
        await test_el_is_visible(l(pageRestore.restoreByNumberBtn()));
      });

    test("The restore by number module is opened after click on 'Phone number'", async () => {
      await el(l(pageRestore.restoreByNumberBtn())).click();
      await elWait(l(pageRestore.restoreByNumberModule()));
      await test_el_is_text(
        l(pageRestore.restoreByNumberTitle()),
        "Restoring"
      );
    });
  });
});
