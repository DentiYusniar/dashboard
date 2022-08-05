const Page = require('./page');

class MerchantPage extends Page {

    get openDatabase() {
        return $$('[class="nav-link nav-group-toggle"]');
    }

    get openMerchantList() {
        return $('[href="/admin/merchant"]');
    }

    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div[1]/button');
    }

    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[2]');
    }

    get message() {
        return $('[role="status"]');
    }

    // form create merchant//
    get ownerId() {
        return $('#ownerId');
    }

    get mid() {
        return $('#mid');
    }

    get merchantName() {
        return $('#name');
    }

    get taxIncluded() {
        return $('label=Tax Included')
    }

    get taxValue() {
        return $('[name="taxValue"]')
    }

    get serviceChargeValue() {
        return $('[name="serviceChargeValue"]')
    }

    get fullAddress() {
        return $('#fullAddress');
    }

    get province() {
        return $('#province');
    }

    get city() {
        return $('#city');
    }

    get subDistrict() {
        return $('#subDistrict');
    }

    get village() {
        return $('#village');
    }

    get postalCode() {
        return $('#postalCode');
    }

    get saveButton() {
        return $('[class="btn btn-info btn-loading btn-font btn-size-max"]');
    }

    get cancelButton() {
        return $('button=Cancel');
    }

    get closeButton() {
        return $('[class="btn btn-close"]')
    }

    // search filed //

    get search() {
        return $$('[class="form-control form-control-sm"]');
    }

    // show merchant //

    get detailMerchant() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[1]');
    }

    get getTitle() {
        return $('/html/body/div[2]/div/div/div[1]/h5');
    }

    // delete merchant //

    get deleteMerchant() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[3]');
    }

    get yesButton() {
        return $('button=Yes');;
    }

    get noButton() {
        return $('button=No');
    }

    //-----------------------------------------------------------------------------//
    async delete () {
        await this.merchantName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.taxValue.doubleClick();
        await browser.keys("Delete");
        await this.serviceChargeValue.doubleClick();
        await browser.keys("Delete");
        await this.fullAddress.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.province.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.city.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.subDistrict.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.village.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.postalCode.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new MerchantPage();