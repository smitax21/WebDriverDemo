class BlogComponent {
    open() {
        return browser.url("/blog");
    }

    get recentPost(){
        return $$('#recent-posts-3 ul li');
    }
}

export default new BlogComponent();