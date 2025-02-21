describe('Navigation Menu', () =>{
    it('get the text of all menu item & asset them', async () =>{
        await browser.url('/')

        const expectedLinks= [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]

        const actualLink = [];

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