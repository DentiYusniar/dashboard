const LoginPage = require('../pageobjects/login.page');
const MerchantPage = require('../pageobjects/merchant.page');

describe('Merchant Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('orangtua');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });
    
    it('should open merchant list', async () => {

        await MerchantPage.openDatabase[0].click();

        await MerchantPage.openMerchantList.click();

        //expect
        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/merchant');

    });
    //-------------------------------------------------------------------------------//
    //add merchant//

    it('should create merchant', async () => {

        await MerchantPage.addButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant A');
        await MerchantPage.mid.setValue('444444444444444');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();

        //expect
        await expect(MerchantPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create merchant name already exist', async () => {

        await MerchantPage.addButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant A');
        await MerchantPage.mid.setValue('555555555555555');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();

        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });

    it('should create MID less than 15 chars', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('Merchant B');
        await MerchantPage.mid.setValue('MID13654');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('mid must contain 15 characters');
        await browser.pause(2000);

    });

    it('should create MID already use', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('Merchant C');
        await MerchantPage.mid.setValue('444444444444444');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();
        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('Mid is already taken');
        await browser.pause(2000);

    });    

    it('should create decimal tax value', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('Merchant D');
        await MerchantPage.mid.setValue('777777777777777');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.setValue('5.5');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();

        //expect
        await expect(MerchantPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create decimal service Charge Value', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('Merchant E');
        await MerchantPage.mid.setValue('888888888888888');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5.5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();

        //expect
        await expect(MerchantPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create empty mid', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('Merchant F');
        await MerchantPage.mid.setValue('');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();

        //expect
        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('mid could not be empty');


    });

    it('should create empty name', async () => {

        await MerchantPage.addhButton.click();

        await MerchantPage.mid.setValue('MID999999999999');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('Name could not be empty');

    });

    it('should create empty tax Value', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('Merchant G');
        await MerchantPage.mid.setValue('MID999999999999');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.doubleClick();
        await browser.keys("Delete");
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('Tax Value could not be empty');

    });

    it('should create empty service charge value', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('Merchant H');
        await MerchantPage.mid.setValue('MID999999999999');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.doubleClick();
        await browser.keys("Delete");
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('Service Charge Value could not be empty');

    });

    it('should create empty address', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('Merchant I');
        await MerchantPage.mid.setValue('666666666666666');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.saveButton.click();

        await expect(MerchantPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should click cancel form add merchant', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.setValue('test');

        await MerchantPage.cancelButton.click();

    });

    //------------------------------------------------------//
    //search//

    it('should search by name', async () => {

        await MerchantPage.search[0].setValue('Merchant A');
    
        await expect(MerchantPage.search[0]).toHaveValue('Merchant A');
        console.log(await MerchantPage.search[0].getValue());

    });   
    
    it('should search by tax value', async () => {
    
        await MerchantPage.search[1].setValue('10');
    
        await expect(MerchantPage.search[1]).toHaveValue('10');
        console.log(await MerchantPage.search[1].getValue());
    
        await MerchantPage.search[1].doubleClick();
        await browser.keys("Delete");
    
    });  
    
    it('should search by service charge', async () => {
    
        await MerchantPage.search[4].setValue('5');
    
        //expect
        await expect(MerchantPage.search[4]).toHaveValue('5');
        console.log(await MerchantPage.search[4].getValue());

        await MerchantPage.search[4].doubleClick();
        await browser.keys("Delete");
    
    });


    it('should open detail merchant', async () => {

        await MerchantPage.detailMerchant.click();
        await browser.pause(2000);

        await expect(MerchantPage.getTitle).toHaveTextContaining('Detail Merchant');
        console.log(await MerchantPage.getTitle.getText());

        await MerchantPage.closeButton.click();

    });

    //-------------------------------------------------------------------------------//
    //edit merchant//

    it('should edit merchant name already exist', async () => {

        await MerchantPage.editButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant FU');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });   

    it('should edit decimal tax value', async () => {

        await MerchantPage.editButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant A');
        await MerchantPage.taxValue.setValue('5.5');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();

        //expect
        await expect(MerchantPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);

    });

    it('should edit decimal tax value', async () => {

        await MerchantPage.editButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant A');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5.5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();

        //expect
        await expect(MerchantPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);

    });

    it('should edit empty merchant name', async () => {

        await MerchantPage.editButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('name could not be empty');
        await browser.pause(2000);

    });   

    it('should edit empty tax value', async () => {

        await MerchantPage.editButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant A');
        await MerchantPage.taxValue.doubleClick();
        await browser.keys("Delete");
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('Tax Value could not be empty');
        await browser.pause(2000);

    });

    it('should edit empty service charge', async () => {

        await MerchantPage.editButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant A');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.doubleClick();
        await browser.keys("Delete");
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        //expect
        await expect(MerchantPage.message).toHaveTextContaining('Service Charge Value could not be empty');
        await browser.pause(2000);

    });

    it('should edit empty address', async () => {

        await MerchantPage.editButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant A');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5.5');
        await MerchantPage.saveButton.click();
        await browser.pause(2000);

        //expect
        await expect(MerchantPage.message).toHaveText('Updated Successfully');

    });

    it('should edit merchant', async () => {

        await MerchantPage.editButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.setValue('Merchant J');
        await MerchantPage.taxValue.setValue('10');
        await MerchantPage.serviceChargeValue.setValue('5');
        await MerchantPage.fullAddress.setValue('jl. guru mughni');
        await MerchantPage.province.setValue('DKI Jakarta');
        await MerchantPage.city.setValue('Jakarta Selatan');
        await MerchantPage.subDistrict.setValue('Setiabudi');
        await MerchantPage.village.setValue('Karet Semanggi');
        await MerchantPage.postalCode.setValue('12930');
        await MerchantPage.saveButton.click();
        await browser.pause(2000);

        //expect
        await expect(MerchantPage.message).toHaveText('Updated Successfully');

    });

    //-------------------------------------------------------------------------------//
    //delete merchant//

    it('should search by name', async () => {

        await MerchantPage.search[0].click();
        await MerchantPage.search[0].setValue('Merchant J');
    
        await expect(MerchantPage.search[0]).toHaveValue('Merchant J');
        console.log(await MerchantPage.search[0].getValue());

    }); 

    
    it('should close delete', async () => {

        await MerchantPage.deleteMerchant.click();
        await browser.pause(2000);

        await MerchantPage.closeButton.click();

    });
  
    it('should cancel delete', async () => {

        await MerchantPage.deleteMerchant.click();
        await browser.pause(2000);

        await MerchantPage.noButton.click();

    });

    it('should delete merchant', async () => {

        await MerchantPage.deleteMerchant.click();
        await browser.pause(2000);

        await MerchantPage.yesButton.click();

        //expect
        await expect(MerchantPage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    });

});