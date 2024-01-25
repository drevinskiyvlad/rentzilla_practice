import BasePage from './base-page.ts';

const unitContainer = '//div[@class=\'SelectedUnit_container__f59Iq\']';
const unitServices = '//div[@class=\'UnitCharacteristics_service__aTyk2\']'

class UnitPage extends BasePage {

    public verifyUnitServices(category: string){
        const services = super.getAllElements(unitServices);

        return services.forEach(async service => {
            if(await service.getText() === category){
                super.verifyElementText(service, category);
            }
        });
    }

    public verifyPage(){
        super.verifyUrl('unit')
        return super.verifyElement(unitContainer);
    }

}

export default new UnitPage();