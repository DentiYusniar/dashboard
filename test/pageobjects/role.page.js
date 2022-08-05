const Page = require('./page');

class RolePage extends Page {

    get roleList() {
        return $('[href="/admin/role"]');
    }

    get message() {
        return $('[role="status"]');
    }
    
    //------------------------------------------------------------------------//
    //create role//
    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/button');
    }    
    
    get roleName() {
        return $('#name');
    }

    get saveButton() {
        return $('[class="btn btn-info btn-loading btn-font btn-size-max mt-3"]');
    }

    get cancelButton() {
        return $('/html/body/div[2]/div/div/div[2]/form/div[3]/div[1]/button');
    }

    //-----------------------------------------------------------------------

    get searchName() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/thead/tr[2]/th[2]/input');
    }

    get roleDetail() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr/td[1]/div/button[1]');
    }

    get getTitle() {
        return $('/html/body/div[2]/div/div/div[1]');
    }

    //-------------------------------------------------------------//
    //edit//

    get editButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/tbody/tr/td[1]/div/button[2]');
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
    //access//

    get accessButton() {
        return $('//html/body/div[2]/div/div/div[2]/form/div[2]/div/button');
    }

    get accessName() {
        return $$('//*[@id="name"]')[1];
    }

    get stateName() {
        return $('#state');
    }

    get accessClose() {
        return $('/html/body/div[2]/div/div/div[2]/form/div[3]/div/div[4]/button');
    }

    get accessSave() {
        return $('/html/body/div[2]/div/div/div[2]/form/div[4]/div[2]/button');
    }

    get isCreate() {
        return $('#isCreate');
    }

    get isUpdate() {
        return $('#isUpdate');
    }

    get isRead() {
        return $('#isRead');
    }

    get isDelete() {
        return $('#isDelete');
    }

    //-------------------------------------------------------------------------------//    

    async delete () {
        await this.searchName.doubleClick();
        await browser.keys("Delete");
        await this.roleName.doubleClick();
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new RolePage();