import ContactComponent from "../pages/components/contact-comp";
import { faker } from "@faker-js/faker";

describe("", () => {
  it("Check success message after submit & Assert them", async () => {
    await ContactComponent.open();

    //Ensure fiels are loaded
    await ContactComponent.allFields.waitForDisplayed();

    await ContactComponent.submitForm(
      faker.person.fullName(),
      faker.internet.email(),
      faker.phone.number(),
      faker.lorem.paragraphs(1)
    );

    // Wait for success message and assert
    const alertText = ContactComponent.alertSuccess;
    await alertText.waitForDisplayed();
    await expect(alertText).toHaveText(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
