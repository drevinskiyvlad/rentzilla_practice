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

/**
 * Footer class that provides methods for interacting with the Footer.
 */
class Footer extends BasePage {

    /**
     * Clicks on the Privacy Policy link.
     */
    public clickOnPrivacyPolicyLink() {
        return super.click(privacyPolicyLink);
    }

    /**
     * Clicks on the Cookie Policy link.
     */
    public clickOnCookiePolicyLink() {
        return super.click(cookiePolicyLink);
    }

    /**
     * Clicks on the Terms and Conditions link.
     */
    public clickOnTermsAndConditionsLink() {
        return super.click(termsAndConditionsLink);
    }

    /**
     * Clicks on the Announcements link.
     */
    public clickOnAnnouncementsLink() {
        return super.click(announcementsLink);
    }

    /**
     * Clicks on the Tenders link.
     */
    public clickOnTendersLink() {
        return super.click(tendersLink);
    }

    /**
     * Verifies the presence of the About Us label.
     */
    public verifyAboutUsLabel() {
        return super.verifyElement(aboutUsLabel);
    }

    /**
     * Verifies the presence of the Privacy Policy link.
     */
    public verifyPrivacyPolicyLink() {
        return super.verifyElement(privacyPolicyLink);
    }

    /**
     * Verifies the presence of the Cookie Policy link.
     */
    public verifyCookiePolicyLink() {
        return super.verifyElement(cookiePolicyLink);
    }

    /**
     * Verifies the presence of the Terms and Conditions link.
     */
    public verifyTermsAndConditionsLink() {
        return super.verifyElement(termsAndConditionsLink);
    }

    /**
     * Verifies the presence of the For Users label.
     */
    public verifyForUsersLabel() {
        return super.verifyElement(forUsersLabel);
    }

    /**
     * Verifies the presence of the Announcements link.
     */
    public verifyAnnouncementsLink() {
        return super.verifyElement(announcementsLink);
    }

    /**
     * Verifies the presence of the Tenders link.
     */
    public verifyTendersLink() {
        return super.verifyElement(tendersLink);
    }

    /**
     * Verifies the presence of the Job Requests link.
     */
    public verifyJobRequestsLink() {
        return super.verifyElement(jobRequestsLink);
    }

    /**
     * Verifies the presence of the Contacts label.
     */
    public verifyContactsLabel() {
        return super.verifyElement(contactsLabel);
    }

    /**
     * Verifies the presence of the Email link.
     */
    public verifyEmailLink() {
        return super.verifyElement(emailLink);
    }

    /**
     * Verifies the presence of the Logo.
     */
    public verifyLogo() {
        return super.verifyElement(logo);
    }

    /**
     * Verifies the presence of the Copyright label.
     */
    public verifyCopyrightLabel() {
        return super.verifyElement(copyrightLabel);
    }
}

export default new Footer();