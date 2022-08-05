const LoginPage = require('../pageobjects/login.page');
const TransactionPage = require('../pageobjects/transaction.page');

describe('Profile Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('merchantok');
        await LoginPage.inputPassword.setValue('P4ssword');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('http://devpos.bepsnet.co.id:8002/admin/dashboard');

    });
    
    it('should click transaction list', async () => {

        await TransactionPage.transaction[1].click();
        await TransactionPage.transactionList.click();
        await browser.pause(2000);

        await expect(browser).toHaveUrl('http://devpos.bepsnet.co.id:8002/admin/transaction');

    });

    it('should search transaction', async () => {

        await TransactionPage.dateInput[0].click();
        await TransactionPage.dateInput[0].setValue('01-04-2022');
        await browser.pause(2000);

        await TransactionPage.dateInput[1].click();
        await TransactionPage.dateInput[1].setValue('26-04-2022');
        await browser.pause(2000);

    });

    it('should search by order number', async () => {

        await TransactionPage.searchOrderNumber.click();
        await TransactionPage.searchOrderNumber.setValue('TIDTEST220220401084335');
    
        await expect(TransactionPage.searchOrderNumber).toHaveValue('TIDTEST220220401084335');
        console.log(await TransactionPage.searchOrderNumber.getValue());

    });

    it('should search by date', async () => {

        await TransactionPage.searchDate.click();
        await TransactionPage.searchDate.setValue('01-04-2022');
    
        await expect(TransactionPage.searchDate).toHaveValue('01-04-2022');
        console.log(await TransactionPage.searchDate.getValue());

    });

    it('should search by status', async () => {

        await TransactionPage.searchStatus.click();
        await TransactionPage.searchStatus.setValue('Paid');
    
        await expect(TransactionPage.searchStatus).toHaveValue('Paid');
        console.log(await TransactionPage.searchStatus.getValue());

    });
   
    it('should export csv', async () => {

        await TransactionPage.exportCSV.click();

    });
    
    it('should open detail transaction', async () => {

        await TransactionPage.detailTransaction.click();

    });

});