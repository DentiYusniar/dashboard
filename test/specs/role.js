const LoginPage = require('../pageobjects/login.page');
const RolePage = require('../pageobjects/role.page');

describe('Role Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('superadmin');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('http://devpos.bepsnet.co.id:8002/admin/dashboard');

    });
    
    it('should open role page', async () => {

        await RolePage.roleList.click();

        await expect(browser).toHaveUrl('http://devpos.bepsnet.co.id:8002/admin/role');

    });

    //role add//
    //--------------------------------------//

    it('should cancle create role', async () => {

        await RolePage.addButton.click();

        await RolePage.roleName.setValue('Waiters');
        await browser.pause(2000);
        await RolePage.cancelButton.click();

        await expect(RolePage.roleName).toHaveValue('Waiters');

    });

    it('should create role', async () => {

        await RolePage.addButton.click();
        await browser.pause(2000);

        await RolePage.roleName.setValue('Waiters');
        await browser.pause(2000);
        await RolePage.saveButton.click();

        await expect(RolePage.roleName).toHaveValue('Waiters');
        await expect(RolePage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create role with access', async () => {

        await RolePage.addButton.click();
        await browser.pause(2000);

        await RolePage.roleName.setValue('Kicten');
        await RolePage.accessButton.click();
        await RolePage.accessName.setValue('Users');
        await RolePage.isCreate.click();
        await RolePage.isRead.click();
        await RolePage.isUpdate.click();
        await RolePage.isDelete.click();
        await RolePage.stateName.setValue('/users');

        await browser.pause(2000);
        await RolePage.saveButton.click();

        await expect(RolePage.roleName).toHaveValue('Kicten');
        await expect(RolePage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create role name already exist', async () => {

        await RolePage.addButton.click();
        await browser.pause(2000);

        await RolePage.roleName.setValue('Waiters');
        await RolePage.saveButton.click();
        await RolePage.cancelButton.click();

        await expect(RolePage.message).toHaveTextContaining('already exist');
        await browser.pause(2000);

    });

    //role search//
    //----------------------------------------//

    it('should search role', async () => {

        await RolePage.searchName.click();

        await RolePage.searchName.setValue('Waiters');

        await expect(RolePage.searchName).toHaveValue('Waiters');

    });
    
    //role detail//
    //-----------------------------------------//

    it('should show role detail', async () => {

        await RolePage.roleDetail.click();

        await expect(RolePage.getTitle).toHaveTextContaining('Detail Role');
        console.log(await RolePage.getTitle.getText());

        await RolePage.closeButton.click();

    });

    //role edit//
    //------------------------------------------//
    it('should edit role name already exist', async () => {

        await RolePage.editButton.click();
        await browser.pause(2000);

        await RolePage.roleName.click();

        await RolePage.roleName.setValue('Owner');
        await RolePage.saveButton.click();
        await RolePage.cancelButton.click();

        await expect(RolePage.roleName).toHaveValue('Owner');

    });

    it('should edit role', async () => {

        await RolePage.editButton.click();
        await browser.pause(2000);
        await RolePage.roleName.click();

        await RolePage.roleName.setValue('Barista');
        await RolePage.saveButton.click();

        await expect(RolePage.roleName).toHaveValue('Barista');
        await expect(RolePage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);

    });
   
    //role delete//
    //------------------------------------------//
   
    it('should search role Barista', async () => {
        await RolePage.searchName.setValue('Barista');

        await expect(RolePage.searchName).toHaveValue('Barista');

    });

    //------------------------------------------------------------------//
    //delete//

    /**
    it('should cancel delete', async () => {

        await RolePage.deleteOwner.click();
        await RolePage.noButton.click();

    });
    */
    it('should close delete', async () => {

        await RolePage.deleteButton.click();
        await RolePage.closeButton.click();

    });

    it('should delete a role', async () => {

        await RolePage.deleteButton.click();
        await RolePage.yesButton.click();

        await expect(RolePage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);
        
    });    

});