const Page = require('./page');

class OwnerPage extends Page {

    get maxSidebar() {
        return $('//*[@id="root"]/div[1]/button');
    }
    
    get openDatabase() {
        return $$('[class="nav-link nav-group-toggle"]');
    }

    get openOwnerList() {
        return $('[href="/admin/owner"]');
    }

    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/button');
    }

    // form create owner //
    get firstName() {
        return $('//*[@id="firstName"]');
    }

    get lastName() {
        return $('#lastName');
    }

    get phoneNumber() {
        return $('#phoneNumber');
    }

    get email() {
        return $('#email');
    }

    get fullAddress() {
        return $('#fullAddress');
    }

    get subDistrict() {
        return $('#subDistrict');
    }

    get village() {
        return $('#village');
    }

    get province() {
        return $('#province');
    }

    get city() {
        return $('#city');
    }

    get postalCode() {
        return $('#postalCode');
    }

    get saveButton() {
        return $('[class="btn btn-info btn-loading btn-font btn-size-max"]');
    }

    get batalButton() {
        return $('button=Cancel');
    }

    get closeButton() {
        return $('[class="btn btn-close"]')
    }

    // search filed //

    get search() {
        return $$('[class="form-control form-control-sm"]');
    }

    // show owner //

    get detailOwner() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[1]');
    }

    get getTitle() {
        return $('/html/body/div[2]/div/div/div[1]/h5');
    }

    // delete owner //

    get deleteOwner() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[3]');
    }

    get yaButton() {
        return $('/html/body/div[2]/div/div/div[2]/form/div[2]/div[2]/div/button');
    }

    get tidakButton() {
        return $('/html/body/div[2]/div/div/div[2]/form/div[2]/div[1]/div/button');
    }

    // form edit owner //
    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[2]');
    }

    //-----------------------------------------------------------------------------//

    get itemPerPage() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[3]/div[2]/div/div/select');
    }

    get message() {
        return $('[role="status"]');
    }

    async delete () {
        await this.firstName.doubleClick();
        await browser.keys("Delete");
        await this.lastName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.phoneNumber.doubleClick();
        await browser.keys("Delete");
        await this.email.click();
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
        await this.postalCode.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new OwnerPage();