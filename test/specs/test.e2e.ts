import mainPage from "../pageobjects/main.page.ts";
import productsPage from "../pageobjects/products.page.ts";
import unitPage from "../pageobjects/unit.page.ts";
import testData from "../data/test-data.json";
import header from "../pageobjects/header.ts";
import footer from "../pageobjects/footer.ts";
import privacyPolicyPage from "../pageobjects/privacy-policy.page.ts";
import cookiePolicyPage from "../pageobjects/cookie-policy.page.ts";
import termsAndConditionsPage from "../pageobjects/terms-and-conditions.page.ts";
import tendersPage from "../pageobjects/tenders.page.ts";

describe('', () => {

    it.skip('C212: Checking "Послуги" section on the main page', async () => {
        await mainPage.open();
        await mainPage.verifyPage();

        await mainPage.checkAllPopularServices();

        for (const [index, service] of testData.services.popular.entries()) {
            await mainPage.clickOnService(index + 1);
            await productsPage.verifyPage();
            await productsPage.verifySelectedCategory(service);
            await productsPage.verifyUnitCard();
            await productsPage.clickOnFirstUnitCard();
            await unitPage.verifyPage();
            await unitPage.verifyUnitServices(service);
            await header.clickOnLogo();
        }
    })

    it.skip('C213: Checking "Спецтехніка" section on the main page', async () => {
        await mainPage.open();
        await mainPage.verifyPage();

        await mainPage.checkAllSpecialEquipment();

        for (const [index] of testData.specialEquipment.popular.entries()) {
            const category = testData.specialEquipment.categories[index];
            await mainPage.clickOnEquipment(index + 1);
            await productsPage.verifyPage();
            await productsPage.verifySelectedCategory(category);
            await productsPage.verifyUnitCard();
            await productsPage.clickOnFirstUnitCard();
            await unitPage.verifyPage();
            await unitPage.verifyUnitServices(category);
            await header.clickOnLogo();
        }
    });

    it('C214: Verify that all elements on the footer are displayed and all links are clickable', async () => {
        await mainPage.open();
        await mainPage.verifyPage();

        await footer.verifyAboutUsLabel();
        await footer.verifyPrivacyPolicyLink();
        await footer.verifyCookiePolicyLink();
        await footer.verifyTermsAndConditionsLink();
        await footer.verifyForUsersLabel();
        await footer.verifyAnnouncementsLink();
        await footer.verifyTendersLink();
        await footer.verifyJobRequestsLink();
        await footer.verifyContactsLabel();
        await footer.verifyEmailLink();
        await footer.verifyLogo();
        await footer.verifyCopyrightLabel();

        await footer.clickOnPrivacyPolicyLink();
        await privacyPolicyPage.verifyPage();

        await footer.clickOnCookiePolicyLink();
        await cookiePolicyPage.verifyPage();

        await footer.clickOnTermsAndConditionsLink();
        await termsAndConditionsPage.verifyPage();

        await footer.clickOnAnnouncementsLink();
        await productsPage.verifyPage();
        await header.clickOnLogo();

        await footer.clickOnTendersLink();
        await tendersPage.verifyPage();
    });


})

