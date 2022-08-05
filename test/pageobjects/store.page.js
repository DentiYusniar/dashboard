const Page = require('./page');

class StorePage extends Page {

    get maxSidebar() {
        return $('//*[@id="root"]/div[1]/button');
    }

    get openDatabase() {
        return $$('[class="nav-link nav-group-toggle"]');
    }

    get openStoreList() {
        return $('[href="/admin/store"]');
    }

    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/button');
    }

    // form create store//
    get ownerId() {
        return $('#ownerId');
    }

    get merchantId() {
        return $('#merchantId');
    }

    get storeName() {
        return $('#name');
    }

    get thumbnail() {
        return $('#thumbnail');
    }
    
    get headers() {
        return $$('#headers')
    }

    get footers() {
        return $$('#footers')
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

    // show store //

    get detailStore() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[1]');
    }

    get getTitle() {
        return $('/html/body/div[2]/div/div/div[1]/h5');
    }

    // form edit store//

    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[2]');
    }

    // delete store //

    get deleteStore() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[3]');
    }

    get yesButton() {
        return $('button=Yes');
    }

    get noButton() {
        return $('button=No');;
    }


    get message() {
        return $('[role="status"]');
    }
    
    //-----------------------------------------------------------------------------//
    async delete () {
        await this.storeName.click();
        await browser.keys(["Control" , "KeyA"]);
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

        await this.postalCode.doubleClick();
        await browser.keys("Delete");

        //delete headers
        await this.headers[0].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await this.headers[1].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await this.headers[2].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        //delete footers
        await this.footers[0].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await this.footers[1].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await this.footers[2].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await this.footers[3].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new StorePage();