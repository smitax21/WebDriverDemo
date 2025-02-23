describe('', () => {
    it('Get the lists of Recent Post & Assert the text', async () => {
        await browser.url('/blog');

        //Get the Recent Post List Element
        const list = await $$('#recent-posts-3 ul li')

        //loop through
        for( const item of list){
            const text = await item.getText()
            await expect(text.length).toBeGreaterThan(10)
        }

        //Assert the total length of the list
        await expect(list).toHaveLength(5)
    })
})