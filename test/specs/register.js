const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');

describe('RegisterS aplication', () => {

    it('should open the url', async () => {
        await LoginPage.open();
    });

    it('should veryfy the tittle', async() => {
        await RegisterPage.registerPage.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/register#/');
    });

    it('should password do not match', async () => {

        await RegisterPage.firstName.setValue('extra');
        await RegisterPage.lastName.setValue('admin');
        await RegisterPage.userName.setValue('extraadmin');
        await RegisterPage.email.setValue('extra.admin@mail.com');
        await RegisterPage.phoneNumber.setValue('083725682736');
        await RegisterPage.password.setValue('Password_01');
        await RegisterPage.confrimPassword.setValue('Password_011');
        await RegisterPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await RegisterPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await RegisterPage.city.setValue('Kota Jakarta Pusat');
        await RegisterPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await RegisterPage.village.setValue('Karet Tengsin');
        await RegisterPage.postalCode.setValue('10250');

        await RegisterPage.registButton.click();

        await expect(RegisterPage.message).toHaveTextContaining('Confirm Password Is Not Matched');
        await browser.pause(2000);

    });

    it('should username already exist', async () => {

        await RegisterPage.firstName.setValue('extra');
        await RegisterPage.lastName.setValue('admin');
        await RegisterPage.userName.setValue('orangtua');
        await RegisterPage.email.setValue('extra.admin@mail.com');
        await RegisterPage.phoneNumber.setValue('083725682736');
        await RegisterPage.password.setValue('Password_01');
        await RegisterPage.confrimPassword.setValue('Password_01');
        await RegisterPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await RegisterPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await RegisterPage.city.setValue('Kota Jakarta Pusat');
        await RegisterPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await RegisterPage.village.setValue('Karet Tengsin');
        await RegisterPage.postalCode.setValue('10250');

        await RegisterPage.registButton.click();

        await expect(RegisterPage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });

    it('should phone number already exist', async () => {

        await RegisterPage.firstName.setValue('extra');
        await RegisterPage.lastName.setValue('admin');
        await RegisterPage.userName.setValue('extraadmin');
        await RegisterPage.email.setValue('extra.admin@mail.com');
        await RegisterPage.phoneNumber.setValue('089612229995');
        await RegisterPage.password.setValue('Password_01');
        await RegisterPage.confrimPassword.setValue('Password_01');
        await RegisterPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await RegisterPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await RegisterPage.city.setValue('Kota Jakarta Pusat');
        await RegisterPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await RegisterPage.village.setValue('Karet Tengsin');
        await RegisterPage.postalCode.setValue('10250');

        await RegisterPage.registButton.click();

        await expect(RegisterPage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });

    it('should email already exist', async () => {

        await RegisterPage.firstName.setValue('extra');
        await RegisterPage.lastName.setValue('admin');
        await RegisterPage.userName.setValue('extraadmin');
        await RegisterPage.email.setValue('Kristina.Robel@gmail.com');
        await RegisterPage.phoneNumber.setValue('083725682736');
        await RegisterPage.password.setValue('Password_01');
        await RegisterPage.confrimPassword.setValue('Password_01');
        await RegisterPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await RegisterPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await RegisterPage.city.setValue('Kota Jakarta Pusat');
        await RegisterPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await RegisterPage.village.setValue('Karet Tengsin');
        await RegisterPage.postalCode.setValue('10250');

        await RegisterPage.registButton.click();

        await expect(RegisterPage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });
    
    it('should registration account', async () => {

        await RegisterPage.firstName.setValue('extra');
        await RegisterPage.lastName.setValue('admin');
        await RegisterPage.userName.setValue('extraadmin');
        await RegisterPage.email.setValue('extra.admin@mail.com');
        await RegisterPage.phoneNumber.setValue('083725682736');
        await RegisterPage.password.setValue('Password_01');
        await RegisterPage.confrimPassword.setValue('Password_01');
        await RegisterPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await RegisterPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await RegisterPage.city.setValue('Kota Jakarta Pusat');
        await RegisterPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await RegisterPage.village.setValue('Karet Tengsin');
        await RegisterPage.postalCode.setValue('10250');

        await RegisterPage.registButton.click();

    });

});


