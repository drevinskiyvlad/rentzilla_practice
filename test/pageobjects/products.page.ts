import BasePage from './base-page.ts';

const filterForm = '//div[@class=\'Filters_filterForm__XUeaD\']';
const selectedEquipment = '//div[@class=\'ResetFilters_selectedCategory___D1E6\']/p';
const firstUnitCard = '(//div[@class=\'UnitCard_cardWrapper__JIPt3\'])[1]'

class ProductsPage extends BasePage {

    public isSearchResultNotEmpty(){
        return super.isElementDisplayed(firstUnitCard);
    }

    public verifySelectedEquipment(equipment: string){
        return super.verifyText(selectedEquipment, equipment);
    }

    public verifyUnitCard(){
        return super.verifyElement(firstUnitCard);
    }

    public verifyEmptySearchResult(){
        return super.verifyElementNotDisplayed(firstUnitCard);
    }

    public clickOnFirstUnitCard(){
        return super.click(firstUnitCard);
    }

    public verifyPage(){
        super.verifyUrl('products')
        return super.verifyElement(filterForm);
    }

}

export default new ProductsPage();