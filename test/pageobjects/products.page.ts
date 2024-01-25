import Page from './page';

const filterForm = '//div[@class=\'Filters_filterForm__XUeaD\']';
const selectedCategory = '//div[@class=\'ResetFilters_selectedCategory___D1E6\']/p';
const unitCard = '(//div[@class=\'UnitCard_cardWrapper__JIPt3\'])[1]'

class ProductsPage extends Page {

    public verifySelectedCategory(category: string){
        return super.verifyText(selectedCategory, category);
    }

    public verifyUnitCard(){
        return super.verifyElement(unitCard);
    }

    public clickOnFirstUnitCard(){
        return super.click(unitCard);
    }

    public verifyPage(){
        return super.verifyElement(filterForm);
    }

}

export default new ProductsPage();