import {getXpathElement,click} from '../PuppeteerActions'

export const identifiers = {
    TodoURLPageTitle:'TodoMVC',
    PolymerLink: "//div[@class='js-app-list']//a[text() = 'Polymer']"
}

const polymerLinkElement = async () => await getXpathElement(identifiers.PolymerLink);

export const clickPolymerLink = async() => {
    await click(await polymerLinkElement());
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
}
