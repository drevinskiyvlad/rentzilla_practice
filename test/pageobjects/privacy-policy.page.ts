import BasePage from "./base-page.ts";

const privacyPolicyLabel = 'h1[class=\'PrivacyPolicy_title__FEiRV\']';

class PrivacyPolicyPage extends BasePage{

    public verifyPage(){
        super.verifyUrl('privacy-policy');
        return super.verifyElement(privacyPolicyLabel);
    }
}

export default new PrivacyPolicyPage();