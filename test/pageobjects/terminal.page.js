const Page = require('./page');

class TerminalPage extends Page {

    get openTerminal() {
        return $$('[class="nav-link nav-group-toggle"]');
    }
    
    get terminalList() {
        return $('[href="/admin/terminal"]');
    }

    get maxSidebar() {
        return $('//*[@id="root"]/div[1]/button');
    }
    
    //--------------------------------------------------------------------------//
    //add terminal//
    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/button');
    }

    get serialNumber() {
        return $('#sn');
    }
    
    get brand() {
        return $('#brand');
    }

    get model() {
        return $('#model');
    }

    get type() {
        return $('#type');
    }
    
    get description() {
        return $('#description');
    }

    get status() {
        return $('#status');
    }

    get saveButton() {
        return $('[class="btn btn-info btn-loading btn-font btn-size-max"]');
    }

    get cancelButton() {
        return $('button=Cancel');;
    }
    
    get closeButton() {
        return $('[class="btn btn-close"]');
    }

    //--------------------------------------------------------------------------//
    //search //

    get search() {
        return $$('[class="form-control form-control-sm"]');
    }

    //------------------------------------------------------------------------------//
    //Detail Terminal//

    get detailTerminal() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[1]');
    }
    
    get getTitle() {
        return $('h5=Detail TERMINAL');
    }
    
    //------------------------------------------------------------------------------//
    //Delete Terminal//

    get deleteTerminal() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[3]');
    }
    
    get noButton() {
        return $('button=No');
    }

    get yesButton() {
        return $('button=Yes');
    }
    
    //------------------------------------------------------------------------------//
    //Edit Terminal// 
    
    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div/button[2]');
    }
    
    get message() {
        return $('[role="status"]');
    }

    async delete () {
        await this.serialNumber.doubleClick();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await this.brand.doubleClick();
        await browser.keys("Delete");

        await this.model.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

        await this.description.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new TerminalPage();