const Page = require('./page');

class ProfilePage extends Page {

    get avatar() {
        return $('[class="avatar avatar-md"]');
    }

    get message() {
        return $('[role="status"]');
    }

    get profile() {
        return $$('[class="dropdown-item"]');
    }
    
    get usernameAccount() {
        return $('[class="dropdown-header bg-light fw-semibold py-2"]');
    }

    get firstName() {
        return $('#firstName');
    }
    
    get lastName() {
        return $('#lastName');
    }

    get email() {
        return $('#email');
    }
    
    get phoneNumber() {
        return $('#phoneNumber');
    }

    get saveButton() {
        return $('[class="btn btn-info btn-loading btn-font btn-size-max"]');
    }
    
    get cancelButton() {
        return $('button=Cancel');
    }

    get closeButton() {
        return $('[class="btn btn-close"]');
    }
    
    get LogoutBtn() {
        return $('//*[@id="root"]/div[2]/div[1]/div[1]/ul[2]/li/ul/li[2]/a');
    }

    open() {
        return super.open();
    }

    async delete () {
        await this.firstName.doubleClick();
        await browser.keys("Delete");
        await this.lastName.doubleClick();
        await browser.keys("Delete");
        await this.phoneNumber.doubleClick();
        await browser.keys("Delete");
        await this.email.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    }
}

module.exports = new ProfilePage();