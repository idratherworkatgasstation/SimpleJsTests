const JSDOMEnvironment = require('jest-environment-jsdom');
const { Builder, By, until, Capabilities, Key } = require('selenium-webdriver');
const dateTime = require('node-datetime');

class WebDriverEnvironment extends JSDOMEnvironment {
  constructor(config) {
    super(config);
    const options = config.testEnvironmentOptions || {};
    this.browserName = options.browser || 'chrome';
    this.browserOptions = options.browserOptions || {};
    this.seleniumAddress = options.seleniumAddress || null;
    this.timeouts = options.timeouts || {};
  }

  //global setup and custom functions
  async setup() {
    await super.setup();
    
    let driver = new Builder();
    if (this.browserName == 'chrome') {
      let capabilities = new Capabilities(); 
      capabilities.setBrowserName(this.browserName);
      capabilities.set('chromeOptions', this.browserOptions);
      driver = driver.setChromeOptions(capabilities); 
    }

    driver = await driver.forBrowser(this.browserName).build();

    this.driver = driver;
    this.global.implicit = this.timeouts.implicit;
    this.global.explicit = this.timeouts.explicit;

    this.global.l = selector => By.css(selector);
    this.global.browser = driver;
    this.global.el = locator => driver.findElement(locator);
    this.global.el.all = locator => driver.findElements(locator);
    this.global.until = until;
    this.global.el.w = (locator, timeout = this.timeouts.explicit) => driver.wait(until.elementLocated(locator),timeout);
    this.global.el.w.visible = (element, timeout = this.timeouts.explicit) => driver.wait(until.elementIsVisible(element),timeout);
  }

  async teardown() {
    await this.driver.quit();
    await super.teardown();
  }
}

module.exports = WebDriverEnvironment;