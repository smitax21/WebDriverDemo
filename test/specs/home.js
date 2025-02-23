// Practice E-Commerce Site – SDET Unicorns 
// https://practice.sdetunicorns.com

describe("Home", () => {
  it("Open URL & assert title", async () => {
    //Open Url
    await browser.url("https://practice.sdetunicorns.com");

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
    await browser.url("https://practice.sdetunicorns.com");

    //Click get started
    await $('#get-started').click();

    //Assert Url contains get started text
    await expect(browser).toHaveUrl(expect.stringContaining('get-started'));
  });

    it("Click logo & Asser url does not contain get started text", async () => {
        //Open Home Page
        await browser.url("https://practice.sdetunicorns.com");
    
        //Click get started
        await $('.custom-logo-link').click();
    
        //Assert Url contains get started text
        await expect(browser).toHaveUrl(expect.not.stringContaining('get-started'));
      });

    it("Find heading element & assert the title", async () => {
        //Open Home Page
        await browser.url("https://practice.sdetunicorns.com");

        //Find the heading element
        const headingEl = await $('.elementor-widget-container h1')
    
        //get the text
        const headingText = await headingEl.getText();
    
        //Assert the text
        // await expect(headingText).toEqual('Think different. Make different.');
        await expect(headingEl).toHaveText('Think different. Make different.');

      });

});
