const LoginPage = require('../pageobjects/login.page');
const OwnerPage = require('../pageobjects/owner.page');

describe('Owner Page', () => {

    it('should open the url', async () => {

        await LoginPage.open();
        
    });

    it('should handle login', async () => {

        await LoginPage.inputUsername.addValue('superadmin');
        await LoginPage.inputPassword.addValue('Password_01');
        await LoginPage.loginBtn.click();

        await expect(browser).toHaveUrl('http://devpos.bepsnet.co.id:8002/admin/dashboard');

    });
    
    it('should open owner list', async () => {

        await OwnerPage.openDatabase[0].click();
        await OwnerPage.openOwnerList.click();

        await expect(browser).toHaveUrl('http://devpos.bepsnet.co.id:8002/admin/owner');

    });
    //-------------------------------------------------------------------------------//
    //add owner//

    it('should create owner', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('A');
        await OwnerPage.phoneNumber.addValue('089612228885');
        await OwnerPage.email.addValue('owner.a@mail.co.id');
        await OwnerPage.fullAddress.addValue('jl. guru mughni');
        await OwnerPage.province.addValue('DKI Jakarta');
        await OwnerPage.city.addValue('Jakarta Selatan');
        await OwnerPage.subDistrict.addValue('Setiabudi');
        await OwnerPage.village.addValue('Karet Semanggi');
        await OwnerPage.postalCode.addValue('12930');
        await OwnerPage.saveButton.click();

        await expect(OwnerPage.message).toHaveText('Created Successfully');
        await browser.pause(2000);
    });

    it('should create first name & last name already exist', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('A');
        await OwnerPage.phoneNumber.addValue('089612228888');
        await OwnerPage.email.addValue('ownera@mail.co.id');
        await OwnerPage.fullAddress.addValue('jl. guru mughni');
        await OwnerPage.province.addValue('DKI Jakarta');
        await OwnerPage.city.addValue('Jakarta Selatan');
        await OwnerPage.subDistrict.addValue('Setiabudi');
        await OwnerPage.village.addValue('Karet Semanggi');
        await OwnerPage.postalCode.addValue('12930');
        await OwnerPage.saveButton.click();

        await OwnerPage.closeButton.click();

    });

    it('should create phone number already use', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('B');
        await OwnerPage.phoneNumber.addValue('089612228885');
        await OwnerPage.email.addValue('owner.b@mail.co.id');
        await OwnerPage.fullAddress.addValue('jl. guru mughni');
        await OwnerPage.province.addValue('DKI Jakarta');
        await OwnerPage.city.addValue('Jakarta Selatan');
        await OwnerPage.subDistrict.addValue('Setiabudi');
        await OwnerPage.village.addValue('Karet Semanggi');
        await OwnerPage.postalCode.addValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Phone Number');
        await browser.pause(2000);

    });    

    it('should create email already use', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('C');
        await OwnerPage.phoneNumber.addValue('089612228887');
        await OwnerPage.email.addValue('owner.a@mail.co.id');
        await OwnerPage.fullAddress.addValue('jl. guru mughni');
        await OwnerPage.province.addValue('DKI Jakarta');
        await OwnerPage.city.addValue('Jakarta Selatan');
        await OwnerPage.subDistrict.addValue('Setiabudi');
        await OwnerPage.village.addValue('Karet Semanggi');
        await OwnerPage.postalCode.addValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Email');
        await browser.pause(2000);

    });

    it('should create empty address', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('D');
        await OwnerPage.phoneNumber.addValue('089612228884');
        await OwnerPage.email.addValue('owner.d@mail.co.id');
        await OwnerPage.saveButton.click();

    });

    it('should create empty email', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('E');
        await OwnerPage.phoneNumber.addValue('089612228887');
        await OwnerPage.email.addValue('');
        await OwnerPage.fullAddress.addValue('jl. guru mughni');
        await OwnerPage.province.addValue('DKI Jakarta');
        await OwnerPage.city.addValue('Jakarta Selatan');
        await OwnerPage.subDistrict.addValue('Setiabudi');
        await OwnerPage.village.addValue('Karet Semanggi');
        await OwnerPage.postalCode.addValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Email could not be empty');
        await browser.pause(2000);

    });

    it('should create empty phone number', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('E');
        await OwnerPage.phoneNumber.addValue('');
        await OwnerPage.email.addValue('owner.e@mail.co.id');
        await OwnerPage.fullAddress.addValue('jl. guru mughni');
        await OwnerPage.province.addValue('DKI Jakarta');
        await OwnerPage.city.addValue('Jakarta Selatan');
        await OwnerPage.subDistrict.addValue('Setiabudi');
        await OwnerPage.village.addValue('Karet Semanggi');
        await OwnerPage.postalCode.addValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Phone Number could not be empty');
        await browser.pause(2000);

    });

    it('should create empty last name', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('');
        await OwnerPage.phoneNumber.addValue('089612228887');
        await OwnerPage.email.addValue('owner.f@mail.co.id');
        await OwnerPage.fullAddress.addValue('jl. guru mughni');
        await OwnerPage.province.addValue('DKI Jakarta');
        await OwnerPage.city.addValue('Jakarta Selatan');
        await OwnerPage.subDistrict.addValue('Setiabudi');
        await OwnerPage.village.addValue('Karet Semanggi');
        await OwnerPage.postalCode.addValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Last Name could not be empty');
        await browser.pause(2000);

    });

    it('should create empty fiest name', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('');
        await OwnerPage.lastName.addValue('G');
        await OwnerPage.phoneNumber.addValue('089612228887');
        await OwnerPage.email.addValue('owner.g@mail.co.id');
        await OwnerPage.fullAddress.addValue('jl. guru mughni');
        await OwnerPage.province.addValue('DKI Jakarta');
        await OwnerPage.city.addValue('Jakarta Selatan');
        await OwnerPage.subDistrict.addValue('Setiabudi');
        await OwnerPage.village.addValue('Karet Semanggi');
        await OwnerPage.postalCode.addValue('12930');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('First Name could not be empty');
        await browser.pause(2000);

    });

    it('should click batal form add', async () => {

        await OwnerPage.addButton.click();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('test');

        await OwnerPage.batalButton.click();

    });

    //------------------------------------------------------//
    //search//

    it('should search by name', async () => {

        await OwnerPage.searchName.addValue('Owner A');
        await browser.pause(2000);
    
        await expect(OwnerPage.searchName).toHaveValue('Owner A');
        console.log(await OwnerPage.searchName.getValue());

    });   
    
    it('should search by phoneNumber', async () => {
    
        await OwnerPage.searchPhoneNumber.addValue('089612228885');
        await browser.pause(2000);
    
        await expect(OwnerPage.searchPhoneNumber).toHaveValue('089612228885');
        console.log(await OwnerPage.searchPhoneNumber.getValue());

        await OwnerPage.searchPhoneNumber.doubleClick();
        await browser.keys("Delete");
    
    });  
    
    it('should search by email', async () => {
    
        await OwnerPage.searchEmail.addValue('owner.a@mail.co.id');
        await browser.pause(2000);
    
        await expect(OwnerPage.searchEmail).toHaveValue('owner.a@mail.co.id');
        console.log(await OwnerPage.searchEmail.getValue());

        await OwnerPage.searchEmail.click();
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

        await OwnerPage.closeDetail.click();

    });

    //-------------------------------------------------------------------//
    it('should update first name & last name already exist', async () => {

        await OwnerPage.editButton.click();
        await OwnerPage.delete();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('orang');
        await OwnerPage.lastName.addValue('tua');
        await OwnerPage.phoneNumber.addValue('089613338885');
        await OwnerPage.email.addValue('owner.q@mail.co.id');
        await OwnerPage.fullAddress.addValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.addValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.addValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.addValue('Kecamatan Tanah Abang');
        await OwnerPage.village.addValue('Karet Tengsin');
        await OwnerPage.postalCode.addValue('10250');
        await OwnerPage.saveButton.click();

        await OwnerPage.closeButton.click();

    });

    it('should update phone number already use', async () => {

        await OwnerPage.editButton.click();
        await OwnerPage.delete();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('Q');
        await OwnerPage.phoneNumber.addValue('089612229995');
        await OwnerPage.email.addValue('owner.q@mail.co.id');
        await OwnerPage.fullAddress.addValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.addValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.addValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.addValue('Kecamatan Tanah Abang');
        await OwnerPage.village.addValue('Karet Tengsin');
        await OwnerPage.postalCode.addValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Phone Number');
        await browser.pause(2000);

    });    

    it('should update email already use', async () => {

        await OwnerPage.editButton.click();
        await OwnerPage.delete();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('Q');
        await OwnerPage.phoneNumber.addValue('089613338885');
        await OwnerPage.email.addValue('denti.yusniar@beps.co.id');
        await OwnerPage.fullAddress.addValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.addValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.addValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.addValue('Kecamatan Tanah Abang');
        await OwnerPage.village.addValue('Karet Tengsin');
        await OwnerPage.postalCode.addValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Email');
        await browser.pause(2000);

    });

    it('should update empty first name', async () => {

        await OwnerPage.editButton.click();
        await OwnerPage.delete();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('');
        await OwnerPage.lastName.addValue('Q');
        await OwnerPage.phoneNumber.addValue('089613338885');
        await OwnerPage.email.addValue('owner.q@beps.co.id');
        await OwnerPage.fullAddress.addValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.addValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.addValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.addValue('Kecamatan Tanah Abang');
        await OwnerPage.village.addValue('Karet Tengsin');
        await OwnerPage.postalCode.addValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('First Name could not be empty');
        await browser.pause(2000);

    });

    it('should update email last name', async () => {

        await OwnerPage.editButton.click();
        await OwnerPage.delete();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('');
        await OwnerPage.phoneNumber.addValue('089613338885');
        await OwnerPage.email.addValue('owner.q@beps.co.id');
        await OwnerPage.fullAddress.addValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.addValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.addValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.addValue('Kecamatan Tanah Abang');
        await OwnerPage.village.addValue('Karet Tengsin');
        await OwnerPage.postalCode.addValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Last Name could not be empty');
        await browser.pause(2000);

    });

    it('should update empty phone number', async () => {

        await OwnerPage.editButton.click();
        await OwnerPage.delete();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('Q');
        await OwnerPage.phoneNumber.addValue('');
        await OwnerPage.email.addValue('owner.q@beps.co.id');
        await OwnerPage.fullAddress.addValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.addValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.addValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.addValue('Kecamatan Tanah Abang');
        await OwnerPage.village.addValue('Karet Tengsin');
        await OwnerPage.postalCode.addValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Phone Number could not be empty');
        await browser.pause(2000);

    });

    it('should update empty email', async () => {

        await OwnerPage.editButton.click();
        await OwnerPage.delete();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('Q');
        await OwnerPage.phoneNumber.addValue('089613338885');
        await OwnerPage.email.addValue('');
        await OwnerPage.fullAddress.addValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.addValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.addValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.addValue('Kecamatan Tanah Abang');
        await OwnerPage.village.addValue('Karet Tengsin');
        await OwnerPage.postalCode.addValue('10250');
        await OwnerPage.saveButton.click();
        await OwnerPage.closeButton.click();

        await expect(OwnerPage.message).toHaveTextContaining('Email could not be empty');
        await browser.pause(2000);

    });

    it('should update owner', async () => {

        await OwnerPage.editButton.click();
        await OwnerPage.delete();
        await browser.pause(2000);

        await OwnerPage.firstName.addValue('Owner');
        await OwnerPage.lastName.addValue('Q');
        await OwnerPage.phoneNumber.addValue('089613338885');
        await OwnerPage.email.clearValue();
        await OwnerPage.email.addValue('owner.q@mail.co.id');
        await OwnerPage.fullAddress.addValue('Jl. Karet Pasar Baru Barat');
        await OwnerPage.province.addValue('Daerah Khusus Ibukota Jakarta');
        await OwnerPage.city.addValue('Kota Jakarta Pusat');
        await OwnerPage.subDistrict.addValue('Kecamatan Tanah Abang');
        await OwnerPage.village.addValue('Karet Tengsin');
        await OwnerPage.postalCode.addValue('10250');
        await OwnerPage.saveButton.click();

        await expect(OwnerPage.message).toHaveText('Updated Successfully');
        await browser.pause(2000);
    });

    //------------------------------------------------------------------//
    //delete owner//

    it('should search by name', async () => {

        await OwnerPage.searchName.click();
        await browser.keys(["Control" , "KeyA"]);
        await browser.keys("Delete");
        await OwnerPage.searchName.addValue('Owner Q');
    
        await expect(OwnerPage.searchName).toHaveValue('Owner Q');
        console.log(await OwnerPage.searchName.getValue());

    });  

    it('should close delete', async () => {

        await OwnerPage.deleteOwner.click();
        await browser.pause(2000);

        await OwnerPage.closeDelete.click();

    });

    /**
    it('should cancel delete', async () => {

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