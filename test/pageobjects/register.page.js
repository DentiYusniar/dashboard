const Page = require('./page');

class RegisterPage extends Page {

    get registerPage() {
        return $('=Daftar');
    }

    get message() {
        return $('[role="status"]');
    }
    
    //------------------------------------------------------------------------//
    //Form//
    
    get userName() {
        return $('#username');
    }   

    get email() {
        return $('#email');
    }   

    get firstName() {
        return $('#firstName');
    }   

    get lastName() {
        return $('#lastName');
    }   

    get password() {
        return $('#password');
    }   

    get confrimPassword() {
        return $('//*[@id="confirmPassword"]');
    }   

    get phoneNumber() {
        return $('#phoneNumber');
    }   

    get fullAddress() {
        return $('#fullAddress');
    }

    get subDistrict() {
        return $('#subDistrict');
    }

    get village() {
        return $('#village');
    }

    get province() {
        return $('#province');
    }

    get city() {
        return $('#city');
    }

    get postalCode() {
        return $('#postalCode');
    }

    get registButton() {
        return $('button=Registration Account');
    }   

    get backButton() {
        return $('//*[@id="root"]/div/div[2]/img');
    }
    
    async delete () {
        await this.firstName.doubleClick();
        await browser.keys("Delete");
        await this.lastName.doubleClick();
        await browser.keys("Delete");
        await this.userName.doubleClick();
        await browser.keys("Delete");
        await this.email.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.password.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.confrimPassword.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.phoneNumber.doubleClick();
        await browser.keys("Delete");
        await this.fullAddress.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.province.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.city.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.subDistrict.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.village.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.postalCode.doubleClick();
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new RegisterPage();