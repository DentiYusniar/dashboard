const LoginPage = require('../pageobjects/login.page');
const CategoryPage = require('../pageobjects/category.page');

describe('Category Page', () => {

    it('should open the url', async () => {
        await LoginPage.open();        
    });

    it('should handle login', async () => {
        await LoginPage.inputUsername.setValue('storeex');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');
    });
    
    it('should open category page', async () => {
       //await CategoryPage.showSidebar.click();
        await CategoryPage.item[1].click();
        await CategoryPage.categoryPage.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/category');
    });

    //Create Category//
    //----------------------------------------------------------------------------------//

    it('should cancle create category', async () => {
        await CategoryPage.addButton.click();
        await browser.pause(2000);
 
        await expect(CategoryPage.formCategory).toBeDisplayed();

        await CategoryPage.categoryName.setValue('Bakmi');
        await CategoryPage.cancelButton.click();

        //expect
        await expect(CategoryPage.categoryName).toHaveValue('Bakmi');

    });

    it('should create category', async () => {
        await CategoryPage.addButton.click();
        await browser.pause(2000);

        await expect(CategoryPage.formCategory).toBeDisplayed();

        await CategoryPage.categoryName.setValue('Bakmi');
        await CategoryPage.saveButton.click();

        //expect
        await expect(CategoryPage.categoryName).toHaveValue('Bakmi');
        await expect(CategoryPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create category already exist', async () => {
        await CategoryPage.addButton.click();
        await browser.pause(2000);

        await expect(CategoryPage.formCategory).toBeDisplayed();

        await CategoryPage.categoryName.setValue('Bakmi');
        await CategoryPage.saveButton.click();
        await CategoryPage.closeButton.click();

        //expect
        await expect(CategoryPage.categoryName).toHaveValue('Bakmi');
        await expect(CategoryPage.message).toHaveTextContaining('Category already exists');
        await browser.pause(2000);
    });

    //category search//
    //----------------------------------------------------------------------------------//

    it('should search category name', async () => {

        const elem = await $('td=Bakmi');

        await CategoryPage.searchName.click();
        await browser.pause(2000);
        await CategoryPage.searchName.setValue('Bakmi');

        //expect
        await expect(CategoryPage.searchName).toHaveValue('Bakmi');
        await expect(elem).toHaveText('Bakmi');
    });
    
    //category detail//
    //----------------------------------------------------------------------------------//

    it('should show category detail', async () => {
        await CategoryPage.detailButton.click();
        await browser.pause(2000);

        await expect(CategoryPage.getTitle).toHaveTextContaining('Detail Category');
        console.log(await CategoryPage.getTitle.getText());

        //expect
        await CategoryPage.closeButton.click();
    });

    //category edit//
    //----------------------------------------------------------------------------------//
    it('should edit category name already exist', async () => {
        await CategoryPage.editButton.click();
        await browser.pause(2000);
 
        await expect(CategoryPage.formCategory).toBeDisplayed();

        await CategoryPage.categoryName.setValue('Foods');
        await browser.pause(2000);

        await CategoryPage.saveButton.click();
        await CategoryPage.closeButton.click();

        //expect
        await expect(CategoryPage.message).toHaveTextContaining('Category Foods is already exist');
        await browser.pause(2000);

    });

    it('should edit category', async () => {
        await CategoryPage.editButton.click();
        await browser.pause(2000);

        await expect(CategoryPage.formCategory).toBeDisplayed();

        await CategoryPage.categoryName.doubleClick();
        await browser.keys("Delete");
        await browser.pause(2000);

        await CategoryPage.categoryName.setValue('Seblak');
        await CategoryPage.saveButton.click();

        //expect
        await expect(CategoryPage.categoryName).toHaveValue('Seblak');
        await expect(CategoryPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);
    });

    //category delete//
    //----------------------------------------------------------------------------------//
    
    it('should search category name', async () => {
        await CategoryPage.searchName.click();
        await CategoryPage.searchName.setValue('Seblak');

        //expect
        await expect(CategoryPage.searchName).toHaveValue('Seblak');
    });

    it('should cancel delete', async () => {

        await CategoryPage.deleteButton.click();
        await expect(CategoryPage.formCategory).toBeDisplayed();

        //expect
        await CategoryPage.noButton.click();

    });

    it('should close delete', async () => {

        await CategoryPage.deleteButton.click();

        //expect
        await expect(CategoryPage.formCategory).toBeDisplayed();

        await CategoryPage.closeButton.click();

    });

    it('should delete a category', async () => {

        await CategoryPage.deleteButton.click();

        await expect(CategoryPage.formCategory).toBeDisplayed();

        await CategoryPage.yesButton.click();

        //expect
        await expect(CategoryPage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    });    

});