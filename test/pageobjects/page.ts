import { browser } from '@wdio/globals'

export default class Page {
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
}
