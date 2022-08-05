const LoginPage = require('../pageobjects/login.page');

describe('Login aplication', () => {

    it('should open the url', async () => {
        await LoginPage.open();
    });

    it('should veryfy the tittle', async() => {
        await expect(LoginPage.tittle).toHaveTextContaining('Login to Dashboard');

        console.log(await LoginPage.tittle.getText());
    });

    it('should login with invalid username', async () => {

        await LoginPage.inputUsername.setValue('orangtuaa');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(LoginPage.inputUsername).toHaveValue('orangtuaa');
        await expect(LoginPage.inputPassword).toHaveValue('Password_01');

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/login');

    });

    it('should login with invalid password', async () => {

        await LoginPage.inputUsername.setValue('orangtua');
        await LoginPage.inputPassword.setValue('Password');
        await LoginPage.loginBtn.click();

        await expect(LoginPage.inputUsername).toHaveValue('orangtua');
        await expect(LoginPage.inputPassword).toHaveValue('Password');

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/login');

    });

    it('should vissible password ', async () => {

        await LoginPage.vissiblePassword.click();

        await expect(LoginPage.inputPassword).toHaveElementProperty('type', 'text');

    });

    it('should show the message', async () => {

        await expect(LoginPage.alertMsg).toBeDisplayed();

    });

    it('should get text value', async () => {

        await expect(LoginPage.alertMsg).toHaveTextContaining('atau password salah.');

        console.log(await LoginPage.alertMsg.getText());

    });

    it('should login with valid cridentials', async () => {

        await LoginPage.inputUsername.setValue('orangtua');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(LoginPage.inputUsername).toHaveValue('orangtua');
        await expect(LoginPage.inputPassword).toHaveValue('Password_01');
        
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });

});


