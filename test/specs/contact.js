import ContactComponent from "../pages/components/contact-comp";

describe("", () =>{
    it("Check success message after submit & Assert them", async () => {
        await ContactComponent.open();

        //Ensure fiels are loaded
        await ContactComponent.allFields.waitForDisplayed();

       await ContactComponent.submitForm('Sia', 'sia@sia.com', '1234567890', 'Hello')

        // Wait for success message and assert
        const alertText = ContactComponent.alertSuccess;
        await alertText.waitForDisplayed();
        await expect(alertText).toHaveText("Thanks for contacting us! We will be in touch with you shortly")
    })
})