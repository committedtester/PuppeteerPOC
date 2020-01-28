import BasePage from '../BasePage';
import PuppeteerActions from '../PuppeteerActions'
import {ElementType} from '../PuppeteerActions';

export default class MainPage extends BasePage{

    TodoURL= 'http://todomvc.com/';
    TodoURLPageTitle= 'TodoMVC';

    puppeteerActions = new PuppeteerActions;
    basePage = new BasePage();

    //polymerLink ="//div[@class='js-app-list']//a[text() = 'Polymer']";

    async polymerLinkElement() {return await this.puppeteerActions.GetXpathElement("//div[@class='js-app-list']//a[text() = 'Polymer']");}

    

    async clickPolymerLink(){
        await this.puppeteerActions.click(await this.polymerLinkElement());
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }

    async openTodo(){
        await this.loadURL(this.TodoURL);

    }

}