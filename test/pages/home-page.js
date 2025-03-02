import NavComponent from "./components/nav-comp";
import BlogComponent from "./components/blog-comp";

class HomePage {
  open() {
    return browser.url("/");
  }

  get btnGetStarted() {
    return $("#get-started");
  }

  get imageLogo() {
    return $(".custom-logo-link");
  }

  get txtHeading() {
    return $(".elementor-widget-container h1");
  }

  get NavComponent() {
    return NavComponent;
  }

  get BlogComponent() {
    return BlogComponent;
  }

}

export default new HomePage();
