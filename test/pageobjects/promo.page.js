const Page = require('./page');

class PromoPage extends Page {

    get promoPage() {
        return $('[href="/admin/promo"]');
    }

    get message() {
        return $('[role="status"]');
    }
    
    //------------------------------------------------------------------------//
    //create promo//
    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div[1]/button');
    }    
    
    get promoLevel() {
        return $('#promoLevel');
    }

    get merchantId() {
        return $('#merchantId');
    }

    get storeId() {
        return $('#storeId');
    }

    get promoType() {
        return $('#type');
    }

    get promoName() {
        return $('#name');
    }

    get startDate() {
        return $('#startDate');
    }

    get endDate() {
        return $('#endDate');
    }

    //-------------------------------------------------------------//
    //Discount merchant//

    get percentage() {
        return $('#percentage');
    }

    get termAndCondition() {
        return $('#termAndConditions');
    }

    get promoCode() {
        return $('#promoCode');
    }

    get capAmount() {
        return $('#capAmount');
    }

    get minimumAmount() {
        return $('minimumAmount');
    }

    //------------------------------------------------------------------//
    //Promo Item//
    get itemName() {
        return $('#itemId');
    }

    get saveButton() {
        return $('[class="btn btn-info btn-loading btn-font btn-size-max"]');
    }

    get closeButton() {
        return $('[class="btn btn-close"]');
    }

    get cancelButton() {
        return $('button=Cancel');
    }

    //-----------------------------------------------------------------------//
    //Search Promo

    get search() {
        return $$('[class="form-control form-control-sm"]');
    }

    //-------------------------------------------------------------//
    //Promo Detail//

    get detailButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[1]');
    }

    get getTitle() {
        return $('h5=Detail Category');
    }
    
    //-------------------------------------------------------------//
    //Edit Category//

    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[2]');
    }

    //-------------------------------------------------------//
    //delete//

    get deleteButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[3]');
    }

    get yesButton() {
        return $('button=Yes');
    }

    get noButton() {
        return $('button=No');
    }

    //-------------------------------------------------------// 
    //expect

    open() {
        return super.open();
    }
}

module.exports = new PromoPage();