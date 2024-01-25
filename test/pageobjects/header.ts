import Page from "./page.ts";

const logo = 'a.Navbar_logo__RsJHS';

class Header extends Page{
    public clickOnLogo(){
        return super.click(logo);
    }
}

export default new Header();