describe("", () =>{
    it("Check success message after submit & Assert them", async () => {
        await browser.url("/contact");

        //Ensure fiels are loaded
        await $('#evf-277-field_ys0GeZISRs-1').waitForDisplayed();

        //Fill out input fields
        await $('#evf-277-field_ys0GeZISRs-1').addValue('Sia')
        await $('#evf-277-field_LbH5NxasXM-2').addValue('sia@sia.com')
        await $('#evf-277-field_66FR384cge-3').addValue('1234567890')
        await $('#evf-277-field_yhGx3FOwr2-4').addValue('Testing')

        // Ensure submit button is clickable before clicking
        await $('button[type=submit]').waitForClickable();
        await $('button[type=submit]').click();

        // Wait for success message and assert
        const alertText = await $("[role='alert']");
        await alertText.waitForDisplayed();
        await expect(alertText).toHaveText("Thanks for contacting us! We will be in touch with you shortly")
    })
})