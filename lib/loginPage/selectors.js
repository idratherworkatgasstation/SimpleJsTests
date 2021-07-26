function pLogin() {};

pLogin.prototype = {
    __(s) {
        let __ = "#mainContent";
        return (s != undefined) ? `${__} ${s}` : __;
    },

    authorizationBlock(s) {
        let __ = this.__(".form.js-login-form");
        return (s != undefined) ? `${__} ${s}` : __;
    },
    emailInputField() { return this.authorizationBlock("#field_email") },
    passwordInputField() { return this.authorizationBlock("#field_password") },
    loginBtn() { return this.authorizationBlock("[data-l='t,sign_in']"); },
    restorePasswordBtn() { return this.authorizationBlock("[data-l='t,restore']"); },
};

let pageLogin = new(pLogin);


module.exports = { pageLogin, pLogin };