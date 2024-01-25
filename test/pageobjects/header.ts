import BasePage from "./base-page.ts";

const logo = 'a.Navbar_logo__RsJHS';

class Header extends BasePage{
    public clickOnLogo(){
        return super.click(logo);
    }
}

export default new Header();