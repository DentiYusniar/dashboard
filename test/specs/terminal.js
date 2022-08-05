const LoginPage = require('../pageobjects/login.page');
const TerminalPage = require('../pageobjects/terminal.page');

describe('Terminal Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('superadmin');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });
    
    it('should open terminal list', async () => {

        /**
        await TerminalPage.maxSidebar.click();
        await browser.pause(2000);
        */
        await TerminalPage.openTerminal[2].click();
        await browser.pause(2000);
        await TerminalPage.terminalList.click();
        await browser.pause(2000);

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/terminal');

    });
    //-------------------------------------------------------------------------------//
    //addterminal//

    it('should create terminal', async () => {

        await TerminalPage.addButton.click();
        await browser.pause(2000);
        await TerminalPage.serialNumber.setValue('SN99887766554433');
        await TerminalPage.brand.setValue('Ingenico');
        await TerminalPage.model.setValue('APOS A8');
        await TerminalPage.type.selectByIndex(1);
        await TerminalPage.description.setValue('APOS A8 dengan serial number : SN99887766554433');
        await TerminalPage.saveButton.click();

        await expect(TerminalPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create SN already use', async () => {

        await TerminalPage.addButton.click();
        await browser.pause(2000);
        await TerminalPage.serialNumber.setValue('SN99887766554433');
        await TerminalPage.brand.setValue('Ingenico');
        await TerminalPage.model.setValue('APOS A8');
        await TerminalPage.type.selectByIndex(1);
        await TerminalPage.description.setValue('APOS A8 dengan serial number : SN99887766554433');
        await TerminalPage.saveButton.click();
        await TerminalPage.closeButton.click();

        await expect(TerminalPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });

    it('should create empty SN', async () => {

        await TerminalPage.addButton.click();
        await browser.pause(2000);
        await TerminalPage.serialNumber.setValue('');
        await TerminalPage.brand.setValue('Ingenico');
        await TerminalPage.model.setValue('APOS A8');
        await TerminalPage.type.selectByIndex(1);
        await TerminalPage.description.setValue('APOS A8 dengan serial number : ');
        await TerminalPage.saveButton.click();
        await TerminalPage.closeButton.click();

        await expect(TerminalPage.message).toHaveTextContaining('Serial Number could not be empty');
        await browser.pause(2000);

    });

    it('should create empty brand', async () => {

        await TerminalPage.addButton.click();
        await browser.pause(2000);
        await TerminalPage.serialNumber.setValue('SNN9988667755665');
        await TerminalPage.brand.setValue('');
        await TerminalPage.model.setValue('APOS A8');
        await TerminalPage.type.selectByIndex(2);
        await TerminalPage.description.setValue('APOS A8 dengan serial number : SNN9988667755665');
        await TerminalPage.saveButton.click();
        await TerminalPage.closeButton.click();

        await expect(TerminalPage.message).toHaveTextContaining('Brand could not be empty');
        await browser.pause(2000);

    });

    it('should create empty model', async () => {

        await TerminalPage.addButton.click();
        await browser.pause(2000);
        await TerminalPage.serialNumber.setValue('SNN0099885566774');
        await TerminalPage.brand.setValue('Ingenico');
        await TerminalPage.model.setValue('');
        await TerminalPage.type.selectByIndex(1);
        await TerminalPage.description.setValue('APOS A8 dengan serial number : SNN0099885566774');
        await TerminalPage.saveButton.click();
        await TerminalPage.closeButton.click();

        await expect(TerminalPage.message).toHaveTextContaining('Model could not be empty');
        await browser.pause(2000);

    });

    it('should click cancel form add', async () => {

        await TerminalPage.addButton.click();
        await browser.pause(3000);

        await TerminalPage.serialNumber.setValue('SN99887766554434');
        await TerminalPage.cancelButton.click();

    });

    //------------------------------------------------------//
    //search//

    it('should search by sn', async () => {

        await TerminalPage.search[0].setValue('SN99887766554433');
    
        await expect(TerminalPage.search[0]).toHaveValue('SN99887766554433');
        console.log(await TerminalPage.search[0].getValue());

    });   
    
    /**
    it('should search by tid', async () => {
    
        await TerminalPage.search[1].setValue('');
    
        await expect(TerminalPage.search[1]).toHaveValue('');
        console.log(await TerminalPage.search[1].getValue());
    
        await TerminalPage.search[1].clearValue();
    
    });
    */  
    
    it('should search by brand', async () => {
    
        await TerminalPage.search[2].setValue('Ingenico');
        await browser.pause(2000);
    
        await expect(TerminalPage.search[2]).toHaveValue('Ingenico');
        console.log(await TerminalPage.search[2].getValue());

        await TerminalPage.search[2].doubleClick();
        await browser.keys("Delete");
    
    });

    it('should search by model', async () => {
    
        await TerminalPage.search[3].setValue('APOS A8');
        await browser.pause(2000);
    
        await expect(TerminalPage.search[3]).toHaveValue('APOS A8');
        console.log(await TerminalPage.search[3].getValue());

        await TerminalPage.search[3].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    
    });

    it('should search by type', async () => {
    
        await TerminalPage.search[4].setValue('POS');
        await browser.pause(2000);
    
        await expect(TerminalPage.search[4]).toHaveValue('POS');
        console.log(await TerminalPage.search[4].getValue());

        await TerminalPage.search[4].doubleClick();
        await browser.keys("Delete");
    
    });

    it('should search by status', async () => {
    
        await TerminalPage.search[5].setValue('new');
        await browser.pause(2000);
    
        await expect(TerminalPage.search[5]).toHaveValue('new');
        console.log(await TerminalPage.search[5].getValue());

        await TerminalPage.search[5].doubleClick();
        await browser.keys("Delete");
    
    });

    //----------------------------------------------------------------------//
    //detail terminal//

    it('should open detail terminal', async () => {

        await TerminalPage.detailTerminal.click();
        await browser.pause(2000);

        await TerminalPage.closeButton.click();
    });

    //----------------------------------------------------------------------//
    //edit terminal//

    it('should edit SN name already exist', async () => {
        await TerminalPage.editButton.click();
        await browser.pause(2000);

        await TerminalPage.serialNumber.setValue('298473703545778');
        await TerminalPage.brand.setValue('Ingenico');
        await TerminalPage.model.setValue('APOS A8');
        await TerminalPage.status.selectByIndex(4);
        await TerminalPage.type.selectByIndex(2);

        await TerminalPage.saveButton.click();
        await TerminalPage.closeButton.click();

        await expect(TerminalPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);
    });

    it('should edit empty SN', async () => {
        await TerminalPage.editButton.click();
        await browser.pause(2000);

        await TerminalPage.serialNumber.setValue('');
        await TerminalPage.brand.setValue('Ingenico');
        await TerminalPage.model.setValue('APOS A8');
        await TerminalPage.status.selectByIndex(4);
        await TerminalPage.type.selectByIndex(2);
        await TerminalPage.description.setValue('Haha Description');

        await TerminalPage.saveButton.click();
        await TerminalPage.closeButton.click();

        await expect(TerminalPage.message).toHaveTextContaining('Serial Number could not be empty');
        await browser.pause(2000);

    });

    it('should edit empty brand', async () => {
        await TerminalPage.editButton.click();
        await browser.pause(2000);

        await TerminalPage.serialNumber.setValue('SNM8787878787888');
        await TerminalPage.brand.setValue('');
        await TerminalPage.model.setValue('5122');
        await TerminalPage.status.selectByIndex(4);
        await TerminalPage.type.selectByIndex(2);
        await TerminalPage.description.setValue('Haha Description');

        await TerminalPage.saveButton.click();
        await TerminalPage.closeButton.click();

        await expect(TerminalPage.message).toHaveTextContaining('Brand could not be empty');
        await browser.pause(2000);

    });

    it('should edit empty model', async () => {
        await TerminalPage.editButton.click();
        await browser.pause(2000);

        await TerminalPage.serialNumber.setValue('SNM8787878787887');
        await TerminalPage.brand.setValue('Landi');
        await TerminalPage.model.setValue('');
        await TerminalPage.status.selectByIndex(4);
        await TerminalPage.type.selectByIndex(2);
        await TerminalPage.description.setValue('Haha Description');

        await TerminalPage.saveButton.click();
        await TerminalPage.closeButton.click();

        await expect(TerminalPage.message).toHaveTextContaining('Model could not be empty');
        await browser.pause(2000);

    });

    it('should edit terminal', async () => {
        await TerminalPage.editButton.click();
        await browser.pause(2000);

        await TerminalPage.serialNumber.setValue('SN99887766554435');
        await TerminalPage.brand.setValue('Ingenico');
        await TerminalPage.model.setValue('APOS A8');
        await TerminalPage.status.selectByIndex(4);
        await TerminalPage.type.selectByIndex(2);
        await TerminalPage.description.setValue('Haha Description');

        await TerminalPage.saveButton.click();

        await expect(TerminalPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);
    });

    //------------------------------------------------------------------//
    //delete terminal//

    it('should search terminal', async () => {

        await browser.pause(2000);
        await TerminalPage.search[0].setValue('SN99887766554435');
    });

    it('should close delete', async () => {
        await TerminalPage.deleteTerminal.click();
        await TerminalPage.closeButton.click();
    });

    /**
    it('should cancel delete', async () => {
        await TerminalPage.deleteTerminal.click();
        await TerminalPage.noButton.click();
    });
    */

    it('should delete terminal', async () => {
        await TerminalPage.deleteTerminal.click();
        await TerminalPage.yesButton.click();

        await expect(TerminalPage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);
    });

});