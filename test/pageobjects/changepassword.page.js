const Page = require('./page');

class ChangePasswordPage extends Page {

    get profileImg() {
        return $('[class="avatar avatar-md"]');
    }
    
    get usernameAccount() {
        return $('//*[@id="root"]/div[2]/div[1]/div[1]/ul[2]/li/ul/li[1]/h6');
    }
    
    //----------------------------------------------------------------------//
    //change password//

    get changePassword() {
        return $$('[class="dropdown-item"]');
    }

    get oldPassword() {
        return $('#input');
    }
    
    get newPassword() {
        return $('#password');
    }
    
    get confirmPassword() {
        return $('#confirmPassword');
    }

    get buttonAddon() {
        return $$('#button-addon2');
    }

    get simpanButton() {
        return $('[class="btn btn-info btn-loading btn-font btn-size-max"]');
    }
    
    get batalButton() {
        return $('button=Cancel');
    }
    
    get closeButton() {
        return $$('[class="btn btn-close"]');
    }

    get getTitle() {
        return $('/html/body/div[2]/div/div/div[1]/h5');
    }

    get alert() {
        return $('div=Error, incorrect old password!');
    }

    get textDanger() {
        return $$('[class="text-danger text-feedback"]');
    }
    
    //-------------------------------------------------------------------//

    async delete () {
        await this.oldPassword.doubleClick();
        await browser.keys("Delete");
        await this.newPassword.doubleClick();
        await browser.keys("Delete");
        await this.confirmPassword.doubleClick();
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new ChangePasswordPage();