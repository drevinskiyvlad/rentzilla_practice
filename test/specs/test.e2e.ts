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

    beforeEach(async () => {
        await mainPage.open();
        await mainPage.verifyPage();
    });

    it('C212: Checking "Послуги" section on the main page', async () => {
        let categoryNumber = 0;

        for (const services of Object.values(testData.services)) {
            categoryNumber++;

            for (const [index, service] of services.entries()) {
                await mainPage.clickOnServiceCategory(categoryNumber);
                await mainPage.checkAllServices(services);
                await mainPage.clickOnService(index + 1);
                await productsPage.verifyPage();
                await productsPage.verifySelectedEquipment(service);
                await productsPage.verifyUnitCard();
                await productsPage.clickOnFirstUnitCard();
                await unitPage.verifyPage();
                await unitPage.verifyUnitServices(service);
                await header.clickOnLogo();
            }
        }
    });

    it('C213: Checking "Спецтехніка" section on the main page', async () => {
        for (let i = 0; i < Object.keys(testData.specialEquipment).length; i++) {
            await mainPage.clickOnSpecialEquipmentCategory(i + 1);
            await mainPage.checkAllSpecialEquipment(Object.values(testData.specialEquipment)[i]);
        }

        let categoryNumber = 0;

        for (const equipments of Object.values(testData.specialEquipmentCategories)) {
            categoryNumber++;

            for (const [index, equipment] of equipments.entries()) {
                await mainPage.clickOnSpecialEquipmentCategory(categoryNumber);
                await mainPage.clickOnEquipment(index + 1);
                await productsPage.verifyPage();
                await productsPage.verifySelectedEquipment(equipment);
                await productsPage.verifyUnitCard();
                await productsPage.clickOnFirstUnitCard();
                await unitPage.verifyPage();
                await unitPage.verifyUnitServices(equipment);
                await header.clickOnLogo();
            }
        }
    });

    it('C214: Verify that all elements on the footer are displayed and all links are clickable', async () => {
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

    it('C226: Verify "У Вас залишилися питання?" form', async () => {
        const validName = testData.validName;
        const validPhone = testData.validPhone;
        const invalidPhone1 = testData.invalidPhone1;
        const invalidPhone2 = testData.invalidPhone2;
        const invalidParameterBorderColor = testData.errorInputBorderColor;
        const defaultInputBorderColor = testData.defaultInputBorderColor;

        await mainPage.verifyConsultationSection();

        await mainPage.clickOnRequestConsultationButton();
        await mainPage.verifyEmptyNameInputError();
        await mainPage.verifyEmptyPhoneInputError();
        await mainPage.verifyNameInputBorderColor(invalidParameterBorderColor);
        await mainPage.verifyPhoneInputBorderColor(invalidParameterBorderColor);

        await mainPage.setNameInputValue(validName);
        await mainPage.clickOnRequestConsultationButton();
        await mainPage.verifyEmptyPhoneInputError();
        await mainPage.verifyPhoneInputBorderColor(invalidParameterBorderColor);
        await mainPage.verifyNameInputBorderColor(defaultInputBorderColor);

        await mainPage.setPhoneInputValue(validPhone);
        await mainPage.clearNameInputValue();
        await mainPage.clickOnRequestConsultationButton();
        await mainPage.verifyEmptyNameInputError();
        await mainPage.verifyNameInputBorderColor(invalidParameterBorderColor);
        await mainPage.verifyPhoneInputBorderColor(defaultInputBorderColor);

        await mainPage.setNameInputValue(validName);
        await mainPage.clearPhoneInputValue();
        await mainPage.setPhoneInputValue(invalidPhone1);
        await mainPage.clickOnRequestConsultationButton();
        await mainPage.verifyEmptyPhoneInputError();
        await mainPage.verifyPhoneInputBorderColor(invalidParameterBorderColor);

        await mainPage.clearPhoneInputValue();
        await mainPage.setPhoneInputValue(invalidPhone2);
        await mainPage.clickOnRequestConsultationButton();
        await mainPage.verifyEmptyPhoneInputError();
        await mainPage.verifyPhoneInputBorderColor(invalidParameterBorderColor);

        await mainPage.clearPhoneInputValue();
        await mainPage.setPhoneInputValue(validPhone);
        await mainPage.handleAlert();
    });

    it('C530: Verify Search Input', async () => {
        await header.clickOnSearchInput();
        await mainPage.verifySearchTitles(['Історія пошуку', 'Послуги', 'Категорії']);
        await mainPage.clickEnter();
        await productsPage.verifyPage();
        await header.clickOnLogo();

        await header.setSearchInputValue('Трактор');
        await mainPage.clickEnter();
        await productsPage.verifyUnitCard();
        await productsPage.clickOnFirstUnitCard();
        await unitPage.verifyPage();
        await header.clickOnLogo();

        await header.setSearchInputValue('Ремонт гидравлики');
        await mainPage.clickEnter();
        await productsPage.verifyUnitCard();
        await productsPage.clickOnFirstUnitCard();
        await unitPage.verifyPage();
        await header.clickOnLogo();

        await header.setSearchInputValue('Ремонт');
        await header.clickOnFirstSearchResult();
        await unitPage.verifyPage();
        await header.clickOnLogo();

        await header.setSearchInputValue('     ');
        await mainPage.clickEnter();
        await productsPage.verifyEmptySearchResult();
        await header.clickOnLogo();

        await header.setSearchInputValue('123');
        if (await productsPage.isSearchResultNotEmpty()) {
            await header.clickOnFirstSearchResult();
            await unitPage.verifyPage();
            await header.clickOnLogo();
        } else {
            await productsPage.verifyEmptySearchResult();
        }

        await header.setSearchInputValue('@');
        if (await productsPage.isSearchResultNotEmpty()) {
            await header.clickOnFirstSearchResult();
            await unitPage.verifyPage();
            await header.clickOnLogo();
        } else {
            await productsPage.verifyEmptySearchResult();
        }

        await header.setSearchInputValue('^');
        await header.verifySearchInputText('');
        await mainPage.clickEnter();
        await productsPage.verifyPage();
        await header.clickOnLogo();

        await header.setSearchInputValue('non-existent');
        await mainPage.clickEnter();
        await productsPage.verifyEmptySearchResult();
        await header.clickOnLogo();

        await header.setSearchInputValue('Асфальтування');
        await header.clickOnFirstSearchService();
        await productsPage.verifyPage();
        await productsPage.verifyUnitCard();
        await header.clickOnLogo();

        await header.setSearchInputValue('Драглайн')
        await header.clickOnFirstSearchCategory();
        if (await productsPage.isSearchResultNotEmpty()) {
            await header.clickOnFirstSearchResult();
            await unitPage.verifyPage();
            await header.clickOnLogo();
        } else {
            await productsPage.verifyEmptySearchResult();
        }

        await header.setSearchInputValue('Ремонт')
        await header.clickCancelSearchButton();
        await header.verifySearchDropdownHidden();
    });
})

