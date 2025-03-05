import BlogComponent from "../pages/components/blog-comp";

describe("", () => {
  it("Get the lists of Recent Post & Assert the text", async () => {
    await BlogComponent.open();

    //Get the Recent Post List Element
    const list = await BlogComponent.recentPost;

    //loop through
    for (const item of list) {
      const text = await item.getText();
      await expect(text.length).toBeGreaterThan(10);
    }

    //Assert the total length of the list
    await expect(list).toHaveLength(5);
  });
});
