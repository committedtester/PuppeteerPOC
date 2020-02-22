import {getXpathElement,click} from '../../helperMethods/ElementActions'
import {loadURL} from '../../helperMethods/PuppeteerActions'
import {shouldNotExist} from '../../helperMethods/SelectorActions'


export const identifiers = {
    TodoURLPageTitle:'TodoMVC',
    TodoURL: 'http://todomvc.com/',
    Applist: ".app-lists",
    PolymerLink: "//div[@class='js-app-list']//a[text() = 'Polymer']"
}

const polymerLinkElement = async () => await getXpathElement(identifiers.PolymerLink);

export const loadTodoURL= async() =>{
    await loadURL(identifiers.TodoURL);
    await page.waitForSelector(identifiers.Applist);
}

export const clickPolymerLink = async() => {
    await click(await polymerLinkElement());
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await shouldNotExist(identifiers.Applist);
}
