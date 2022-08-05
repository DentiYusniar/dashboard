const LoginPage = require('../pageobjects/login.page');
const StorePage = require('../pageobjects/store.page');

describe('Store Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('merchantex');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });
    
    it('should open store list', async () => {
        await StorePage.openDatabase[0].click();
        await StorePage.openStoreList.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/store');

    });
    //-------------------------------------------------------------------------------//
    //add store//

    it('should create store', async () => {

        await StorePage.addButton.click();
        await browser.pause(3000);

        await StorePage.storeName.setValue('Example Store A');

        //choose img
        const filePath = 'C:/Users/beps/Documents/Img/logo.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await StorePage.thumbnail.setValue(remoteFilePath);

        //headers
        await StorePage.headers[0].setValue('First line headers Store A');
        await StorePage.headers[1].setValue('Second line headers Store A');
        await StorePage.headers[2].setValue('Thrid line headers Store A');

        //footers
        await StorePage.footers[0].setValue('First line footers Store A');
        await StorePage.footers[1].setValue('Second line footers Store A');
        await StorePage.footers[2].setValue('Third line footers Store A');

        await StorePage.fullAddress.setValue('jl. guru mughni');
        await StorePage.province.setValue('DKI Jakarta');
        await StorePage.city.setValue('Jakarta Selatan');
        await StorePage.subDistrict.setValue('Setiabudi');
        await StorePage.village.setValue('Karet Semanggi');
        await StorePage.postalCode.setValue('12930');

        await StorePage.saveButton.click();

        //expect
        await expect(StorePage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create store name already exist', async () => {

        await StorePage.addButton.click();

        await StorePage.storeName.setValue('Example Store A');

        //choose img
        const filePath = 'C:/Users/beps/Documents/Img/logo.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await StorePage.thumbnail.setValue(remoteFilePath);

        //headers
        await StorePage.headers[0].setValue('First line headers Store B');
        await StorePage.headers[1].setValue('Second line headers Store B');
        await StorePage.headers[2].setValue('Thrid line headers Store B');

        //footers
        await StorePage.footers[0].setValue('First line footers Store B');
        await StorePage.footers[1].setValue('Second line footers Store B');
        await StorePage.footers[2].setValue('Third line footers Store B');

        await StorePage.fullAddress.setValue('jl. guru mughni');
        await StorePage.province.setValue('DKI Jakarta');
        await StorePage.city.setValue('Jakarta Selatan');
        await StorePage.subDistrict.setValue('Setiabudi');
        await StorePage.village.setValue('Karet Semanggi');
        await StorePage.postalCode.setValue('12930');

        await StorePage.saveButton.click();
        await StorePage.closeButton.click();

        //expect
        await expect(StorePage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });

    it('should create empty store name', async () => {

        await StorePage.addButton.click();

        //choose img
        const filePath = 'C:/Users/beps/Documents/Img/logo.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await StorePage.thumbnail.setValue(remoteFilePath);

        //headers
        await StorePage.headers[0].setValue('First line headers Store C');
        await StorePage.headers[1].setValue('Second line headers Store C');
        await StorePage.headers[2].setValue('Thrid line headers Store C');

        //footers
        await StorePage.footers[0].setValue('First line footers Store C');
        await StorePage.footers[1].setValue('Second line footers Store C');
        await StorePage.footers[2].setValue('Third line footers Store C');

        await StorePage.fullAddress.setValue('jl. guru mughni');
        await StorePage.province.setValue('DKI Jakarta');
        await StorePage.city.setValue('Jakarta Selatan');
        await StorePage.subDistrict.setValue('Setiabudi');
        await StorePage.village.setValue('Karet Semanggi');
        await StorePage.postalCode.setValue('12930');

        await StorePage.saveButton.click();
        await StorePage.closeButton.click();

        //expect
        await expect(StorePage.message).toHaveTextContaining('Name could not be empty');
        await browser.pause(2000);

    });

    it('should create empty footers and headers', async () => {

        await StorePage.addButton.click();

        await StorePage.storeName.setValue('Example Store D');

        await StorePage.fullAddress.setValue('jl. guru mughni');
        await StorePage.province.setValue('DKI Jakarta');
        await StorePage.city.setValue('Jakarta Selatan');
        await StorePage.subDistrict.setValue('Setiabudi');
        await StorePage.village.setValue('Karet Semanggi');

        await StorePage.postalCode.setValue('12930');
        await StorePage.saveButton.click();

        //expect
        await expect(StorePage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });   

    it('should create empty address', async () => {


        await StorePage.addButton.click();

        await StorePage.storeName.setValue('Example Store E');

        //choose img
        const filePath = 'C:/Users/beps/Documents/Img/logo.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await StorePage.thumbnail.setValue(remoteFilePath);

        //headers
        await StorePage.headers[0].setValue('First line headers Store E');
        await StorePage.headers[1].setValue('Second line headers Store E');
        await StorePage.headers[2].setValue('Thrid line headers Store E');

        //footers
        await StorePage.footers[0].setValue('First line footers Store E');
        await StorePage.footers[1].setValue('Second line footers Store E');
        await StorePage.footers[2].setValue('Third line footers Store E');

        await StorePage.saveButton.click();

        //expect
        await expect(StorePage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should click batal form add', async () => {

        await StorePage.addButton.click();

        await StorePage.storeName.setValue('test');

        await StorePage.cancelButton.click();

    });

    //------------------------------------------------------//
    //search//

    it('should search by name', async () => {

        await StorePage.search[0].setValue('Example Store A');
        await browser.pause(2000);
    
        //expect
        await expect(StorePage.search[0]).toHaveValue('Example Store A');
        console.log(await StorePage.search[0].getValue());

    });   

    it('should open detail store', async () => {

        await StorePage.detailStore.click();
        await browser.pause(2000);

        //expect
        await expect(StorePage.getTitle).toHaveTextContaining('Detail Store');
        console.log(await StorePage.getTitle.getText());

        await StorePage.closeButton.click();

    });

    //edit store//

    it('should edit store name already exist', async () => {

        await StorePage.editButton.click();
        await browser.pause(2000);

        await StorePage.storeName.setValue('Example Store D');

        //choose img
        const filePath = 'C:/Users/beps/Documents/Img/logo.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await StorePage.thumbnail.setValue(remoteFilePath);

        //headers
        await StorePage.headers[0].setValue('First line headers Store F');
        await StorePage.headers[1].setValue('Second line headers Store F');
        await StorePage.headers[2].setValue('Thrid line headers Store F');

        //footers
        await StorePage.footers[0].setValue('First line footers Store F');
        await StorePage.footers[1].setValue('Second line footers Store F');
        await StorePage.footers[2].setValue('Third line footers Store F');

        await StorePage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await StorePage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await StorePage.city.setValue('Kota Jakarta Pusat');
        await StorePage.subDistrict.setValue('Kecamatan Tanah Abang');
        await StorePage.village.setValue('Karet Tengsin');
        await StorePage.postalCode.setValue('10250');
        await StorePage.saveButton.click();
        await StorePage.cancelButton.click()

        //expect
        await expect(StorePage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);
    });

    it('should edit empty store name', async () => {

        await StorePage.editButton.click();
        await browser.pause(2000);

        await StorePage.storeName.setValue('');

        //choose img
        const filePath = 'C:/Users/beps/Documents/Img/logo.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await StorePage.thumbnail.setValue(remoteFilePath);

        //headers
        await StorePage.headers[0].setValue('First line headers Store G');
        await StorePage.headers[1].setValue('Second line headers Store G');
        await StorePage.headers[2].setValue('Thrid line headers Store G');

        //footers
        await StorePage.footers[0].setValue('First line footers Store G');
        await StorePage.footers[1].setValue('Second line footers Store G');
        await StorePage.footers[2].setValue('Third line footers Store G');

        await StorePage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await StorePage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await StorePage.city.setValue('Kota Jakarta Pusat');
        await StorePage.subDistrict.setValue('Kecamatan Tanah Abang');
        await StorePage.village.setValue('Karet Tengsin');
        await StorePage.postalCode.setValue('10250');
        await StorePage.saveButton.click();
        await StorePage.cancelButton.click();

        //expect
        await expect(StorePage.message).toHaveTextContaining('Name could not be empty');
        await browser.pause(2000);

    });

    it('should edit store', async () => {

        await StorePage.editButton.click();
        await browser.pause(2000);

        await StorePage.storeName.setValue('Example Store G');

        //choose img
        const filePath = 'C:/Users/beps/Documents/Img/logo.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);
        await StorePage.thumbnail.setValue(remoteFilePath);

        //headers
        await StorePage.headers[0].setValue('First line headers Store G');
        await StorePage.headers[1].setValue('Second line headers Store G');
        await StorePage.headers[2].setValue('Thrid line headers Store G');

        //footers
        await StorePage.footers[0].setValue('First line footers Store G');
        await StorePage.footers[1].setValue('Second line footers Store G');
        await StorePage.footers[2].setValue('Third line footers Store G');

        await StorePage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await StorePage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await StorePage.city.setValue('Kota Jakarta Pusat');
        await StorePage.subDistrict.setValue('Kecamatan Tanah Abang');
        await StorePage.village.setValue('Karet Tengsin');
        await StorePage.postalCode.setValue('10250');
        await StorePage.saveButton.click();

        //expect
        await expect(StorePage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);

    });

    //delete store//

    it('should search by name', async () => {

        await StorePage.search[0].click();
        await StorePage.search[0].setValue('Example Store G');
    
        //expect
        await expect(StorePage.search[0]).toHaveValue('Example Store G');
        console.log(await StorePage.search[0].getValue());

    });  

    it('should close delete', async () => {

        await StorePage.deleteStore.click();
        await browser.pause(2000);
        await StorePage.closeButton.click();

    });

    /**
     * it('should cancel delete', async () => {

        await StorePage.deleteStore.click();
        await browser.pause(2000);
        await StorePage.noButton.click();

    });
    */

    it('should delete store', async () => {

        await StorePage.deleteStore.click();
        await browser.pause(2000);
        await StorePage.yesButton.click();

        //expect
        await expect(StorePage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    });

});