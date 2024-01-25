import BasePage from "./base-page.ts";

const termsConditionsLabel = 'h1[class=\'TermsConditions_title__haW1D\']';

class TermsAndConditionsPage extends BasePage{

    public verifyPage(){
        super.verifyUrl('terms-conditions');
        return super.verifyElement(termsConditionsLabel);
    }
}

export default new TermsAndConditionsPage();