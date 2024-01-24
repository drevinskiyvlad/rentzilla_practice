import { browser } from '@wdio/globals'

export default class Page {
    public open (path: string) {
        return browser.url(`/${path}`)
    }

    public getElement (selector: string) {
        return $(selector);
    }

    public click(selector: string) {
        return this.getElement(selector).click();
    }
}
