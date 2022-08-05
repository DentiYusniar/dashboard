const Page = require('./page');

class ModifierPage extends Page {

    get showSidebar() {
        return $('//*[@id="root"]/div[2]/div[1]/div[1]/button[1]');
    }

    get maxSidebar() {
        return $('//*[@id="root"]/div[1]/button');
    }
    
    get item() {
        return $$('[class="nav-link nav-group-toggle"]');
    }

    get modifierPage() {
        return $('[href="/admin/modifier"]');
    }

    get message() {
        return $('[role="status"]');
    }

    get editButton() {
        return $('[class="btn btn-info btn-sm btn-action"]');
    }
    
    //------------------------------------------------------------------------//
    //create modifier//
    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/button');
    }    
    
    get getMerchant() {
        return $('#merchantId');
    }

    get modifierTitle() {
        return $('#title');
    }

    get isMultiple() {
        return $('#isMultiple');
    }

    get minimum() {
        return $('#min');
    }

    get maximum() {
        return $('#max');
    }

    get setValue() {
        return $('button=Add Values');
    }
 
    get valueName() {
        return $$('#name');
    }

    get available() {
        return $('#available');
    }

    get price() {
        return $$('#unitPrice');
    }

    get buttonX() {
        return $('button=X');
    }

    get saveButton() {
        return $('[class="btn btn-info btn-loading btn-font btn-size-max"]');
    }

    get cancelButton() {
        return $('button=Cancel');
    }

    get closeButton() {
        return $('[class="btn btn-close"]');
    }

    //-----------------------------------------------------------------------//
    //Search Modifier

    get search() {
        return $$('[class="form-control form-control-sm"]');
    }

    //-------------------------------------------------------------//
    //Modifier Detail//

    get detailButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[1]');
    }

    get getTitle() {
        return $('h5=Detail Modifier');
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

    //-------------------------------------------------------------------------------// 
    async delete () {
        await this.modifierTitle.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.minimum.doubleClick();
        await browser.keys("Delete");
        await this.maximum.doubleClick();
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new ModifierPage();