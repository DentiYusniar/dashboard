const LoginPage = require('../pageobjects/login.page');
const MerchantPage = require('../pageobjects/merchant.page');

describe('Merchant Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.addValue('orangtua');
        await LoginPage.inputPassword.addValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('http://devpos.bepsnet.co.id:8002/admin/dashboard');

    });
    
    it('should open merchant list', async () => {

        await MerchantPage.openDatabase[0].click();

        await MerchantPage.openMerchantList.click();

        await expect(browser).toHaveUrl('http://devpos.bepsnet.co.id:8002/admin/merchant');

    });
    //-------------------------------------------------------------------------------//
    //add merchant//

    it('should create merchant', async () => {

        await MerchantPage.addButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.addValue('Merchant A');
        await MerchantPage.mid.addValue('444444444444444');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();

        await expect(MerchantPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create merchant name already exist', async () => {

        await MerchantPage.addButton.click();
        await browser.pause(2000);

        await MerchantPage.merchantName.addValue('Merchant A');
        await MerchantPage.mid.addValue('555555555555555');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();

        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });

    it('should create MID less than 15 chars', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('Merchant B');
        await MerchantPage.mid.addValue('MID13654');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('mid must contain 15 characters');
        await browser.pause(2000);

    });

    it('should create MID already use', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('Merchant C');
        await MerchantPage.mid.addValue('444444444444444');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('Mid is already taken');
        await browser.pause(2000);

    });    

    it('should create decimal tax value', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('Merchant D');
        await MerchantPage.mid.addValue('777777777777777');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('5.5');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();

        await expect(MerchantPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create decimal service Charge Value', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('Merchant E');
        await MerchantPage.mid.addValue('888888888888888');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5.5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();

        await expect(MerchantPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create empty mid', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('Merchant F');
        await MerchantPage.mid.addValue('');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('mid could not be empty');


    });

    it('should create empty name', async () => {

        await MerchantPage.addhButton.click();

        await MerchantPage.mid.addValue('MID999999999999');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('Name could not be empty');

    });

    it('should create empty tax Value', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('Merchant G');
        await MerchantPage.mid.addValue('MID999999999999');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.doubleClick();
        await browser.keys("Delete");
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('Tax Value could not be empty');

    });

    it('should create empty service charge value', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('Merchant H');
        await MerchantPage.mid.addValue('MID999999999999');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.doubleClick();
        await browser.keys("Delete");
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('Service Charge Value could not be empty');

    });

    it('should create empty address', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('Merchant I');
        await MerchantPage.mid.addValue('666666666666666');
        await MerchantPage.taxIncluded.click();
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.saveButton.click();

        await expect(MerchantPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should click cancel form add merchant', async () => {

        await MerchantPage.addButton.click();

        await MerchantPage.merchantName.addValue('test');

        await MerchantPage.cancelButton.click();

    });

    //------------------------------------------------------//
    //search//

    it('should search by name', async () => {

        await MerchantPage.searchName.addValue('Merchant A');
    
        await expect(MerchantPage.searchName).toHaveValue('Merchant A');
        console.log(await MerchantPage.searchName.getValue());

    });   
    
    it('should search by tax', async () => {
    
        await MerchantPage.searchTax.addValue('10');
    
        await expect(MerchantPage.searchTax).toHaveValue('10');
        console.log(await MerchantPage.searchTax.getValue());
    
        await MerchantPage.searchTax.doubleClick();
        await browser.keys("Delete");
    
    });  
    
    it('should search by service charge', async () => {
    
        await MerchantPage.searchServiceCharge.addValue('5');
    
        await expect(MerchantPage.searchServiceCharge).toHaveValue('5');
        console.log(await MerchantPage.searchServiceCharge.getValue());

        await MerchantPage.searchServiceCharge.doubleClick();
        await browser.keys("Delete");
    
    });


    it('should open detail merchant', async () => {

        await MerchantPage.detailMerchant.click();
        await browser.pause(2000);

        await expect(MerchantPage.getTitle).toHaveTextContaining('Detail Merchant');
        console.log(await MerchantPage.getTitle.getText());

        await MerchantPage.closeDetail.click();

    });

    //-------------------------------------------------------------------------------//
    //edit merchant//

    it('should edit merchant name already exist', async () => {

        await MerchantPage.editButton.click();
        await MerchantPage.delete();
        await browser.pause(2000);

        await MerchantPage.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await MerchantPage.merchantName.addValue('Merchant Q');
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });   

    it('should edit decimal tax value', async () => {

        await MerchantPage.editButton.click();
        await MerchantPage.delete();
        await browser.pause(2000);

        await MerchantPage.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await MerchantPage.merchantName.addValue('Merchant A');
        await MerchantPage.taxValue.addValue('5.5');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();

        await expect(MerchantPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);

    });

    it('should edit decimal tax value', async () => {

        await MerchantPage.editButton.click();
        await MerchantPage.delete();
        await browser.pause(2000);

        await MerchantPage.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await MerchantPage.merchantName.addValue('Merchant A');
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5.5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();

        await expect(MerchantPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);

    });

    it('should edit empty merchant name', async () => {

        await MerchantPage.editButton.click();
        await MerchantPage.delete();
        await browser.pause(2000);

        await MerchantPage.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await MerchantPage.merchantName.addValue('');
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('name could not be empty');
        await browser.pause(2000);

    });   

    it('should edit empty tax value', async () => {

        await MerchantPage.editButton.click();
        await MerchantPage.delete();
        await browser.pause(2000);

        await MerchantPage.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await MerchantPage.merchantName.addValue('Merchant A');
        await MerchantPage.taxValue.addValue('');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('Tax Value could not be empty');
        await browser.pause(2000);

    });

    it('should edit empty service charge', async () => {

        await MerchantPage.editButton.click();
        await MerchantPage.delete();
        await browser.pause(2000);

        await MerchantPage.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await MerchantPage.merchantName.addValue('Merchant A');
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await browser.pause(2000);
        await MerchantPage.saveButton.click();

        await browser.pause(2000);
        await MerchantPage.closeButton.click();

        await expect(MerchantPage.message).toHaveTextContaining('Service Charge Value could not be empty');
        await browser.pause(2000);

    });

    it('should edit empty address', async () => {

        await MerchantPage.editButton.click();
        await MerchantPage.delete();
        await browser.pause(2000);

        await MerchantPage.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await MerchantPage.merchantName.addValue('Merchant A');
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5.5');
        await MerchantPage.saveButton.click();
        await browser.pause(2000);

        await expect(MerchantPage.message).toHaveText('Updated Successfully');

    });

    it('should edit merchant', async () => {

        await MerchantPage.editButton.click();
        await MerchantPage.delete();
        await browser.pause(2000);

        await MerchantPage.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await MerchantPage.merchantName.addValue('Merchant J');
        await MerchantPage.taxValue.addValue('10');
        await MerchantPage.serviceChargeValue.addValue('5');
        await MerchantPage.fullAddress.addValue('jl. guru mughni');
        await MerchantPage.province.addValue('DKI Jakarta');
        await MerchantPage.city.addValue('Jakarta Selatan');
        await MerchantPage.subDistrict.addValue('Setiabudi');
        await MerchantPage.village.addValue('Karet Semanggi');
        await MerchantPage.postalCode.addValue('12930');
        await MerchantPage.saveButton.click();
        await browser.pause(2000);

        await expect(MerchantPage.message).toHaveText('Updated Successfully');

    });

    //-------------------------------------------------------------------------------//
    //delete merchant//

    it('should search by name', async () => {

        await MerchantPage.searchName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await MerchantPage.searchName.addValue('Merchant J');
    
        await expect(MerchantPage.searchName).toHaveValue('Merchant J');
        console.log(await MerchantPage.searchName.getValue());

    }); 

    
    it('should close delete', async () => {

        await MerchantPage.deleteMerchant.click();
        await browser.pause(2000);

        await MerchantPage.closeDelete.click();

    });
    

    /**
    it('should cancel delete', async () => {

        await MerchantPage.deleteMerchant.click();
        await browser.pause(2000);

        await MerchantPage.noButton.click();

    });
    */

    it('should delete merchant', async () => {

        await MerchantPage.deleteMerchant.click();
        await browser.pause(2000);

        await MerchantPage.yesButton.click();

        await expect(MerchantPage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    });

});