import {element, by, ElementFinder, browser} from "protractor";

export class LoginPage {
    public emailInput: ElementFinder;
    public passwordInput: ElementFinder;
    public loginButton: ElementFinder;

    constructor() {
        this.emailInput = element(by.id('login_email'));
        this.passwordInput = element(by.id('login_password'));
        this.loginButton = element(by.id('login_submit'));
    }

    /**
     * Go to login page.
     *
     * @return {Promise}
     */
    go() {
        return browser.get('/en/login');
    }
    /**
     * Logout from application.
     *
     * @return {Promise}
     */
    logout() {
        return browser.get('/en/logout');
    }
    /**
     * Select customer account by name.
     *
     * @param {String} username
     * @param {String} password
     */
    async setCredentials(username, password) {
        await this.emailInput.sendKeys(username);
        await this.passwordInput.sendKeys(password);
    }
    /**
     * Press login button to submit.
     */
    async submitLogin() {
        await this.loginButton.click();
    }
    /**
     * Login using `username` and `password` credentials.
     *
     * @param {String} username
     * @param {String} password
     */
    async login(username, password) {
        await this.setCredentials(username, password);
        await this.submitLogin();
    }
}