import { LoginPage } from "../../pages/loginPage";

const { Given,When, Then } = require("cucumber");
const loginPage: LoginPage = new LoginPage();

// GIVEN
Given(/^I am on the login page$/, async () => {
    await loginPage.go();
});

When(/^user sends correct access credentials$/, async () => {
    await loginPage.login('agustina.bosso@signaturit.com', 'agussantipauli1990');
});