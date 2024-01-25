import BasePage from "./base-page.ts";

const cookiePolicyLabel = 'h1[class=\'Cookies_title__BVLFo\']';

class CookiePolicyPage extends BasePage{

    public verifyPage(){
        super.verifyUrl('cookie-policy');
        return super.verifyElement(cookiePolicyLabel);
    }
}

export default new CookiePolicyPage();