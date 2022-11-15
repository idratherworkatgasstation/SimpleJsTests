function pLogin() {}

pLogin.prototype = {
  __(s) {
    let __ = "#mainContent";
    return s != undefined ? `${__} ${s}` : __;
  },

  authorizationBlock(s) {
    let __ = this.__(".form.js-login-form");
    return s != undefined ? `${__} ${s}` : __;
  },

  emailInputField() {
    return this.authorizationBlock("#field_email");
  },
  emailInputFieldError() {
    return this.authorizationBlock(".form_i.form_i__error.anonym_login_field");
  },

  passwordInputField() {
    return this.authorizationBlock("#field_password");
  },
  passwordInputFieldError() {
    return this.authorizationBlock(".form_i.form_i__error.anonym_password_field");
  },

  invalidLoginOrPasswordErrorMessage() {
    return this.authorizationBlock(".input-e.login_error");
  },

  loginBtn() {
    return this.authorizationBlock("[data-l='t,sign_in']");
  },
  restorePasswordBtn() {
    return this.authorizationBlock("[data-l='t,restore']");
  },
};

let pageLogin = new pLogin();

module.exports = { pageLogin, pLogin };
