const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profile.page');

describe('Profile Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('orangtua');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });
    
    it('should click profile', async () => {

        await ProfilePage.avatar.click();

    });

    it('should email already exist', async () => {
        await ProfilePage.profile[0].click();
        await browser.pause(2000);

        await ProfilePage.firstName.setValue('Orang');
        await ProfilePage.lastName.setValue('Tua');
        await ProfilePage.email.setValue('merchantex@beps.com');
        await ProfilePage.phoneNumber.setValue('085251465461');

        await ProfilePage.saveButton.click();

        await expect(ProfilePage.message).toHaveTextContaining('is already in use');

    });
    
    it('should phone number already exist', async () => {

        await ProfilePage.firstName.setValue('Orang');
        await ProfilePage.lastName.setValue('Tua');
        await ProfilePage.email.setValue('orangtua@mail.com');
        await ProfilePage.phoneNumber.setValue('089612229995');

        await browser.pause(2000);
        await ProfilePage.saveButton.click();

        await expect(ProfilePage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });
    
    it('should change profile', async () => {

        await ProfilePage.firstName.setValue('Orang');
        await ProfilePage.lastName.setValue('Tua');
        await ProfilePage.email.setValue('orangtua@mail.com');
        await ProfilePage.phoneNumber.setValue('085251465461');


        await browser.pause(2000);
        await ProfilePage.saveButton.click();

        await expect(ProfilePage.message).toHaveText('Successfully');
        await browser.pause(2000);

    });

    it('should logout account', async () => {

        await ProfilePage.LogoutBtn.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/login#/');
    });
});