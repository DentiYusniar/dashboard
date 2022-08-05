const Page = require('./page');

class LoginPage extends Page {

    get inputUsername() {
        return $('#username');
    }
    
    get inputPassword() {
        return $('#password');
    }    
    
    get loginBtn() {
        return $('//*[@id="root"]/div/div/form/button');
    }

    get vissiblePassword() {
        return $('//*[@id="root"]/div/div/form/div[4]/img');
    }

    get alertMsg() {
        return $('//*[@id="root"]/div/div/form/div[2]');
    }

    get tittle() {
        return $('//*[@id="root"]/div/div/form/div[1]/h4/strong');
    }

    async delete () {
        await this.inputUsername.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await this.inputPassword.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new LoginPage();
