import BasePage from './base-page.ts';

const servicesSection = '//section[@data-testid=\'services\']';
const serviceCategory = '//div[contains(@class, "RentzilaProposes_service__oHepD")]';
const specialEquipmentCategory = '//h3[contains(@class, "RentzilaProposes_service__oHepD")]'
const servicesName = '(//section[@data-testid=\'services\']//div[@class=\'RentzilaProposes_name__DTnwr\'])';
const equipmentName = '(//section[@data-testid=\'specialEquipment\']//div[@class=\'RentzilaProposes_name__DTnwr\'])';
const consultationSection = '.Layouts_consultation__JUU1R';
const requestConsultationButton = '.ItemButtons_darkBlueRoundBtn___4GDw';
const emptyNameInputError = 'div[class=\'ConsultationForm_name__3bVcz\'] p[role=\'alert\']'
const emptyPhoneInputError = 'div[class=\'ConsultationForm_phone__vEOS9\'] p[role=\'alert\']'
const nameInput = 'input[name=\'name\']';
const phoneInput = '#mobile';
const searchTitles = '//h6[@class=\'LeftsideSearch_title__FkeCp\']';

/**
 * MainPage class that provides methods for interacting with the Main page.
 */
class MainPage extends BasePage {

    /**
     * Returns the service name by number.
     * @param {number} number - The number of the service.
     * @returns The service name.
     */
    private getServiceNameByNumber(number: number) {
        return servicesName + `[${number}]`;
    }

    /**
     * Returns the service category by number.
     * @param {number} number - The number of the service category.
     * @returns The service category.
     */
    private getServiceCategoryByNumber(number: number) {
        return serviceCategory + `[${number}]`;
    }

    /**
     * Returns the special equipment category by number.
     * @param {number} number - The number of the special equipment category.
     * @returns The special equipment category.
     */
    private getSpecialEquipmentCategoryByNumber(number: number) {
        return specialEquipmentCategory + `[${number}]`;
    }

    /**
     * Returns the equipment name by number.
     * @param {number} number - The number of the equipment.
     * @returns The equipment name.
     */
    private getEquipmentNameByNumber(number: number) {
        return equipmentName + `[${number}]`;
    }

    /**
     * Returns all search titles.
     * @returns All search titles.
     */
    private getAllSearchTitles() {
        return super.getAllElements(searchTitles);
    }

    /**
     * Checks all services.
     * @param {string[]} services - The services to check.
     */
    public async checkAllServices(services: string[]) {
        for (const [index, service] of services.entries()) {
            await super.verifyText(this.getServiceNameByNumber(index + 1), service);
        }
    }

    /**
     * Clicks on the service category by number.
     * @param {number} number - The number of the service category.
     */
    public async clickOnServiceCategory(number: number) {
        return super.click(this.getServiceCategoryByNumber(number));
    }

    /**
     * Checks all special equipment.
     * @param {string[]} specialEquipment - The special equipment to check.
     */
    public async checkAllSpecialEquipment(specialEquipment: string[]) {
        for (const [index, equipment] of specialEquipment.entries()) {
            await super.verifyText(this.getEquipmentNameByNumber(index + 1), equipment);
        }
    }

    /**
     * Clicks on the special equipment category by number.
     * @param {number} number - The number of the special equipment category.
     */
    public async clickOnSpecialEquipmentCategory(number: number) {
        return super.click(this.getSpecialEquipmentCategoryByNumber(number));
    }

    /**
     * Clicks on the service by number.
     * @param {number} number - The number of the service.
     */
    public clickOnService(number: number) {
        return super.click(this.getServiceNameByNumber(number));
    }

    /**
     * Clicks on the equipment by number.
     * @param {number} number - The number of the equipment.
     */
    public clickOnEquipment(number: number) {
        return super.click(this.getEquipmentNameByNumber(number));
    }

    /**
     * Clicks on the request consultation button.
     */
    public clickOnRequestConsultationButton() {
        return super.click(requestConsultationButton);
    }

    /**
     * Sets the value of the name input.
     * @param {string} value - The value to set.
     */
    public setNameInputValue(value: string) {
        return super.setValue(nameInput, value);
    }

    /**
     * Sets the value of the phone input.
     * @param {string} value - The value to set.
     */
    public setPhoneInputValue(value: string) {
        return super.setValue(phoneInput, value);
    }

    /**
     * Clears the value of the name input.
     */
    public clearNameInputValue() {
        return super.clearInputValue(nameInput);
    }

    /**
     * Clears the value of the phone input.
     */
    public clearPhoneInputValue() {
        return super.clearInputValue(phoneInput);
    }

    /**
     * Verifies the presence of the consultation section.
     */
    public verifyConsultationSection() {
        return super.verifyElement(consultationSection);
    }

    /**
     * Verifies the presence of the empty name input error.
     */
    public verifyEmptyNameInputError() {
        return super.verifyElement(emptyNameInputError);
    }

    /**
     * Verifies the presence of the empty phone input error.
     */
    public verifyEmptyPhoneInputError() {
        return super.verifyElement(emptyPhoneInputError);
    }

    /**
     * Verifies the border color of the name input.
     * @param {string} color - The color to verify.
     */
    public verifyNameInputBorderColor(color: string) {
        return super.verifyElementBorderColor(nameInput, color);
    }

    /**
     * Verifies the border color of the phone input.
     * @param {string} color - The color to verify.
     */
    public verifyPhoneInputBorderColor(color: string) {
        return super.verifyElementBorderColor(phoneInput, color);
    }

    /**
     * Verifies the search titles.
     * @param {string[]} titles - The titles to verify.
     */
    public async verifySearchTitles(titles: string[]) {
        const searchTitles = await this.getAllSearchTitles();
        for (const [index, title] of titles.entries()) {
            await super.verifyElementText(searchTitles[index], title);
        }
    }

    /**
     * Verifies the presence of the services section.
     */
    public verifyPage() {
        return super.verifyElement(servicesSection);
    }

    /**
     * Opens the main page.
     */
    public open() {
        return super.open('');
    }
}

export default new MainPage();