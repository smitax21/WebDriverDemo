class HomePage{

    open() {
        return browser.url('/')
    }

    get btnGetStarted() {
        return $('#get-started')
    }

    get imageLogo() {
        return $('.custom-logo-link')
    }

    get txtHeading() {
        return $('.elementor-widget-container h1')
    }
}

export default new HomePage();