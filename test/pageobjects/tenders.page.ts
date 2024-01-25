import BasePage from "./base-page.ts";

const searchInput = 'input[placeholder=\'Пошук тендера за ключовими словами\']';

class TendersPage extends BasePage{

    public verifyPage(){
        super.verifyUrl('tenders-map');
        return super.verifyElement(searchInput);
    }
}

export default new TendersPage();