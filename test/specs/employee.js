const LoginPage = require('../pageobjects/login.page');
const EmployeePage = require('../pageobjects/employee.page');

describe('Employee Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('storeex');
        await LoginPage.inputPassword.setValue('Password_01');
        await browser.pause(2000);
        await LoginPage.loginBtn.click();

        //expect
        await expect(LoginPage.inputUsername).toHaveValue('storeex');
        await expect(LoginPage.inputPassword).toHaveValue('Password_01');

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });
    
    it('should open employee page', async () => {

        await EmployeePage.employeeList.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/employee');

    });

    //employee add//
    //--------------------------------------//

    it('should cancle create employee', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.a');
        await EmployeePage.email.setValue('employee.a@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('A');
        await EmployeePage.password.setValue('Password_01');
        await EmployeePage.confrimPassword.setValue('Password_01');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.cancelButton.click();
        

    });

    //password validation
    it('should create password not match', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.b');
        await EmployeePage.email.setValue('employee.b@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('b');
        await EmployeePage.password.setValue('Password_01');
        await EmployeePage.confrimPassword.setValue('Password_011');
        await EmployeePage.phoneNumber.setValue('088877799990');

        //expect
        await expect(EmployeePage.danger[1]).toHaveTextContaining('Confirm password is not matched');
        await expect(EmployeePage.danger[1]).toBeDisplayed();
        await browser.pause(2000);

        await EmployeePage.closeButton.click();
        
    });

    it('should create password At least one Uppercase', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.b');
        await EmployeePage.email.setValue('employee.b@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('b');
        await EmployeePage.password.setValue('password_01');
        await EmployeePage.confrimPassword.setValue('password_01');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('At least one Uppercase');

        await expect(EmployeePage.danger[0]).toHaveTextContaining('At least one Uppercase');
        await expect(EmployeePage.danger[0]).toBeDisplayed();

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create password At least one digit', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.b');
        await EmployeePage.email.setValue('employee.b@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('b');
        await EmployeePage.password.setValue('Password');
        await EmployeePage.confrimPassword.setValue('Password');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('At least one digit');

        await expect(EmployeePage.danger[0]).toHaveTextContaining('At least one digit');
        await expect(EmployeePage.danger[0]).toBeDisplayed();

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create password At least minumum 8 characters', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.b');
        await EmployeePage.email.setValue('employee.b@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('b');
        await EmployeePage.password.setValue('P4ssw');
        await EmployeePage.confrimPassword.setValue('P4ssw');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('At least minumum 8 characters');

        await expect(EmployeePage.danger[0]).toHaveTextContaining('At least minumum 8 characters');
        await expect(EmployeePage.danger[0]).toBeDisplayed();

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    //----/

    it('should create empty username', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('');
        await EmployeePage.email.setValue('employee.c@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('c');
        await EmployeePage.password.setValue('P4ssword');
        await EmployeePage.confrimPassword.setValue('P4ssword');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('Username could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create empty email', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.d');
        await EmployeePage.email.setValue('');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('d');
        await EmployeePage.password.setValue('P4ssword');
        await EmployeePage.confrimPassword.setValue('P4ssword');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('Email could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create empty first name', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.e');
        await EmployeePage.email.setValue('employee.e@mail.co.id');
        await EmployeePage.firstName.setValue('');
        await EmployeePage.lastName.setValue('e');
        await EmployeePage.password.setValue('P4ssword');
        await EmployeePage.confrimPassword.setValue('P4ssword');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('First Name could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create empty last name', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.f');
        await EmployeePage.email.setValue('employee.f@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('');
        await EmployeePage.password.setValue('P4ssword');
        await EmployeePage.confrimPassword.setValue('P4ssword');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('Last Name could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create empty phone number', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.g');
        await EmployeePage.email.setValue('employee.g@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('G');
        await EmployeePage.password.setValue('P4ssword');
        await EmployeePage.confrimPassword.setValue('P4ssword');
        await EmployeePage.phoneNumber.setValue('');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('Phone Number could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create employee', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.h');
        await EmployeePage.email.setValue('employee.h@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('h');
        await EmployeePage.password.setValue('Password_01');
        await EmployeePage.confrimPassword.setValue('Password_01');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create employee username already use', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.h');
        await EmployeePage.email.setValue('employee.i@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('i');
        await EmployeePage.password.setValue('Password_01');
        await EmployeePage.confrimPassword.setValue('Password_01');
        await EmployeePage.phoneNumber.setValue('088877799991');

        await EmployeePage.saveButton.click();
        await EmployeePage.closeButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('is already exist');
        await browser.pause(2000);

    });

    it('should create employee email already use', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.j');
        await EmployeePage.email.setValue('employee.h@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('J');
        await EmployeePage.password.setValue('Password_01');
        await EmployeePage.confrimPassword.setValue('Password_01');
        await EmployeePage.phoneNumber.setValue('088877799991');

        await EmployeePage.saveButton.click();
        await EmployeePage.closeButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });

    it('should create employee phone number already use', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.k');
        await EmployeePage.email.setValue('employee.k@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('k');
        await EmployeePage.password.setValue('Password_01');
        await EmployeePage.confrimPassword.setValue('Password_01');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();
        await EmployeePage.closeButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });

    it('should create employee first name and last name already use', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.l');
        await EmployeePage.email.setValue('employee.l@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('h');
        await EmployeePage.phoneNumber.setValue('088877799991');

        await EmployeePage.saveButton.click();
        await EmployeePage.closeButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });

    //employee search//
    //----------------------------------------//
    it('should search by username', async () => {
    
        await EmployeePage.search[0].setValue('employee.h');
        await browser.pause(2000);
    
        //expect
        await expect(EmployeePage.search[0]).toHaveValue('employee.h');
        console.log(await EmployeePage.search[0].getValue());

    });

    it('should search by firstname', async () => {
    
        await EmployeePage.search[1].setValue('employee');
        await browser.pause(2000);
    
        //expect
        await expect(EmployeePage.search[1]).toHaveValue('employee');
        console.log(await EmployeePage.search[1].getValue());

        await EmployeePage.search[1].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    
    });

    it('should search by lastname', async () => {
    
        await EmployeePage.search[2].setValue('h');
        await browser.pause(2000);
    
        //expect
        await expect(EmployeePage.search[2]).toHaveValue('h');
        console.log(await EmployeePage.search[2].getValue());

        await EmployeePage.search[2].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    
    });

    it('should search by email', async () => {
    
        await EmployeePage.search[3].setValue('employee.h@mail.co.id');
        await browser.pause(2000);
    
        //expect
        await expect(EmployeePage.search[3]).toHaveValue('employee.h@mail.co.id');
        console.log(await EmployeePage.search[3].getValue());

        await EmployeePage.search[3].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    
    });

    it('should search by phone number', async () => {
    
        await EmployeePage.search[5].setValue('088877799990');
        await browser.pause(2000);
    
        //expect
        await expect(EmployeePage.search[5]).toHaveValue('088877799990');
        console.log(await EmployeePage.search[5].getValue());

        await EmployeePage.search[5].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    
    });
   
    it('should show employee detail', async () => {

        await EmployeePage.detailEmployee.click();
        await browser.pause(2000);

        //expect
        await expect(EmployeePage.getTitle).toHaveTextContaining('Detail Employee');
        console.log(await EmployeePage.getTitle.getText());

        await EmployeePage.closeButton.click();

    });

    //--------------------------------------------------------------//
    //edit employee//

    it('should edit email already use ', async () => {

        await EmployeePage.editButton.click();
        await browser.pause(2000);

        await EmployeePage.email.setValue('orangtua@mail.com');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('m');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();
        await EmployeePage.closeButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });

    it('should edit phone number already use ', async () => {

        await EmployeePage.editButton.click();
        await browser.pause(2000);

        await EmployeePage.email.setValue('employee.n@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('n');
        await EmployeePage.phoneNumber.setValue('085251465461');

        await EmployeePage.saveButton.click();
        await EmployeePage.closeButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('is already in use');
        await browser.pause(2000);

    });
    
    it('should create empty email', async () => {

        await EmployeePage.editButton.click();
        await browser.pause(2000);

        await EmployeePage.email.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('o');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('Email could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create empty first name', async () => {

        await EmployeePage.editButton.click();
        await browser.pause(2000);

        await EmployeePage.email.setValue('employee.p@mail.co.id');
        await EmployeePage.firstName.doubleClick();
        await browser.keys("Delete");
        await EmployeePage.lastName.setValue('p');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('First Name could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create empty last name', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.q');
        await EmployeePage.email.setValue('employee.q@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.doubleClick();
        await browser.keys("Delete");
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('Last Name could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should create empty phone number', async () => {

        await EmployeePage.tambahButton.click();
        await browser.pause(2000);

        await EmployeePage.userName.setValue('employee.r');
        await EmployeePage.email.setValue('employee.r@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('r');
        await EmployeePage.phoneNumber.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveTextContaining('Phone Number could not be empty');

        await browser.pause(2000);
        await EmployeePage.closeButton.click();
        
    });

    it('should edit employee ', async () => {

        await EmployeePage.editButton.click();
        await browser.pause(2000);

        await EmployeePage.email.setValue('employee.s@mail.co.id');
        await EmployeePage.firstName.setValue('employee');
        await EmployeePage.lastName.setValue('s');
        await EmployeePage.phoneNumber.setValue('088877799990');

        await EmployeePage.saveButton.click();

        //expect
        await expect(EmployeePage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);

    });

  
    //--------------------------------------------------------------//
    //delete employee//

    it('should cancel delete', async () => {

        await EmployeePage.deleteButton.click();
        await EmployeePage.noButton.click();

    });

    /**
     * it('should close delete', async () => {

        await EmployeePage.deleteButton.click();
        await browser.pause(2000);
        await EmployeePage.closeButton.click();

    });
    */

    it('should delete employee', async () => {

        await EmployeePage.deleteButton.click();
        await browser.pause(2000);
        await EmployeePage.yesButton.click();

        //expect
        await expect(EmployeePage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    }); 

});