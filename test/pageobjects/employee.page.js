const Page = require('./page');

class EmployeePage extends Page {

    get employeeList() {
        return $('[href="/admin/employee"]');
    }

    get maxSidebar() {
        return $('//*[@id="root"]/div[1]/button');
    }

    get message() {
        return $('[role="status"]');
    }

    get tambahButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div[1]/button');
    }   

    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[2]');
    }  
    
    //------------------------------------------------------------------------//
    //field//
    
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
    
    get danger() {
        return $$('[class="text-danger text-feedback"]');
    }

    get saveButton() {
        return $('button=Save');
    }   

    get cancelButton() {
        return $('button=Cancel');
    }   

    get closeButton() {
        return $('[class="btn btn-close"]');
    }   
 
    //-------------------------------------------------------------------------------//
    //search employee//

    get search() {
        return $$('[class="form-control form-control-sm"]');
    }   

    //-------------------------------------------------------------------------//
    //delete//

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
    //detail employee/
    get detailEmployee() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr/td[1]/div/button[1]');
    }

    get getTitle() {
        return $('[class="modal-title"]');
    }

    async delete () {
        await this.email.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.firstName.doubleClick();
        await browser.keys("Delete");
        await this.lastName.doubleClick();
        await browser.keys("Delete");
        await this.phoneNumber.doubleClick();
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new EmployeePage();