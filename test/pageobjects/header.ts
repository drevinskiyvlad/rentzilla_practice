import BasePage from "./base-page.ts";

const logo = 'a.Navbar_logo__RsJHS';
const searchInput = 'header .MainSearch_input__Kr9pB';
const firstSearchResult = '//header//div[@class=\'RightsideSearch_units__cojjw\']/div[1]';
const firstSearchService = '//h6[@class=\'LeftsideSearch_title__FkeCp\'][2]/following-sibling::div[1]/div'
const firstSearchCategory = '//h6[@class=\'LeftsideSearch_title__FkeCp\'][3]/following-sibling::div[1]/div'
const cancelSearchButton = 'div[data-testid="searchClear"]';

class Header extends BasePage{
    public clickOnLogo(){
        return super.click(logo);
    }

    public clickOnSearchInput(){
        return super.click(searchInput);
    }

    public clickOnFirstSearchResult(){
        return super.click(firstSearchResult);
    }

    public setSearchInputValue(value: string){
        return super.setValue(searchInput, value);
    }

    public verifySearchInputText(text: string){
        return super.verifyText(searchInput, text);
    }

    public verifySearchDropdownHidden(){
        return super.verifyElementNotDisplayed(firstSearchResult);
    }

    public clickOnFirstSearchService(){
        return super.click(firstSearchService);
    }

    public clickOnFirstSearchCategory(){
        return super.click(firstSearchCategory);
    }

    public clickCancelSearchButton(){
        return super.click(cancelSearchButton);
    }
}

export default new Header();