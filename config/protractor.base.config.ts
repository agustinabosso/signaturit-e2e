import { browser, Config } from "protractor";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://app.signaturit.com",

    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../e2e/features/*.feature",
    ],

    onPrepare() {
        //require('ts-node').register({
            //project: 'tsconfig.json'
        //});
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["../typescript/features/step_definitions/*.js"],
        strict: true,
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    }
};