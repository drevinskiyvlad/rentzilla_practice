import BasePage from "./base-page.ts";

const cookiePolicyLabel = 'h1[class=\'Cookies_title__BVLFo\']';

/**
 * CookiePolicyPage class that provides methods for interacting with the Cookie Policy page.
 */
class CookiePolicyPage extends BasePage {

    /**
     * Verifies the URL and the presence of the cookie policy label on the page.
     */
    public verifyPage() {
        super.verifyUrl('cookie-policy');
        return super.verifyElement(cookiePolicyLabel);
    }
}

export default new CookiePolicyPage();