class ContactComponent {
    open() {
        return browser.url("/contact");
    }

    get allFields() {
        return $('#evf-277-field_ys0GeZISRs-1')
    }

    get inputName() {
        return $('#evf-277-field_ys0GeZISRs-1')
    }

    get inputEmail() {
        return $('#evf-277-field_LbH5NxasXM-2')
    }

    get inputPhone() {
        return $('#evf-277-field_66FR384cge-3')
    }

    get textMessageArea(){
        return $('#evf-277-field_yhGx3FOwr2-4')
    }

    get btnSubmit() {
        return $('button[type=submit]')
    }

    get alertSuccess() {
        return $("[role='alert']");
    }

    async submitForm(name, email, phone, message) {
        //Fill out input fields
        await this.inputName.addValue(name)
        await this.inputEmail.addValue(email)
        await this.inputPhone.addValue(phone)
        await this.textMessageArea.addValue(message)

         // Ensure submit button is clickable before clicking
         await this.btnSubmit.waitForClickable();
         await this.btnSubmit.click();
    }
}

export default new ContactComponent();