import BasePage from './base-page.ts';

const unitContainer = '//div[@class=\'SelectedUnit_container__f59Iq\']';
const unitServices = '//div[@class=\'UnitCharacteristics_service__aTyk2\']'

/**
 * UnitPage class that provides methods for interacting with the Unit page.
 */
class UnitPage extends BasePage {

    /**
     * Verifies the unit services.
     * @param {string} category - The category to verify.
     */
    public verifyUnitServices(category: string) {
        const services = super.getAllElements(unitServices);

        return services.forEach(async service => {
            if (await service.getText() === category) {
                super.verifyElementText(service, category);
            }
        });
    }

    /**
     * Verifies the URL and the presence of the unit container on the page.
     */
    public verifyPage() {
        super.verifyUrl('unit')
        return super.verifyElement(unitContainer);
    }

}

export default new UnitPage();