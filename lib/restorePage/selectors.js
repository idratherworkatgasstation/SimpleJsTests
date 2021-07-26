function pRestore() {};

pRestore.prototype = {
    __(s) {
        let __ = ".ext-registration";
        return (s != undefined) ? `${__} ${s}` : __;
    },

    restoreByBlock(s) {
        let __ = this.__(".ext-registration_stubs");
        return (s != undefined) ? `${__} ${s}` : __;
    },
    restoreByNumberBtn() { return this.restoreByBlock("[data-l='t,phone']"); },
    restoreByEmailBtn() { return this.restoreByBlock("[data-l='t,email']"); },


    restoreByNumberModule(s) {
        let __ = "[data-module='registration/enterPhoneNew']";
        return (s != undefined) ? `${__} ${s}` : __;
    },
    restoreByNumberTitle() { return this.restoreByNumberModule(".ext-registration_h"); },
};

let pageRestore = new(pRestore);


module.exports = { pageRestore, pRestore };