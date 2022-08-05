const Page = require('./page');

class TransactionPage extends Page {

    get transaction() {
        return $$('[class="nav-link nav-group-toggle"]');
    }

    get transactionList() {
        return $('[href="/admin/transaction"]');
    }
    
    get dateInput() {
        return $$('//*[@id="date-input"]');
    }
    
    get exportCSV() {
        return $('[class="btn btn-dark btn-export"]');
    }
    
    get detailTransaction() {
        return $('[class="btn btn-success btn-sm btn-action"]');
    }

    get searchStatus() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/thead/tr[2]/th[9]/input');
    }
   
    get searchDate() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/thead/tr[2]/th[8]/input');
    }

    get searchOrderNumber() {
        return $('//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/table/thead/tr[2]/th[2]/input');
    }

    open() {
        return super.open();
    }
}

module.exports = new TransactionPage();