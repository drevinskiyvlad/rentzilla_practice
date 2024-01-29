import {browser} from '@wdio/globals'

/**
 * BasePage class that provides common methods for interacting with web pages.
 */
export default class BasePage {
    /**
     * Opens a new URL.
     * @param {string} path - The path to append to the base URL.
     */
    public open(path: string) {
        return browser.url(`/${path}`);
    }

    /**
     * Returns a single element matching the given selector.
     * @param {string} selector - The selector to search for.
     * @returns The first matching element.
     */
    public getElement(selector: string) {
        return $(selector);
    }

    /**
     * Returns all elements matching the given selector.
     * @param {string} selector - The selector to search for.
     * @returns All matching elements.
     */
    public getAllElements(selector: string) {
        return $$(selector);
    }

    /**
     * Verifies the text of the element matching the given selector.
     * @param {string} selector - The selector to search for.
     * @param {string} text - The text to verify.
     */
    public verifyText(selector: string, text: string) {
        return expect(this.getElement(selector)).toHaveText(text);
    }

    /**
     * Verifies the text of the given element.
     * @param {WebdriverIO.Element} element - The element to verify.
     * @param {string} text - The text to verify.
     */
    public verifyElementText(element: WebdriverIO.Element, text: string) {
        return expect(element).toHaveText(text);
    }

    /**
     * Clicks on the element matching the given selector.
     * @param {string} selector - The selector to search for.
     */
    public click(selector: string) {
        return this.getElement(selector).click();
    }

    /**
     * Verifies that the element matching the given selector is displayed.
     * @param {string} selector - The selector to search for.
     */
    public verifyElement(selector: string) {
        return expect(this.getElement(selector)).toBeDisplayed();
    }

    /**
     * Verifies that the element matching the given selector is not displayed.
     * @param {string} selector - The selector to search for.
     */
    public verifyElementNotDisplayed(selector: string) {
        return expect(this.getElement(selector)).not.toBeDisplayed();
    }

    /**
     * Verifies that the current URL contains the given path.
     * @param {string} path - The path to search for in the URL.
     */
    public verifyUrl(path: string) {
        return expect(browser).toHaveUrl(expect.stringContaining(path));
    }

    /**
     * Sets the value of the element matching the given selector.
     * @param {string} selector - The selector to search for.
     * @param {string} value - The value to set.
     */
    public setValue(selector: string, value: string) {
        return this.getElement(selector).setValue(value);
    }

    /**
     * Checks if the element matching the given selector is displayed.
     * @param {string} selector - The selector to search for.
     * @returns True if the element is displayed, false otherwise.
     */
    public isElementDisplayed(selector: string) {
        return this.getElement(selector).isDisplayed();
    }

    /**
     * Verifies the border color of the element matching the given selector.
     * @param {string} selector - The selector to search for.
     * @param {string} color - The color to verify.
     */
    public verifyElementBorderColor(selector: string, color: string) {
        return expect(this.getElement(selector)).toHaveStyle({'border-color': color});
    }

    /**
     * Clears the input value of the element matching the given selector.
     * @param {string} selector - The selector to search for.
     */
    public clearInputValue(selector: string) {
        return this.getElement(selector).setValue('');
    }

    /**
     * Handles an alert if one is open.
     */
    public async handleAlert() {
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }
    }

    /**
     * Simulates the pressing of the Enter key.
     */
    public async clickEnter() {
        await browser.keys('Enter');
    }
}