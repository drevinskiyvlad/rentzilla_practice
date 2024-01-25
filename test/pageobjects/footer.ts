import BasePage from "./base-page.ts";

const aboutUsLabel = 'div[data-testid=content]';
const privacyPolicyLink = 'a[href=\'/privacy-policy/\']';
const cookiePolicyLink = 'a[href=\'/cookie-policy/\']';
const termsAndConditionsLink = 'a[href=\'/terms-conditions/\']';
const forUsersLabel = '.RentzilaForBuyers_title__k3tHn';
const announcementsLink = 'a[href=\'/products/\']';
const tendersLink = 'a[href=\'/tenders-map/\']';
const jobRequestsLink = 'a[href=\'/requests-map/\']';
const contactsLabel = '.RentzilaContacts_title__SxcO7';
const emailLink = '.RentzilaContacts_email__jlzWc';
const logo = 'div[class*=\'footer\'] div[data-testid=\'logo\']'
const copyrightLabel = 'div[data-testid=\'copyright\']';

class Footer extends BasePage{

    public clickOnPrivacyPolicyLink(){
        return super.click(privacyPolicyLink);
    }

    public clickOnCookiePolicyLink(){
        return super.click(cookiePolicyLink);
    }

    public clickOnTermsAndConditionsLink(){
        return super.click(termsAndConditionsLink);
    }

    public clickOnAnnouncementsLink(){
        return super.click(announcementsLink);
    }

    public clickOnTendersLink(){
        return super.click(tendersLink);
    }

    public clickEmailLink(){
        return super.click(emailLink);
    }

    public verifyAboutUsLabel(){
        return super.verifyElement(aboutUsLabel);
    }

    public verifyPrivacyPolicyLink(){
        return super.verifyElement(privacyPolicyLink);
    }

    public verifyCookiePolicyLink(){
        return super.verifyElement(cookiePolicyLink);
    }

    public verifyTermsAndConditionsLink(){
        return super.verifyElement(termsAndConditionsLink);
    }

    public verifyForUsersLabel(){
        return super.verifyElement(forUsersLabel);
    }

    public verifyAnnouncementsLink(){
        return super.verifyElement(announcementsLink);
    }

    public verifyTendersLink(){
        return super.verifyElement(tendersLink);
    }

    public verifyJobRequestsLink(){
        return super.verifyElement(jobRequestsLink);
    }

    public verifyContactsLabel(){
        return super.verifyElement(contactsLabel);
    }

    public verifyEmailLink(){
        return super.verifyElement(emailLink);
    }

    public verifyLogo(){
        return super.verifyElement(logo);
    }

    public verifyCopyrightLabel(){
        return super.verifyElement(copyrightLabel);
    }
}

export default new Footer();