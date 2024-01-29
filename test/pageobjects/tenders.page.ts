import BasePage from "./base-page.ts";

const searchInput = 'input[placeholder=\'Пошук тендера за ключовими словами\']';

/**
 * TendersPage class that provides methods for interacting with the Tenders page.
 */
class TendersPage extends BasePage {

    /**
     * Verifies the URL and the presence of the search input on the page.
     */
    public verifyPage() {
        super.verifyUrl('tenders-map');
        return super.verifyElement(searchInput);
    }
}

export default new TendersPage();