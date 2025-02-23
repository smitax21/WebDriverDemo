describe('Navigation Menu', () =>{
    it('get the text of all menu item & asset them', async () =>{
        browser.url('/')

        const expectedLinks= [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]

        const actualLink = [];

        //wait command while using asynchronous 
        await $('#zak-primary-menu').waitForDisplayed({ timeout: 1000});
        await $('#zak-primary-menu li').waitForClickable({ timeout: 1000});

        //wait until the 'home' text is displayed on the navigation menu
        await browser.waitUntil(async function() {
            const homeText = await $('#zak-primary-menu li').getText();
            return homeText === "Home"; //true or false
        }, {
            timeout: 5000,
            timeoutMsg: 'Could not verify the Home text from #zak-primary-menu li'
        })


        //Two ways of doing it
        //first method
        // const navLinks = await $('#zak-primary-menu').$$('li')
        //second method by allowing double dollar and passing all the selectors
        const navLinks = await $$('#zak-primary-menu li')


        for (const link of navLinks) {
            actualLink.push(await link.getText())
        }

        await expect(expectedLinks).toEqual(actualLink)

    })
})