import BasePage from '../BasePage';
import PuppeteerActions from '../PuppeteerActions'
import {ElementType} from '../PuppeteerActions';

export default class MainPage extends BasePage{

    TodoURL= 'http://todomvc.com/';
    TodoURLPageTitle= 'TodoMVC';

    polymerLink ="//div[@class='js-app-list']//a[text() = 'Polymer']";

    puppeteerActions = new PuppeteerActions;
    basePage = new BasePage();

    async clickPolymerLink(){
        await this.puppeteerActions.click(ElementType.XPATH,this.polymerLink);
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }

    async openTodo(){
        await this.loadURL(this.TodoURL);

    }

}