//functions
async function elWait(locator) {
    let _el = await el.w(locator);
    await el.w.visible(_el);
}

async function test_el_is_visible(selectors) {
     let _bool = await el(selectors).isDisplayed();
    return expect(_bool).toBeTruthy();
};

async function test_el_is_text(selectors,text) {
    let _text = await el(selectors).getText();
    return expect(_text).toBe(text);
};


module.exports = {
    test_el_is_visible,
    test_el_is_text,
    elWait,
};
