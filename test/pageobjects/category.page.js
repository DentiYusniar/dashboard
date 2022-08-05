const Page = require('./page');

class CategoryPage extends Page {

    get maxSidebar() {
        return $('//*[@id="root"]/div[1]/button');
    }
    
    get item() {
        return $$('[class="nav-link nav-group-toggle"]');
    }

    get categoryPage() {
        return $('[href="/admin/category"]');
    }

    get message() {
        return $('[role="status"]');
    }
    
    //------------------------------------------------------------------------//
    //create category//
    get addButton() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/button');
    }    
    
    get getMerchant() {
        return $('#merchantId');
    }

    get categoryName() {
        return $('#name');
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
    //Search Category

    get searchName() {
        return $('[class="form-control form-control-sm"]');
    }

    //-------------------------------------------------------------//
    //Category Detail//

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

    get formCategory() {
        return $('/html/body/div[2]/div/div');
    }

    get formDelete() {
        return $('/html/body/div[2]/div/div');
    }

    open() {
        return super.open();
    }
}

module.exports = new CategoryPage();