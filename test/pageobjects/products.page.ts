import BasePage from './base-page.ts';

const filterForm = '//div[@class=\'Filters_filterForm__XUeaD\']';
const selectedEquipment = '//div[@class=\'ResetFilters_selectedCategory___D1E6\']/p';
const firstUnitCard = '(//div[@class=\'UnitCard_cardWrapper__JIPt3\'])[1]'

/**
 * ProductsPage class that provides methods for interacting with the Products page.
 */
class ProductsPage extends BasePage {

    /**
     * Checks if the search result is not empty.
     * @returns True if the search result is not empty, false otherwise.
     */
    public isSearchResultNotEmpty() {
        return super.isElementDisplayed(firstUnitCard);
    }

    /**
     * Verifies the selected equipment.
     * @param {string} equipment - The equipment to verify.
     */
    public verifySelectedEquipment(equipment: string) {
        return super.verifyText(selectedEquipment, equipment);
    }

    /**
     * Verifies the presence of the first unit card.
     */
    public verifyUnitCard() {
        return super.verifyElement(firstUnitCard);
    }

    /**
     * Verifies that the search result is empty.
     */
    public verifyEmptySearchResult() {
        return super.verifyElementNotDisplayed(firstUnitCard);
    }

    /**
     * Clicks on the first unit card.
     */
    public clickOnFirstUnitCard() {
        return super.click(firstUnitCard);
    }

    /**
     * Verifies the URL and the presence of the filter form on the page.
     */
    public verifyPage() {
        super.verifyUrl('products')
        return super.verifyElement(filterForm);
    }

}

export default new ProductsPage();