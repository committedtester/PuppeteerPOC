import BasePage from '../BasePage';
import PuppeteerActions from '../PuppeteerActions'
import {ElementType} from '../PuppeteerActions';


export default class TodosPage extends BasePage{

    todoInput ="#new-todo";
    puppeteerActions = new PuppeteerActions;

    async typeNewTodo(newTodoText:string){
        await this.puppeteerActions.type(ElementType.NONXPATH,this.todoInput,newTodoText);
        await page.keyboard.press('Enter');
    }
}

