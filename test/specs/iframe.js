describe('IFrame', () =>{
    it('Working with Iframe', async () =>{
        //Open Url
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/')

        //access the iframe
        const iframe = await $('#advanced_iframe')
        await browser.switchToFrame(iframe)

        //Verify logo exist
        await expect($('.custom-logo-link img')).toExist();

        //Switch to parent frame
        await browser.switchToParentFrame();

        //Verify page title
        await expect($('h1.zak-page-title')).toHaveText('IFrame Sample');
    })
})