const Page = require('./page');

class ItemPage extends Page {

    get showSidebar() {
        return $('//*[@id="root"]/div[2]/div[1]/div[1]/button[1]');
    }

    get maxSidebar() {
        return $('//*[@id="root"]/div[1]/button');
    }
    
    get item() {
        return $$('[class="nav-link nav-group-toggle"]');
    }

    get itemPage() {
        return $('[href="/admin/item"]');
    }

    get message() {
        return $('[role="status"]');
    }
    
    //------------------------------------------------------------------------//
    //create item//
    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/button');
    }    

    get storeId() {
        return $('[name="storeId"]');
    }   

    get itemName() { 
        return $('#name');
    }

    get itemType() {
        return $('//*[@id="type"]');
    }

    get unitPrice() {
        return $('#unitPrice');
    }

    get category() {
        return $$('#search_input')[0];
    }

    get modifier() {
        return $$('#search_input')[1];
    }

    get description() {
        return $('#description');
    }

    get thumbnail() {
        return $('#thumbnail');
    }

    get openPrice() {
        return $('#openPrice');
    }

    get available() {
        return $('#available');
    }

    get closeIcon() {
        return $$('[class="icon_cancel closeIcon"]');
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
    //Search Item

    get search() {
        return $$('[class="form-control form-control-sm"]');
    }

    //-------------------------------------------------------------//
    //Detail item//

    get detailButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[1]');
    }


    get getTitle() {
        return $('[class="modal-title"]');
    }
    
    //-------------------------------------------------------------//
    //Edit Item//

    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[2]');
    }

    get closeSelector() {
        return $('[class="icon_cancel closeIcon"]');
    }

    //-------------------------------------------------------//
    //Delete Item//

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
        await this.itemName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.description.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.unitPrice.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new ItemPage();