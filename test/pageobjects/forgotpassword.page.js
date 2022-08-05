const Page = require('./page');

class ForgotPasswordPage extends Page {

    get forgotPassword() {
        return $('//*[@id="root"]/div/div/form/div[3]/label/a');
    }
    
    get input() {
        return $('#input');
    }    
    
    get resetButton() {
        return $('button=RESET');
    }

    get alertDanger() {
        return $('div=Email / Phone Number not Found!');
    }

    get successMsg() {
        return $('//*[@id="root"]/div/div/div');
    }

    get closeButton() {
        return $('//*[@id="root"]/div/div/div/button');
    }

    get tittle() {
        return $('strong=Forgot Password');
    }

    get login() {
        return $('//*[@id="root"]/div/div/div/a');
    }

    async delete () {
        await this.input.doubleClick();
        await browser.keys("Delete");
    }

    open() {
        return super.open();
    }
}

module.exports = new ForgotPasswordPage();