import { browser } from '@wdio/globals'

export default class BasePage {
    public open (path: string) {
        return browser.url(`/${path}`);
    }

    public getElement (selector: string) {
        return $(selector);
    }

    public getAllElements (selector: string) {
        return $$(selector);
    }

    public verifyText (selector: string, text: string) {
        return expect(this.getElement(selector)).toHaveText(text);
    }

    public verifyElementText(element: WebdriverIO.Element, text: string) {
        return expect(element).toHaveText(text);
    }

    public click(selector: string) {
        return this.getElement(selector).click();
    }

    public verifyElement(selector: string) {
        return expect(this.getElement(selector)).toBeDisplayed();
    }

    public verifyUrl(path: string) {
        return expect(browser).toHaveUrl(expect.stringContaining(path));
    }

    public setValue(selector: string, value: string) {
        return this.getElement(selector).setValue(value);
    }

    public verifyElementBorderColor(selector: string, color: string) {
        return expect(this.getElement(selector)).toHaveStyle({'border-color': color});
    }

    public clearInputValue(selector: string) {
        return this.getElement(selector).setValue('');
    }

    public async handleAlert() {
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }
    }
}
