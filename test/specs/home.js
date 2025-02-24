import HomePage from "../pages/home-page";

describe("Home", () => {
  it("Open URL & assert title", async () => {
    //Open Url
    await HomePage.open();

    //Assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – SDET Unicorns"
    );
  });

  it("Open About Page", async () => {
    //Open About Page
    await browser.url("https://practice.sdetunicorns.com/about");

    //Assert Url
    await expect(browser).toHaveUrl("https://practice.sdetunicorns.com/about/");
  });

  it("Click get started button & Asser url contain get started text", async () => {
    //Open Home Page
    await HomePage.open();

    //Click get started
    await HomePage.btnGetStarted.click();

    //Assert Url contains get started text
    await expect(browser).toHaveUrl(expect.stringContaining("get-started"));
  });

  it("Click logo & Asser url does not contain get started text", async () => {
    //Open Home Page
    await HomePage.open();

    //Click get started
    await HomePage.imageLogo.click();

    //Assert Url contains get started text
    await expect(browser).toHaveUrl(expect.not.stringContaining("get-started"));
  });

  it("Find heading element & assert the title", async () => {
    //Open Home Page
    await HomePage.open();

    //Find the heading element
    const headingEl = await HomePage.txtHeading;

    //get the text
    const headingText = await headingEl.getText();

    //Assert the text
    // await expect(headingText).toEqual('Think different. Make different.');
    await expect(headingEl).toHaveText("Think different. Make different.");
  });
});
