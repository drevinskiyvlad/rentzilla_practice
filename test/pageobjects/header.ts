import BasePage from "./base-page.ts";

const logo = 'a.Navbar_logo__RsJHS';
const searchInput = 'header .MainSearch_input__Kr9pB';
const firstSearchResult = '//header//div[@class=\'RightsideSearch_units__cojjw\']/div[1]';
const firstSearchService = '//h6[@class=\'LeftsideSearch_title__FkeCp\'][2]/following-sibling::div[1]/div[1]'
const firstSearchCategory = '//h6[@class=\'LeftsideSearch_title__FkeCp\'][3]/following-sibling::div[1]/div[1]'
const cancelSearchButton = 'div[data-testid="searchClear"]';

/**
 * Header class that provides methods for interacting with the Header.
 */
class Header extends BasePage {
    /**
     * Clicks on the Logo.
     */
    public clickOnLogo() {
        return super.click(logo);
    }

    /**
     * Clicks on the Search Input.
     */
    public clickOnSearchInput() {
        return super.click(searchInput);
    }

    /**
     * Clicks on the First Search Result.
     */
    public clickOnFirstSearchResult() {
        return super.click(firstSearchResult);
    }

    /**
     * Sets the value of the Search Input.
     * @param {string} value - The value to set.
     */
    public setSearchInputValue(value: string) {
        return super.setValue(searchInput, value);
    }

    /**
     * Verifies the text of the Search Input.
     * @param {string} text - The text to verify.
     */
    public verifySearchInputText(text: string) {
        return super.verifyText(searchInput, text);
    }

    /**
     * Verifies that the Search Dropdown is hidden.
     */
    public verifySearchDropdownHidden() {
        return super.verifyElementNotDisplayed(firstSearchResult);
    }

    /**
     * Clicks on the First Search Service.
     */
    public clickOnFirstSearchService() {
        return super.click(firstSearchService);
    }

    /**
     * Clicks on the First Search Category.
     */
    public clickOnFirstSearchCategory() {
        return super.click(firstSearchCategory);
    }

    /**
     * Clicks on the Cancel Search Button.
     */
    public clickCancelSearchButton() {
        return super.click(cancelSearchButton);
    }
}

export default new Header();