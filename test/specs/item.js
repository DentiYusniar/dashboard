const LoginPage = require('../pageobjects/login.page');
const ItemPage = require('../pageobjects/item.page');

describe('Item Page', () => {

    it('should open the url', async () => {
        await LoginPage.open();        
    });

    it('should handle login', async () => {
        await LoginPage.inputUsername.setValue('merchantex');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');
    });
    
    it('should open item page', async () => {
       //await ItemPage.showSidebar.click();
        await ItemPage.item[2].click();
        await ItemPage.itemPage.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/item');
    });

    //Create Item//
    //----------------------------------------------------------------------------------//

    it('should create merchant item', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.itemName.setValue('Nasi Goreng Seafood');
        await ItemPage.description.setValue('Nasi goreng dengan isi cumi, udang, rumput laut, bulu babi, daging ikan hiu');
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        
        const filePath = 'C:/Users/beps/Documents/Img/nasi-goreng-seafood.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await ItemPage.thumbnail.setValue(remoteFilePath);

        await ItemPage.saveButton.click();

        await expect(ItemPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    /**
     * it('should create max image size', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.itemName.setValue('Nasi Goreng Hmmn');
        await ItemPage.description.setValue('Nasi goreng dengan isi cumi, udang, rumput laut, bulu babi, daging ikan hiu');
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        
        const filePath = 'C:/Users/beps/Documents/Img/nasi goreng seafood.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await ItemPage.thumbnail.setValue(remoteFilePath);

        await ItemPage.saveButton.click();
        await ItemPage.closeButton.click();

        await expect(ItemPage.message).toHaveTextContaining('Entity Too Large');
        await browser.pause(2000);
    });
    */


    it('should create item already exist', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.itemName.setValue('Nasi Goreng Seafood');
        await ItemPage.description.setValue('Nasi goreng dengan isi cumi, udang, rumput laut, bulu babi, daging ikan hiu');
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();

        await ItemPage.closeButton.click();
        
        await expect(ItemPage.message).toHaveTextContaining('Type could not be empty');
        await browser.pause(2000);
    });

    it('should create item empty name', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.description.setValue('Nasi goreng dengan isi cumi, udang, rumput laut, bulu babi, daging ikan hiu');
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();

        await ItemPage.closeButton.click();
        
        await expect(ItemPage.message).toHaveTextContaining('Name could not be empty');
        await browser.pause(2000);
    });

    it('should create empty type', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemName.setValue('Nasi Goreng Bakso');
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.description.setValue('Nasi goreng dengan isi bakso boraks');
        await ItemPage.openPrice.click();
        await ItemPage.available.click()
        await ItemPage.saveButton.click();
        await ItemPage.closeButton.click();

        await expect(ItemPage.message).toHaveTextContaining('Type could not be empty');
        await browser.pause(2000);
    });

    it('should create empty category', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.itemName.setValue('Nasi Goreng Sosis');
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.description.setValue('Nasi goreng dengan isi sosis ayam, sosis sapi dan sosis unta');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();

        await expect(ItemPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create empty modifier', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.itemName.setValue('Nasi Goreng Mawut');
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.description.setValue('Nasi goreng campur mie burung dara, enaknya nyambung terus!');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();

        await expect(ItemPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create item empty description', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.itemName.setValue('Nasi Goreng Aw');
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();
        
        await expect(ItemPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create empty price', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.itemName.setValue('Nasi Goreng Gila');
        await ItemPage.unitPrice.doubleClick();
        await browser.keys("Delete");
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.description.setValue('Nasi goreng gila banget. capek!');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();
        await ItemPage.closeButton.click();
        
    });

    it('should create decimal unit price', async () => {
        await ItemPage.addButton.click();
        await browser.pause(2000);

        await ItemPage.itemType.click();
        await browser.pause(2000);
        await ItemPage.itemType.selectByIndex(1);
        await ItemPage.itemName.setValue('Nasi Goreng Gila');
        await ItemPage.unitPrice.setValue('19000.50');
        await ItemPage.category.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.modifier.click();
        await browser.keys("Enter");
        await ItemPage.getTitle.click();
        await ItemPage.description.setValue('Nasi goreng gila banget. capek!');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();

        await expect(ItemPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
        
    });

    //item search//
    //----------------------------------------------------------------------------------//

    it('should search item name', async () => {
        await ItemPage.search[0].setValue('Nasi Goreng Seafood');

        await expect(ItemPage.search[0]).toHaveValue('Nasi Goreng Seafood');
    });
    //item detail//
    //----------------------------------------------------------------------------------//

    it('should show item detail', async () => {
        await ItemPage.detailButton.click();

        await expect(ItemPage.getTitle).toHaveTextContaining('Detail Item');
        console.log(await ItemPage.getTitle.getText());

        await ItemPage.closeButton.click();
    });

    //item edit//
    //----------------------------------------------------------------------------------//

    it('should edit empty description', async () => {
        await ItemPage.editButton.click();
        await browser.pause(2000);
        
        await ItemPage.itemName.setValue('Nasi Goreng Seafood');
        await ItemPage.description.setValue('');
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();
        
        await expect(ItemPage.message).toHaveTextContaining('Updated Successfully');
        await browser.pause(2000);
    });

    it('should edit empty name', async () => {
        await ItemPage.editButton.click();
        await browser.pause(2000);
        
        await ItemPage.itemName.setValue('');
        await ItemPage.description.setValue('Nasi goreng dengan isi cumi, udang, rumput laut, bulu babi, daging ikan hiu');
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();

        await ItemPage.closeButton.click();
        
        await expect(ItemPage.message).toHaveTextContaining('Name could not be empty');
        await browser.pause(2000);
    });

    it('should edit empty unit price', async () => {
        await ItemPage.editButton.click();
        await browser.pause(2000);
        
        await ItemPage.itemName.setValue('Nasi Goreng Seafood');
        await ItemPage.description.setValue('Nasi goreng dengan isi cumi, udang, rumput laut, bulu babi, daging ikan hiu');
        await ItemPage.unitPrice.doubleClick();
        await browser.keys("Delete");
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();

        await ItemPage.closeButton.click();
        
        await expect(ItemPage.message).toHaveTextContaining('Unit Price could not be empty');
        await browser.pause(2000);
    });

    it('should edit empty category', async () => {
        await ItemPage.editButton.click();
        await browser.pause(2000);
        
        await ItemPage.itemName.setValue('Nasi Goreng Seafood');
        await ItemPage.description.setValue('Nasi goreng dengan isi cumi, udang, rumput laut, bulu babi, daging ikan hiu');
        await ItemPage.category.click();
        await ItemPage.closeIcon[0].click();
        await ItemPage.getTitle.click();
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();

        await ItemPage.closeButton.click();
        
        await expect(ItemPage.message).toHaveTextContaining('Updated Successfully');
        await browser.pause(2000);
    });

    it('should edit empty modifier', async () => {
        await ItemPage.editButton.click();
        await browser.pause(2000);
        
        await ItemPage.itemName.setValue('Nasi Goreng Seafood');
        await ItemPage.description.setValue('Nasi goreng dengan isi cumi, udang, rumput laut, bulu babi, daging ikan hiu');
        await ItemPage.modifier.click();
        await ItemPage.closeIcon[0].click();
        await ItemPage.getTitle.click();
        await ItemPage.unitPrice.setValue('19000');
        await ItemPage.openPrice.click();
        await ItemPage.available.click();
        await ItemPage.saveButton.click();
        
        await expect(ItemPage.message).toHaveTextContaining('Updated Successfully');
        await browser.pause(2000);
    });

    //item delete//
    //----------------------------------------------------------------------------------//
    
    it('should search item', async () => {
        await ItemPage.search[0].click();
        await ItemPage.search[0].setValue('Nasi Goreng Gila');

        await expect(ItemPage.search[0]).toHaveValue('Nasi Goreng Gila');
    });

    /**
    it('should cancel delete', async () => {

        await RolePage.deleteOwner.click();
        await RolePage.noButton.click();

    });
    */
    it('should close delete', async () => {

        await ItemPage.deleteButton.click();
        await ItemPage.closeButton.click();

    });

    it('should delete a item', async () => {

        await ItemPage.deleteButton.click();
        await ItemPage.yesButton.click();

        await expect(ItemPage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    });    

});