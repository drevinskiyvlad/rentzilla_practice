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

class MainPage extends BasePage {

    private getServiceNameByNumber(number: number){
        return servicesName + `[${number}]`;
    }

    private getServiceCategoryByNumber(number: number){
        return serviceCategory + `[${number}]`;
    }

    private getSpecialEquipmentCategoryByNumber(number: number){
        return specialEquipmentCategory + `[${number}]`;
    }

    private getEquipmentNameByNumber(number: number){
        return equipmentName + `[${number}]`;
    }

    private getAllSearchTitles(){
        return super.getAllElements(searchTitles);
    }

    public async checkAllServices(services: string[]){
        for (const [index, service] of services.entries()) {
            await super.verifyText(this.getServiceNameByNumber(index + 1), service);
        }
    }

    public async clickOnServiceCategory(number: number){
        return super.click(this.getServiceCategoryByNumber(number));
    }

    public async checkAllSpecialEquipment(specialEquipment: string[]){
        for (const [index, equipment] of specialEquipment.entries()) {
            await super.verifyText(this.getEquipmentNameByNumber(index + 1), equipment);
        }
    }

    public async clickOnSpecialEquipmentCategory(number: number){
        return super.click(this.getSpecialEquipmentCategoryByNumber(number));
    }

    public clickOnService(number: number){
        return super.click(this.getServiceNameByNumber(number));
    }

    public clickOnEquipment(number: number){
        return super.click(this.getEquipmentNameByNumber(number));
    }

    public clickOnRequestConsultationButton(){
        return super.click(requestConsultationButton);
    }

    public setNameInputValue(value: string){
        return super.setValue(nameInput, value);
    }

    public setPhoneInputValue(value: string){
        return super.setValue(phoneInput, value);
    }

    public clearNameInputValue(){
        return super.clearInputValue(nameInput);
    }

    public clearPhoneInputValue(){
        return super.clearInputValue(phoneInput);
    }

    public verifyConsultationSection(){
        return super.verifyElement(consultationSection);
    }

    public verifyEmptyNameInputError(){
        return super.verifyElement(emptyNameInputError);
    }

    public verifyEmptyPhoneInputError(){
        return super.verifyElement(emptyPhoneInputError);
    }

    public verifyNameInputBorderColor(color: string){
        return super.verifyElementBorderColor(nameInput, color);
    }

    public verifyPhoneInputBorderColor(color: string){
        return super.verifyElementBorderColor(phoneInput, color);
    }

    public async verifySearchTitles(titles: string[]) {
        const searchTitles = await this.getAllSearchTitles();
        for (const [index, title] of titles.entries()) {
            await super.verifyElementText(searchTitles[index], title);
        }
    }

    public verifyPage(){
        return super.verifyElement(servicesSection);
    }

    public open(){
        return super.open('');
    }
}

export default new MainPage();