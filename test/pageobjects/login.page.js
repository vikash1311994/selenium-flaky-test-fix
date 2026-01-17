class LoginPage {

    get usernameInput() {
        return $('#username');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('button[type="submit"]');
    }

    get successMessage() {
        return $('#flash');
    }

    async open() {
        await browser.url('/login');
    }

    async login(username, password) {
        await this.usernameInput.waitForDisplayed();
        await this.usernameInput.setValue(username);

        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);

        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
