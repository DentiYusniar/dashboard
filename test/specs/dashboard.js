const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

describe('Dashboard Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();

    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('orangtua');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(LoginPage.inputUsername).toHaveValue('orangtua');
        await expect(LoginPage.inputPassword).toHaveValue('Password_01');

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });

    it('should click homeLink', async () => {

        await DashboardPage.homeLink.click();

        await expect(DashboardPage.homeLink).toHaveHref('https://sbxgw.praktispos.co.id:4430/admin/dashboard');
    }); 

    it('should minimize sidebar', async () => {

        await DashboardPage.minimizeSidebar.click();

        await expect(DashboardPage.sidebarNavList).not.toBeDisplayed();

    });

    it('should hide sidebar', async () => {

        await DashboardPage.hideSidebar.click();
        
        await expect(DashboardPage.sidebarNavList).not.toBeDisplayed();

    });    

});