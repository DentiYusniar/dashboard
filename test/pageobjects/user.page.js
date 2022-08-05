const Page = require('./page');

class UserPage extends Page {

    get userList() {
        return $('[href="/admin/user"]');
    }

    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[2]');
    }

    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div[1]/button');
    }   

    //------------------------------------------------------------------------//
    //form user//

    get firstName() {
        return $('#firstName');
    }   

    get lastName() {
        return $('#lastName');
    }   

    get userName() {
        return $('#username');
    }   

    get email() {
        return $('#email');
    }   

    get phoneNumber() {
        return $('#phoneNumber');
    }   

    get role() {
        return $('#roleId');
    }   

    get ownerId() {
        return $('#ownerId');
    }  

    get merchantId() {
        return $('#merchantId');
    }   

    get storeId() {
        return $('#storeId');
    }   

    get newPassword() {
        return $('#password');
    }
    
    get confirmPassword() {
        return $('#confirmPassword');
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
    
    //-------------------------------------------------------------------------------//
    //search user//

    get search() {
        return $('[class="form-control form-control-sm"]');
    }     

    //-------------------------------------------------------------------------//
    //delete user//

    get deleteButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr/td[1]/div/button[3]');
    }   

    get yesButton() {
        return $('button=Yes');
    }   

    get noButton() {
        return $('button=No');
    } 

    //---------------------------------------------------------------------------//
    //detail user/
    get detailButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr/td[1]/div/button[1]');
    }

    get getTitle() {
        return $('/html/body/div[2]/div/div/div[1]/h5');
    }

    get message() {
        return $('[role="status"]');
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

    open() {
        return super.open();
    }
}

module.exports = new UserPage();