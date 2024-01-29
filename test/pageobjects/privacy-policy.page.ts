import BasePage from "./base-page.ts";

const privacyPolicyLabel = 'h1[class=\'PrivacyPolicy_title__FEiRV\']';

/**
 * PrivacyPolicyPage class that provides methods for interacting with the Privacy Policy page.
 */
class PrivacyPolicyPage extends BasePage {

    /**
     * Verifies the URL and the presence of the privacy policy label on the page.
     */
    public verifyPage() {
        super.verifyUrl('privacy-policy');
        return super.verifyElement(privacyPolicyLabel);
    }
}

export default new PrivacyPolicyPage();