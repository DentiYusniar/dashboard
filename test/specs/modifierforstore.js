const LoginPage = require('../pageobjects/login.page');
const ModifierPage = require('../pageobjects/modifier.page');

describe('Modifier Page', () => {

    it('should open the url', async () => {
        await LoginPage.open();        
    });

    it('should handle login', async () => {
        await LoginPage.inputUsername.setValue('storeex');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');
    });
    
    it('should open modifier page', async () => {
        await ModifierPage.item[1].click();
        await ModifierPage.modifierPage.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/modifier');
    });

    //Create modifier//
    //----------------------------------------------------------------------------------//

    it('should cancle create modifier', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Toping');
        await ModifierPage.cancelButton.click();

    });

    it('should create modifier', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Modifier A');
        await ModifierPage.isMultiple.click();
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value A');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.saveButton.click();

        await expect(ModifierPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create modifier title already exist ', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Modifier A');
        await ModifierPage.isMultiple.click();
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value A');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('Modifier already exists');
        await browser.pause(2000);
    });

    it('should create modifier empty minimum ', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Modifier B');
        await ModifierPage.isMultiple.click();
        await ModifierPage.minimum.doubleClick();
        await browser.keys("Delete");
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value B');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('Min value must be an integer');
        await browser.pause(2000);
    });

    it('should create modifier empty maximum ', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Modifier C');
        await ModifierPage.isMultiple.click();
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.doubleClick();
        await browser.keys("Delete");
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value C');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('Max value must be an integer');
        await browser.pause(2000);
    });

    it('should create modifier without value', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Modifier D');
        await ModifierPage.isMultiple.click();
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('values could not be empty');
        await browser.pause(2000);
    });

    it('should create modifier empty value name', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Modifier E');
        await ModifierPage.isMultiple.click();
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('name could not be empty');
        await browser.pause(2000);
    });

    it('should create modifier empty unit price ', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Modifier F');
        await ModifierPage.isMultiple.click();
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value E');
        await ModifierPage.available.click();
        await ModifierPage.price[0].doubleClick();
        await browser.keys("Delete");
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('unitPrice could not be empty');
        await browser.pause(2000);
    });

    it('should create duplicate value name', async () => {
        await ModifierPage.addButton.click();
        await ModifierPage.modifierTitle.setValue('Modifier G');
        await ModifierPage.isMultiple.click();
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click(); //value 1
        await ModifierPage.valueName[0].setValue('Value F');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.setValue.click(); //value 2
        await ModifierPage.valueName[1].setValue('Value F');
        await ModifierPage.available.click();
        await ModifierPage.price[1].setValue(0);
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('Value name cannot be duplicate');
        await browser.pause(2000);
    });

    //modifier search//
    //----------------------------------------------------------------------------------//

    it('should search modifier title', async () => {
        await ModifierPage.search[0].setValue('Modifier A');

        await expect(ModifierPage.search[0]).toHaveValue('Modifier A');
    });

    it('should search minimum', async () => {
        await ModifierPage.search[2].setValue('1');

        await expect(ModifierPage.search[2]).toHaveValue('1');

        await ModifierPage.search[2].doubleClick();
        await browser.keys("Delete");

    });

    it('should search macimum', async () => {
        await ModifierPage.search[3].setValue('3');

        await expect(ModifierPage.search[3]).toHaveValue('3');

        await ModifierPage.search[3].doubleClick();
        await browser.keys("Delete");

    });
    
    //modifier detail//
    //----------------------------------------------------------------------------------//

    it('should show category detail', async () => {
        await ModifierPage.detailButton.click();

        await expect(ModifierPage.getTitle).toHaveTextContaining('Detail Modifier');
        console.log(await ModifierPage.getTitle.getText());

        await ModifierPage.closeButton.click();
    });

    //Modifier edit//
    //----------------------------------------------------------------------------------//

    it('should edit modifier title already exist ', async () => {
        await ModifierPage.editButton.click();
        await browser.pause(2000);
        await ModifierPage.buttonX.click();

        await ModifierPage.modifierTitle.setValue('Topping');
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value A');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('Modifier Title Topping is already exist');
        await browser.pause(2000);
    });

    it('should edit modifier empty minimum ', async () => {
        await ModifierPage.editButton.click();
        await browser.pause(2000);
        await ModifierPage.buttonX.click();

        await ModifierPage.modifierTitle.setValue('Modifier B');
        await ModifierPage.minimum.doubleClick();
        await browser.keys("Delete");
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value B');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('Min value must be an integer');
        await browser.pause(2000);
    });

    it('should edit modifier empty maximum ', async () => {
        await ModifierPage.editButton.click();
        await browser.pause(2000);
        await ModifierPage.buttonX.click();

        await ModifierPage.modifierTitle.setValue('Modifier C');
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.doubleClick();
        await browser.keys("Delete");
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value C');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('Max value must be an integer');
        await browser.pause(2000);
    });

    it('should edit modifier without value', async () => {
        await ModifierPage.editButton.click();
        await browser.pause(2000);
        await ModifierPage.buttonX.click();

        await ModifierPage.modifierTitle.setValue('Modifier D');
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('values could not be empty');
        await browser.pause(2000);
    });

    it('should edit modifier empty value name', async () => {
        await ModifierPage.editButton.click();
        await browser.pause(2000);
        await ModifierPage.buttonX.click();

        await ModifierPage.modifierTitle.setValue('Modifier E');
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('name could not be empty');
        await browser.pause(2000);
    });

    it('should edit modifier empty unit price ', async () => {
        await ModifierPage.editButton.click();
        await browser.pause(2000);
        await ModifierPage.buttonX.click();

        await ModifierPage.modifierTitle.setValue('Modifier F');
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value E');
        await ModifierPage.available.click();
        await ModifierPage.price[0].doubleClick();
        await browser.keys("Delete");
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('unitPrice could not be empty');
        await browser.pause(2000);
    });

    it('should edit duplicate value name', async () => {
        await ModifierPage.editButton.click();
        await browser.pause(2000);
        await ModifierPage.buttonX.click();

        await ModifierPage.modifierTitle.setValue('Modifier G');
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click(); //value 1
        await ModifierPage.valueName[0].setValue('Value F');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.setValue.click(); //value 2
        await ModifierPage.valueName[1].setValue('Value F');
        await ModifierPage.available.click();
        await ModifierPage.price[1].setValue(0);
        await ModifierPage.saveButton.click();
        await ModifierPage.closeButton.click();

        await expect(ModifierPage.message).toHaveTextContaining('Value name cannot be duplicate');
        await browser.pause(2000);
    });

    it('should edit modifier', async () => {
        await ModifierPage.editButton.click();
        await browser.pause(2000);
        await ModifierPage.buttonX.click();

        await ModifierPage.modifierTitle.setValue('Modifier H');
        await ModifierPage.minimum.setValue('1');
        await ModifierPage.maximum.setValue('3');
        await ModifierPage.setValue.click();
        await ModifierPage.valueName[0].setValue('Value H');
        await ModifierPage.available.click();
        await ModifierPage.price[0].setValue(0);
        await ModifierPage.saveButton.click();

        await expect(ModifierPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);
    });

    //modifier delete//
    //----------------------------------------------------------------------------------//
    
    it('should search modifier H', async () => {
        await ModifierPage.search[0].click();
        await ModifierPage.search[0].setValue('Modifier H');
    
        await expect(ModifierPage.search[0]).toHaveValue('Modifier H');
        console.log(await ModifierPage.search[0].getValue());
    });

    
    it('should cancel delete', async () => {

        await ModifierPage.deleteButton.click();
        await ModifierPage.noButton.click();

        await browser.pause(2000);

    });
    
    it('should close delete', async () => {

        await ModifierPage.deleteButton.click();
        await ModifierPage.closeButton.click();

        await browser.pause(2000);

    });

    it('should delete a modifier', async () => {

        await ModifierPage.deleteButton.click();
        await ModifierPage.yesButton.click();

        await expect(ModifierPage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    });    

});