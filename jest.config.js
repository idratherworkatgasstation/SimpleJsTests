module.exports = {
    globals: {
        //Domain Settings
        __DS__: {
            domain: 'ok.ru',
            url() { return `http://${this.domain}/` },
        },
    },
    testEnvironment: './lib/webdriver_environment.js',
    testEnvironmentOptions: {
        browser: 'chrome', 
        browserOptions: {
            args: [
                "headless",
                "disable-gpu",
                "no-sandbox",
                "window-size=1366,768"
            ]
        },
        timeouts: {
            implicit: 1000,
            explicit: 5000,
        },
        
    },

	//reporters: ["default"]
    "reporters": [
        "default",
         ["./node_modules/jest-html-reporter", {
             "pageTitle": "Test Report"
         }]
     ]

};
