const ForgotPasswordPage = require('../pageobjects/forgotpassword.page');

describe('Forgot Password', () => {

    it('should open the url', async () => {
        await ForgotPasswordPage.open();
    });

    it('should open forgot password', async() => {
        await ForgotPasswordPage.forgotPassword.click();

        await expect(ForgotPasswordPage.tittle).toHaveTextContaining('Forgot Password');
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/forgotPassword#/');

        console.log(await ForgotPasswordPage.tittle.getText());
    });

    it('should invalid email/phone number', async () => {

        await ForgotPasswordPage.input.setValue('Hahaha');
        await ForgotPasswordPage.resetButton.click();

        await expect(ForgotPasswordPage.alertDanger).toBeDisplayed();

        await ForgotPasswordPage.closeButton.click();

    });

    it('should input usernaname', async () => {

        await ForgotPasswordPage.input.setValue('dentiyusniar');
        await ForgotPasswordPage.resetButton.click();

        await expect(ForgotPasswordPage.successMsg).toBeDisplayed();
    });

    it('should input email', async () => {

        await ForgotPasswordPage.input.setValue('denti.yusniar@beps.co.id');
        await ForgotPasswordPage.resetButton.click();

        await expect(ForgotPasswordPage.successMsg).toBeDisplayed();

    });

    it('should input phone number ', async () => {

        await ForgotPasswordPage.input.setValue('089612229995');
        await ForgotPasswordPage.resetButton.click();

        await expect(ForgotPasswordPage.successMsg).toBeDisplayed();
    });

    it('should back to login ', async () => {

        await ForgotPasswordPage.login.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/login#/');
    });

});
