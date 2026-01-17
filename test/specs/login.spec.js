const LoginPage = require('../pageobjects/login.page');

describe('Stable Login Test', () => {

    it('should login successfully without flakiness', async () => {

        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');

        await LoginPage.successMessage.waitForDisplayed();

        const message = await LoginPage.successMessage.getText();
        expect(message).toContain('You logged into a secure area!');
    });

});
