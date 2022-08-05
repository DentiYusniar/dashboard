const LoginPage = require('../pageobjects/login.page');
const UserPage = require('../pageobjects/user.page');

describe('User Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('orangtua');
        await LoginPage.inputPassword.setValue('Password_01');
        await browser.pause(2000);
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });
    
    it('should open user page', async () => {

        await UserPage.userList.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/user');

    });

    //add user//
    //--------------------------------------/

    it('should create user merchant', async () => {

        await UserPage.addButton.click(); 
        await browser.pause(2000);

        await UserPage.firstName.setValue('Merchant');
        await UserPage.lastName.setValue('O');
        await UserPage.userName.setValue('merchant.o');
        await UserPage.email.setValue('merchant.o@mail.co.id');
        await UserPage.phoneNumber.setValue('089712225656');
        await UserPage.role.selectByIndex('3');
        await UserPage.merchantId.selectByIndex('1');
        await UserPage.newPassword.setValue('Password_01');
        await UserPage.confirmPassword.setValue('Password_01');

        await UserPage.saveButton.click();

        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create user store', async () => {

        await UserPage.addButton.click();
        await browser.pause(2000);

        await UserPage.firstName.setValue('Store');
        await UserPage.lastName.setValue('O');
        await UserPage.userName.setValue('store.o');
        await UserPage.email.setValue('store.o@mail.co.id');
        await UserPage.phoneNumber.setValue('089733335656');
        await UserPage.role.selectByIndex('1');
        await UserPage.merchantId.click();
        await browser.pause(2000);
        await UserPage.merchantId.selectByIndex('7');
        await UserPage.storeId.click();
        await browser.pause(2000);
        await UserPage.storeId.selectByIndex('1');
        await UserPage.newPassword.setValue('Password_01');
        await UserPage.confirmPassword.setValue('Password_01');

        await UserPage.saveButton.click();

        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create user cashier', async () => {

        await UserPage.addButton.click();
        await browser.pause(2000);

        await UserPage.firstName.setValue('Cashier');
        await UserPage.lastName.setValue('O');
        await UserPage.userName.setValue('cashier.o');
        await UserPage.email.setValue('cashier.o@mail.co.id');
        await UserPage.phoneNumber.setValue('084733335656');
        await UserPage.role.selectByIndex('2');
        await UserPage.merchantId.click();
        await browser.pause(2000);
        await UserPage.merchantId.selectByIndex('7');
        await UserPage.storeId.click();
        await browser.pause(2000);
        await UserPage.storeId.selectByIndex('1');
        await UserPage.newPassword.setValue('Password_01');
        await UserPage.confirmPassword.setValue('Password_01');

        await UserPage.saveButton.click();

        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create username already exist', async () => {

        await UserPage.addButton.click(); 
        await browser.pause(2000);

        await UserPage.firstName.setValue('Merchant');
        await UserPage.lastName.setValue('A');
        await UserPage.userName.setValue('merchant.o');
        await UserPage.email.setValue('merchant.a@mail.co.id');
        await UserPage.phoneNumber.setValue('089712225655');
        await UserPage.role.selectByIndex('3');
        await UserPage.merchantId.selectByIndex('1');
        await UserPage.newPassword.setValue('Password_01');
        await UserPage.confirmPassword.setValue('Password_01');

        await UserPage.saveButton.click();
        await UserPage.closeButton.click();

        await expect(UserPage.message).toHaveTextContaining('already');
        await browser.pause(2000);

    });

    it('should create email already use', async () => {

        await UserPage.addButton.click(); 
        await browser.pause(2000);

        await UserPage.firstName.setValue('Merchant');
        await UserPage.lastName.setValue('A');
        await UserPage.userName.setValue('merchant.A');
        await UserPage.email.setValue('merchant.o@mail.co.id');
        await UserPage.phoneNumber.setValue('089712225655');
        await UserPage.role.selectByIndex('3');
        await UserPage.merchantId.selectByIndex('1');
        await UserPage.newPassword.setValue('Password_01');
        await UserPage.confirmPassword.setValue('Password_01');

        await UserPage.saveButton.click();
        await UserPage.closeButton.click();

        await expect(UserPage.message).toHaveTextContaining('already');
        await browser.pause(2000);

    });

    it('should create phone number already use', async () => {

        await UserPage.addButton.click(); 
        await browser.pause(2000);

        await UserPage.firstName.setValue('Merchant');
        await UserPage.lastName.setValue('A');
        await UserPage.userName.setValue('merchant.A');
        await UserPage.email.setValue('merchant.A@mail.co.id');
        await UserPage.phoneNumber.setValue('089712225656');
        await UserPage.role.selectByIndex('3');
        await UserPage.merchantId.selectByIndex('1');
        await UserPage.newPassword.setValue('Password_01');
        await UserPage.confirmPassword.setValue('Password_01');

        await UserPage.saveButton.click();
        await UserPage.closeButton.click();

        await expect(UserPage.message).toHaveTextContaining('already');
        await browser.pause(2000);

    });

    it('should password do not match', async () => {

        await UserPage.addButton.click(); 
        await browser.pause(2000);

        await UserPage.firstName.setValue('Merchant');
        await UserPage.lastName.setValue('A');
        await UserPage.userName.setValue('merchant.A');
        await UserPage.email.setValue('merchant.a@mail.co.id');
        await UserPage.phoneNumber.setValue('089712225655');
        await UserPage.role.selectByIndex('3');
        await UserPage.merchantId.selectByIndex('1');
        await UserPage.newPassword.setValue('Password_01');
        await UserPage.confirmPassword.setValue('Password_011');

        await UserPage.saveButton.click();
        await UserPage.closeButton.click();

        await expect(UserPage.message).toHaveText('Confirm Password Is Not Matched');
        await browser.pause(2000);

    });

    //user search//
    //----------------------------------------//
    it('should search by username', async () => {
    
        await UserPage.search[0].setValue('merchant.o');
        await browser.pause(2000);
    
        await expect(UserPage.search[0]).toHaveValue('merchant.o');
        console.log(await UserPage.search[0].getValue());

    });

    it('should search by phone number', async () => {
    
        await UserPage.search[1].setValue('089722225656');
        await browser.pause(2000);
    
        await expect(UserPage.search[1]).toHaveValue('089722225656');
        console.log(await UserPage.search[1].getValue());

        await UserPage.search[1].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    
    });

    it('should search by email', async () => {
    
        await UserPage.search[2].setValue('merchant.o@mail.co.id');
        await browser.pause(2000);
    
        await expect(UserPage.search[2]).toHaveValue('merchant.o@mail.co.id');
        console.log(await UserPage.search[2].getValue());

        await UserPage.search[2].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    
    });

    //--------------------------------------------------------------//
    //edit user//

    it('should edit user ', async () => {

        await UserPage.editButton.click();
        await browser.pause(2000);


        await UserPage.firstName.setValue('edit');
        await UserPage.lastName.setValue('user');
        await UserPage.phoneNumber.setValue('081209128734');
        await UserPage.email.setValue('edituser@gmail.com');

        await UserPage.saveButton.click();

        await expect(UserPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);

    });

    it('should edit email already use ', async () => {

        await UserPage.editButton.click();
        await browser.pause(2000);

        await UserPage.firstName.setValue('edit');
        await UserPage.lastName.setValue('user');
        await UserPage.phoneNumber.setValue('081209128734');
        await UserPage.email.setValue('admin@admin.com');

        await UserPage.saveButton.click();
        await UserPage.closeButton.click();

        await expect(UserPage.message).toHaveTextContaining('Email');
        await browser.pause(2000);

    });

    it('should edit phone number already use ', async () => {

        await UserPage.editButton.click();
        await browser.pause(2000);

        await UserPage.firstName.setValue('edit');
        await UserPage.lastName.setValue('user');
        await UserPage.phoneNumber.setValue('089612229995');
        await UserPage.email.setValue('edituser@gmail.com');

        await UserPage.saveButton.click();
        await UserPage.closeButton.click();

        await expect(UserPage.message).toHaveTextContaining('Phone Number');
        await browser.pause(2000);

    });

  
    //--------------------------------------------------------------//
    //delete user//

    it('should cancel delete', async () => {

        await UserPage.deleteButton.click();
        await UserPage.noButton.click();

    });

    it('should close delete', async () => {

        await UserPage.deleteButton.click();
        await browser.pause(2000);
        await UserPage.closeButton.click();

    });

    it('should delete user', async () => {

        await UserPage.deleteButton.click();
        await browser.pause(2000);
        await UserPage.yesButton.click();

        await expect(UserPage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    }); 
    

});