const Page = require('./page');

class DashboardPage extends Page{

    get homeLink() {
        return $('//*[@id="root"]/div[2]/div[1]/div[3]/nav/ol/li[1]/a');
    }

    get hideSidebar() {
        return $('//*[@id="root"]/div[2]/div[1]/div[1]/button');
    }

    get minimizeSidebar() {
        return $('//*[@id="root"]/div[1]/button');
    }

}

module.exports = new DashboardPage();