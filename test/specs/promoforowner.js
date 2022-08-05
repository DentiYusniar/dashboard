const LoginPage = require('../pageobjects/login.page');
const PromoPage = require('../pageobjects/promo.page');

describe('Profile Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('orangtua');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });
    
    it('should open promo page', async () => {

        await PromoPage.promoPage.click();

    });

    //create promo
    it('should cancle add promo', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('0');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Dic Potongan Harga');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('DISC50');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');
        

        await PromoPage.cancelButton.click();
        await browser.pause(2000);

    });
    
    it('should create promo level store type discount merchant', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('2');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 1');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO1');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create promo level store type discount cashback', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('2');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('2');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 2');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO2');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create promo level store type bogo', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('2');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('3');
        await PromoPage.itemName.click();
        await PromoPage.itemName.selectByIndex('1');
        await PromoPage.promoName.setValue('Promo 3');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create promo level store type promo item', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('2');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('4');
        await PromoPage.percentage.setValue('5');
        await PromoPage.itemName.click();
        await PromoPage.itemName.selectByIndex('1');;
        await PromoPage.promoName.setValue('Promo 4');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create promo level merchant type discount merchant', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 5');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROM05');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create promo level merchant type discount cashback', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('2');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 6');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO6');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create promo level merchant type bogo', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('3');
        await PromoPage.itemName.click();
        await PromoPage.itemName.selectByIndex('1');
        await PromoPage.promoName.setValue('Promo 7');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create promo level merchant type promo item', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('4');
        await PromoPage.percentage.setValue('5');
        await PromoPage.itemName.click();
        await PromoPage.itemName.selectByIndex('1');;
        await PromoPage.promoName.setValue('Promo 8');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    it('should create promo name already use', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('2');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 9');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO9');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();
        await PromoPage.closeButton.click();

        //expect
        await expect(UserPage.message).toHaveTextContaining('is already exist');
        await browser.pause(2000);

    });

    it('should create promo code already exist', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('2');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 10');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO10');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();
        await PromoPage.closeButton.click();

        //expect
        await expect(UserPage.message).toHaveTextContaining('is already exist');
        await browser.pause(2000);

    });

    it('should create empty promo name', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('2');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO11');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();
        await PromoPage.closeButton.click();

        //expect
        await expect(UserPage.message).toHaveTextContaining('Promo Name could not be empty');
        await browser.pause(2000);

    });

    it('should create empty trims and condition', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('');
        await PromoPage.promoName.setValue('Promo 12');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO12');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();
        await PromoPage.closeButton.click();

        //expect
        await expect(UserPage.message).toHaveTextContaining('Trem and condition could not be empty');
        await browser.pause(2000);

    });

    it('should create empty promo code', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 13');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();
        await PromoPage.closeButton.click();

        //expect
        await expect(UserPage.message).toHaveTextContaining('Promo Code could not be empty');
        await browser.pause(2000);

    });

    it('should create empty CAP amount', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 14');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO14');
        await PromoPage.capAmount.setValue('');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();
        await PromoPage.closeButton.click();

        //expect
        await expect(UserPage.message).toHaveTextContaining('CAP Amount could not be empty');
        await browser.pause(2000);

    });

    it('should create empty minimum amount', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 15');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO15');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('');

        await PromoPage.saveButton.click();
        await PromoPage.closeButton.click();

        //expect
        await expect(UserPage.message).toHaveTextContaining('Minimum Amount could not be empty');
        await browser.pause(2000);

    });

    it('should create promo empty percentage', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.clear();
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 16');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO16');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();
        await PromoPage.closeButton.click();

        //expect
        await expect(UserPage.message).toHaveTextContaining('Percentage could not be empty');
        await browser.pause(2000);

    });

    it('should create decimal percentage', async () => {
        await PromoPage.addButton.click();
        await browser.pause(2000);

        await PromoPage.promoLevel.click();
        await PromoPage.promoLevel.selectByIndex('1');
        await PromoPage.merchantId.click();
        await PromoPage.merchantId.selectByIndex(1);
        await PromoPage.storeId.click();
        await PromoPage.storeId.selectByIndex('1');
        await PromoPage.promoType.click();
        await PromoPage.promoType.selectByIndex('1');
        await PromoPage.percentage.setValue('5.5');
        await PromoPage.termAndCondition.setValue('Minimal belanja 50K');
        await PromoPage.promoName.setValue('Promo 17');
        await PromoPage.startDate.setValue('01-07-2022');
        await PromoPage.endDate.setValue('31-07-2022');
        await PromoPage.promoCode.setValue('PROMO17');
        await PromoPage.capAmount.setValue('30000');
        await PromoPage.minimumAmount.setValue('50000');

        await PromoPage.saveButton.click();

        //expect
        await expect(UserPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);

    });

    //search promo
    it('should search by name', async () => {

        await PromoPage.search[0].setValue('Promo 1');
        await browser.pause(2000);
    
        //expect
        await expect(PromoPage.search[0]).toHaveValue('Promo 1');
        console.log(await PromoPage.search[0].getValue());

    });   

    it('should search by type', async () => {

        await PromoPage.search[1].setValue('promoItem');
        await browser.pause(2000);
    
        //expect
        await expect(PromoPage.search[1]).toHaveValue('Discount Merchant');
        console.log(await PromoPage.search[1].getValue());

        await PromoPage.search[1].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

    }); 

    it('should search by code', async () => {

        await PromoPage.search[2].setValue('PROMO1');
        await browser.pause(2000);
    
        //expect
        await expect(PromoPage.search[2]).toHaveValue('PROMO1');
        console.log(await PromoPage.search[2].getValue());

        await PromoPage.search[2].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

    }); 

    it('should search by start date', async () => {

        await PromoPage.search[3].setValue('7/1/2022');
        await browser.pause(2000);
    
        //expect
        await expect(PromoPage.search[3]).toHaveValue('7/1/2022');
        console.log(await PromoPage.search[3].getValue());

        await PromoPage.search[3].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

    }); 

    it('should search by end date', async () => {

        await PromoPage.search[4].setValue('7/31/2022');
        await browser.pause(2000);
    
        //expect
        await expect(PromoPage.search[4]).toHaveValue('7/31/2022');
        console.log(await PromoPage.search[2].getValue());

        await PromoPage.search[4].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

    }); 

    //promo detail
    it('should show promo detail', async () => {
        await PromoPage.detailButton.click();
        await browser.pause(2000);

        //expect
        await expect(PromoPage.getTitle).toHaveTextContaining('Detail Promo');
        console.log(await PromoPage.getTitle.getText());

        await PromoPage.closeButton.click();
    });
    
});