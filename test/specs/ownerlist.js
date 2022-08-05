const LoginPage = require('../pageobjects/login.page');
const OwnerPage = require('../pageobjects/owner.page');

describe('Owner Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.setValue('superadmin');
        await LoginPage.inputPassword.setValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/dashboard');

    });
    
    it('should open owner list', async () => {

        await OwnerPage.openDatabase[0].click();
        await OwnerPage.openOwnerList.click();

        await expect(browser).toHaveUrl('https://sbxgw.praktispos.co.id:4430/admin/owner');

    });
    //-------------------------------------------------------------------------------//
    //add owner//

    it('should create owner', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('A');
        await OwnerPage.phoneNumber.setValue('089612228885');
        await OwnerPage.email.setValue('owner.a@mail.co.id');
        await OwnerPage.fullAddress.setValue('jl. guru mughni');
        await OwnerPage.province.setValue('DKI Jakarta');
        await OwnerPage.city.setValue('Jakarta Selatan');
        await OwnerPage.subDistrict.setValue('Setiabudi');
        await OwnerPage.village.setValue('Karet Semanggi');
        await OwnerPage.postalCode.setValue('12930');
        await OwnerPage.saveButton.click();

        await expect(OwnerPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create first name & last name already exist', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('A');
        await OwnerPage.phoneNumber.setValue('089612228888');
        await OwnerPage.email.setValue('ownera@mail.co.id');
        await OwnerPage.fullAddress.setValue('jl. guru mughni');
        await OwnerPage.province.setValue('DKI Jakarta');
        await OwnerPage.city.setValue('Jakarta Selatan');
        await OwnerPage.subDistrict.setValue('Setiabudi');
        await OwnerPage.village.setValue('Karet Semanggi');
        await OwnerPage.postalCode.setValue('12930');
        await OwnerPage.saveButton.click();

        await OwnerPage.closeButton.click();

    });

    it('should create phone number already use', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('B');
        await OwnerPage.phoneNumber.setValue('089612228885');
        await OwnerPage.email.setValue('owner.b@mail.co.id');
        await OwnerPage.fullAddress.setValue('jl. guru mughni');
        await OwnerPage.province.setValue('DKI Jakarta');
        await OwnerPage.city.setValue('Jakarta Selatan');
        await OwnerPage.subDistrict.setValue('Setiabudi');
        await OwnerPage.village.setValue('Karet Semanggi');
        await OwnerPage.postalCode.setValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });    

    it('should create email already use', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('C');
        await OwnerPage.phoneNumber.setValue('089612228887');
        await OwnerPage.email.setValue('owner.a@mail.co.id');
        await OwnerPage.fullAddress.setValue('jl. guru mughni');
        await OwnerPage.province.setValue('DKI Jakarta');
        await OwnerPage.city.setValue('Jakarta Selatan');
        await OwnerPage.subDistrict.setValue('Setiabudi');
        await OwnerPage.village.setValue('Karet Semanggi');
        await OwnerPage.postalCode.setValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Email');
        await browser.pause(2000);

    });

    it('should create empty address', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('D');
        await OwnerPage.phoneNumber.setValue('089612228884');
        await OwnerPage.email.setValue('owner.d@mail.co.id');
        await OwnerPage.saveButton.click();

    });

    it('should create empty email', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('E');
        await OwnerPage.phoneNumber.setValue('089612228887');
        await OwnerPage.email.setValue('');
        await OwnerPage.fullAddress.setValue('jl. guru mughni');
        await OwnerPage.province.setValue('DKI Jakarta');
        await OwnerPage.city.setValue('Jakarta Selatan');
        await OwnerPage.subDistrict.setValue('Setiabudi');
        await OwnerPage.village.setValue('Karet Semanggi');
        await OwnerPage.postalCode.setValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Email could not be empty');
        await browser.pause(2000);

    });

    it('should create empty phone number', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('E');
        await OwnerPage.phoneNumber.setValue('');
        await OwnerPage.email.setValue('owner.e@mail.co.id');
        await OwnerPage.fullAddress.setValue('jl. guru mughni');
        await OwnerPage.province.setValue('DKI Jakarta');
        await OwnerPage.city.setValue('Jakarta Selatan');
        await OwnerPage.subDistrict.setValue('Setiabudi');
        await OwnerPage.village.setValue('Karet Semanggi');
        await OwnerPage.postalCode.setValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Phone Number could not be empty');
        await browser.pause(2000);

    });

    it('should create empty last name', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('');
        await OwnerPage.phoneNumber.setValue('089612228887');
        await OwnerPage.email.setValue('owner.f@mail.co.id');
        await OwnerPage.fullAddress.setValue('jl. guru mughni');
        await OwnerPage.province.setValue('DKI Jakarta');
        await OwnerPage.city.setValue('Jakarta Selatan');
        await OwnerPage.subDistrict.setValue('Setiabudi');
        await OwnerPage.village.setValue('Karet Semanggi');
        await OwnerPage.postalCode.setValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Last Name could not be empty');
        await browser.pause(2000);

    });

    it('should create empty fiest name', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('');
        await OwnerPage.lastName.setValue('G');
        await OwnerPage.phoneNumber.setValue('089612228887');
        await OwnerPage.email.setValue('owner.g@mail.co.id');
        await OwnerPage.fullAddress.setValue('jl. guru mughni');
        await OwnerPage.province.setValue('DKI Jakarta');
        await OwnerPage.city.setValue('Jakarta Selatan');
        await OwnerPage.subDistrict.setValue('Setiabudi');
        await OwnerPage.village.setValue('Karet Semanggi');
        await OwnerPage.postalCode.setValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('First Name could not be empty');
        await browser.pause(2000);

    });

    it('should click batal form add', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('test');

        await OwnerPage.batalButton.click();

    });

    //------------------------------------------------------//
    //search//

    it('should search by name', async () => {

        await OwnerPage.search[0].setValue('Owner A');
        await browser.pause(2000);
    
        await expect(OwnerPage.search[0]).toHaveValue('Owner A');
        console.log(await OwnerPage.search[0].getValue());

    });   
    
    it('should search by phoneNumber', async () => {
    
        await OwnerPage.search[1].setValue('089612228885');
        await browser.pause(2000);
    
        await expect(OwnerPage.search[1]).toHaveValue('089612228885');
        console.log(await OwnerPage.search[1].getValue());

        await OwnerPage.search[1].doubleClick();
        await browser.keys("Delete");
    
    });  
    
    it('should search by email', async () => {
    
        await OwnerPage.search[2].setValue('owner.a@mail.co.id');
        await browser.pause(2000);
    
        await expect(OwnerPage.search[2]).toHaveValue('owner.a@mail.co.id');
        console.log(await OwnerPage.search[2].getValue());

        await OwnerPage.search[2].click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");

    });

    //------------------------------------------------------//
    //detail owner
    it('should open detail owner', async () => {

        await OwnerPage.detailOwner.click();
        await browser.pause(2000);

        await expect(OwnerPage.getTitle).toHaveTextContaining('Detail Owner');
        console.log(await OwnerPage.getTitle.getText());

        await OwnerPage.closeButton.click();

    });

    //-------------------------------------------------------------------//
    it('should update first name & last name already exist', async () => {

        await OwnerPage.editButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('orang');
        await OwnerPage.lastName.setValue('tua');
        await OwnerPage.phoneNumber.setValue('089613338885');
        await OwnerPage.email.setValue('owner.q@mail.co.id');
        await OwnerPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.setValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await OwnerPage.village.setValue('Karet Tengsin');
        await OwnerPage.postalCode.setValue('10250');
        await OwnerPage.saveButton.click();

        await OwnerPage.closeButton.click();

    });

    it('should update phone number already use', async () => {

        await OwnerPage.editButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('Q');
        await OwnerPage.phoneNumber.setValue('089612229995');
        await OwnerPage.email.setValue('owner.q@mail.co.id');
        await OwnerPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.setValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await OwnerPage.village.setValue('Karet Tengsin');
        await OwnerPage.postalCode.setValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });    

    it('should update email already use', async () => {

        await OwnerPage.editButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('Q');
        await OwnerPage.phoneNumber.setValue('089613338885');
        await OwnerPage.email.setValue('denti.yusniar@beps.co.id');
        await OwnerPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.setValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await OwnerPage.village.setValue('Karet Tengsin');
        await OwnerPage.postalCode.setValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('is already taken');
        await browser.pause(2000);

    });

    it('should update empty first name', async () => {

        await OwnerPage.editButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.doubleClick();
        await browser.keys("Delete");
        await OwnerPage.lastName.setValue('Q');
        await OwnerPage.phoneNumber.setValue('089613348885');
        await OwnerPage.email.setValue('owner.q@beps.co.id');
        await OwnerPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.setValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await OwnerPage.village.setValue('Karet Tengsin');
        await OwnerPage.postalCode.setValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('First Name could not be empty');
        await browser.pause(2000);

    });

    it('should update empty last name', async () => {

        await OwnerPage.editButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.doubleClick();
        await browser.keys("Delete");
        await OwnerPage.phoneNumber.setValue('089613348885');
        await OwnerPage.email.setValue('owner.q@beps.co.id');
        await OwnerPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.setValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await OwnerPage.village.setValue('Karet Tengsin');
        await OwnerPage.postalCode.setValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Last Name could not be empty');
        await browser.pause(2000);

    });

    it('should update empty phone number', async () => {

        await OwnerPage.editButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('Q');
        await OwnerPage.phoneNumber.doubleClick();
        await browser.keys("Delete");
        await OwnerPage.email.setValue('owner.q@beps.co.id');
        await OwnerPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.setValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await OwnerPage.village.setValue('Karet Tengsin');
        await OwnerPage.postalCode.setValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Phone Number could not be empty');
        await browser.pause(2000);

    });

    it('should update empty email', async () => {

        await OwnerPage.editButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('Q');
        await OwnerPage.phoneNumber.setValue('089613348885');
        await OwnerPage.email.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await OwnerPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.setValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await OwnerPage.village.setValue('Karet Tengsin');
        await OwnerPage.postalCode.setValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Email could not be empty');
        await browser.pause(2000);

    });

    it('should update owner', async () => {

        await OwnerPage.editButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.setValue('Owner');
        await OwnerPage.lastName.setValue('Q');
        await OwnerPage.phoneNumber.setValue('089613348885');
        await OwnerPage.email.clearValue();
        await OwnerPage.email.setValue('owner.q@beps.co.id');
        await OwnerPage.fullAddress.setValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.setValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.setValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.setValue('Kecamatan Tanah Abang');
        await OwnerPage.village.setValue('Karet Tengsin');
        await OwnerPage.postalCode.setValue('10250');
        await OwnerPage.saveButton.click();

        await expect(OwnerPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);
    });

    //------------------------------------------------------------------//
    //delete owner//

    it('should search by name', async () => {

        await OwnerPage.search[0].click();
        await OwnerPage.search[0].setValue('Owner Q');
    
        await expect(OwnerPage.search[0]).toHaveValue('Owner Q');
        console.log(await OwnerPage.search[0].getValue());

    });  

    it('should close delete', async () => {

        await OwnerPage.deleteOwner.click();
        await browser.pause(2000);

        await OwnerPage.closeButton.click();

    });

    /**
     * it('should cancel delete', async () => {

        await OwnerPage.deleteOwner.click();
        await browser.pause(2000);

        await OwnerPage.tidakButton.click();

    });
    */

    it('should delete owner', async () => {

        await OwnerPage.deleteOwner.click();
        await browser.pause(2000);
        await OwnerPage.yaButton.click();

        await expect(OwnerPage.message).toHaveText('Deleted Successfully');
        await browser.pause(2000);

    });
});