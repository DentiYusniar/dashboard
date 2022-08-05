const LoginPage = require('../pageobjects/login.page');
const ChangePasswordPage = require('../pageobjects/changepassword.page');

describe('Change Password Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('orangtua');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });

    it('should open change password', async () => {

        await ChangePasswordPage.profileImg.click();
        await ChangePasswordPage.changePassword[1].click();

        //expect
        await expect(ChangePasswordPage.getTitle).toHaveTextContaining('Change Password');

        console.log(await ChangePasswordPage.getTitle.getText());

    });

    it('should invalid old password', async () => {

        await ChangePasswordPage.oldPassword.setValue('Password01');
        await ChangePasswordPage.buttonAddon[0];
        await browser.pause(2000);
        await ChangePasswordPage.newPassword.setValue('Hahaha_01');
        await ChangePasswordPage.buttonAddon[1];
        await browser.pause(2000);
        await ChangePasswordPage.confirmPassword.setValue('Hahaha_01');
        await ChangePasswordPage.buttonAddon[2];
        await browser.pause(2000);
        await ChangePasswordPage.simpanButton.click();

        //expect
        await expect(ChangePasswordPage.alert).toHaveTextContaining('Error, incorrect old password!');
        await expect(ChangePasswordPage.alert).toBeDisplayed();

        console.log(await ChangePasswordPage.alert.getText());

        await ChangePasswordPage.closeButton[1].click();
    });

    it('should password not match', async () => {

        await ChangePasswordPage.oldPassword.setValue('Password_01');
        await ChangePasswordPage.buttonAddon[0];
        await browser.pause(2000);
        await ChangePasswordPage.newPassword.setValue('Hahaha_01');
        await ChangePasswordPage.buttonAddon[1];
        await browser.pause(2000);
        await ChangePasswordPage.confirmPassword.setValue('Hohoho_01');
        await ChangePasswordPage.buttonAddon[2];
        await browser.pause(2000);

        //expect
        await expect(ChangePasswordPage.textDanger[1]).toHaveTextContaining('Confirm password is not matched');
        await expect(ChangePasswordPage.textDanger[1]).toBeDisplayed();

        console.log(await ChangePasswordPage.textDanger[1].getText());

        await browser.pause(2000);
    });

    it('should more 8 characters', async () => {

        await ChangePasswordPage.oldPassword.setValue('Password_01');
        await ChangePasswordPage.buttonAddon[0];
        await ChangePasswordPage.newPassword.setValue('Haha1');
        await ChangePasswordPage.buttonAddon[1];
        await ChangePasswordPage.confirmPassword.setValue('Haha1');
        await ChangePasswordPage.buttonAddon[2];

        //expect
        await expect(ChangePasswordPage.textDanger[0]).toHaveTextContaining('At least minumum 8 characters');
        await expect(ChangePasswordPage.textDanger[0]).toBeDisplayed();

        console.log(await ChangePasswordPage.textDanger[0].getText());

        await browser.pause(2000);
    });

    it('password at least one Uppercase', async () => {

        await ChangePasswordPage.oldPassword.setValue('Password_01');
        await ChangePasswordPage.buttonAddon[0];
        await browser.pause(2000);
        await ChangePasswordPage.newPassword.setValue('hahaha_01');
        await ChangePasswordPage.buttonAddon[1];
        await browser.pause(2000);
        await ChangePasswordPage.confirmPassword.setValue('hahaha_01');
        await ChangePasswordPage.buttonAddon[2];
        await browser.pause(2000);

        //expect
        await expect(ChangePasswordPage.textDanger[0]).toHaveTextContaining('At least one Uppercase');
        await expect(ChangePasswordPage.textDanger[0]).toBeDisplayed();

        console.log(await ChangePasswordPage.textDanger[0].getText());

        await browser.pause(2000);
    });

    it('password at least one digit', async () => {

        await ChangePasswordPage.oldPassword.setValue('Password_01');
        await ChangePasswordPage.buttonAddon[0];
        await browser.pause(2000);
        await ChangePasswordPage.newPassword.setValue('Hahahaha');
        await ChangePasswordPage.buttonAddon[1];
        await browser.pause(2000);
        await ChangePasswordPage.confirmPassword.setValue('Hahahaha');
        await ChangePasswordPage.buttonAddon[2];
        await browser.pause(2000);

       //expect
        await expect(ChangePasswordPage.textDanger[0]).toHaveTextContaining('At least one digit');
        await expect(ChangePasswordPage.textDanger[0]).toBeDisplayed();

        console.log(await ChangePasswordPage.textDanger[0].getText());

        await browser.pause(2000);
    });

    it('should click batal button', async () => {

        await ChangePasswordPage.oldPassword.setValue('Password_01');
        await ChangePasswordPage.buttonAddon[0];
        await browser.pause(2000);
        await ChangePasswordPage.newPassword.setValue('Hahahaha');
        await ChangePasswordPage.buttonAddon[1];
        await browser.pause(2000);
        await ChangePasswordPage.confirmPassword.setValue('Hahahaha');
        await ChangePasswordPage.buttonAddon[2];
        await browser.pause(2000);
        await ChangePasswordPage.closeButton[0].click();

    });

    it('should click close button', async () => {

        await ChangePasswordPage.profileImg.click();
        await ChangePasswordPage.changePassword[1].click();

        await ChangePasswordPage.oldPassword.setValue('Password_01');
        await ChangePasswordPage.buttonAddon[0];
        await browser.pause(2000);
        await ChangePasswordPage.newPassword.setValue('Hahahaha');
        await ChangePasswordPage.buttonAddon[1];
        await browser.pause(2000);
        await ChangePasswordPage.confirmPassword.setValue('Hahahaha');
        await ChangePasswordPage.buttonAddon[2];
        await browser.pause(2000);
        await ChangePasswordPage.batalButton.click();

    });

    it('should change password', async () => {

        await ChangePasswordPage.profileImg.click();
        await ChangePasswordPage.changePassword[1].click();

        await ChangePasswordPage.oldPassword.setValue('Password_01');
        await ChangePasswordPage.buttonAddon[0];
        await browser.pause(2000);
        await ChangePasswordPage.newPassword.setValue('Hahaha_01');
        await ChangePasswordPage.buttonAddon[1];
        await browser.pause(2000);
        await ChangePasswordPage.confirmPassword.setValue('Hahaha_01');
        await ChangePasswordPage.buttonAddon[2];
        await browser.pause(2000);
        await ChangePasswordPage.simpanButton.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/login#/');

    });

});