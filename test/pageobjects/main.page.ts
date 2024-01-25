import Page from './page';
import testData from '../data/test-data.json';

const servicesSection = '//section[@data-testid=\'services\']';
const servicesName = '(//section[@data-testid=\'services\']//div[@class=\'RentzilaProposes_name__DTnwr\'])';
const equipmentName = '(//section[@data-testid=\'specialEquipment\']//div[@class=\'RentzilaProposes_name__DTnwr\'])';

class MainPage extends Page {

    private getServiceNameByNumber(number: number){
        return servicesName + `[${number}]`;
    }

    private getEquipmentNameByNumber(number: number){
        return equipmentName + `[${number}]`;
    }

    public async checkAllPopularServices(){
        for (const [index, service] of testData.services.popular.entries()) {
            await super.verifyText(this.getServiceNameByNumber(index + 1), service);
        }
    }

    public async checkAllSpecialEquipment(){
        for (const [index, equipment] of testData.specialEquipment.popular.entries()) {
            await super.verifyText(this.getEquipmentNameByNumber(index + 1), equipment);
        }
    }

    public clickOnService(number: number){
        return super.click(this.getServiceNameByNumber(number));
    }

    public clickOnEquipment(number: number){
        return super.click(this.getEquipmentNameByNumber(number));
    }

    public verifyPage(){
        return super.verifyElement(servicesSection);
    }

    public open(){
        return super.open('');
    }
}

export default new MainPage();