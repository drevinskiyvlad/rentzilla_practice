import BasePage from "./base-page.ts";

const termsConditionsLabel = 'h1[class=\'TermsConditions_title__haW1D\']';

/**
 * TermsAndConditionsPage class that provides methods for interacting with the Terms and Conditions page.
 */
class TermsAndConditionsPage extends BasePage {

    /**
     * Verifies the URL and the presence of the terms and conditions label on the page.
     */
    public verifyPage() {
        super.verifyUrl('terms-conditions');
        return super.verifyElement(termsConditionsLabel);
    }
}

export default new TermsAndConditionsPage();