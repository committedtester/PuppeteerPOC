import BasePage from '../BasePage';
import PuppeteerActions from '../PuppeteerActions'
import {ElementType} from '../PuppeteerActions';


export default class TodosPage extends BasePage{

    todoInput ="#new-todo";
    todoEditSelection ='//td-todos//ul[@class="todo-list style-scope td-todos"]/li[index]/div/label';
    puppeteerActions = new PuppeteerActions;

    async typeNewTodo(newTodoText:string){
        await this.puppeteerActions.type(ElementType.NONXPATH,this.todoInput,newTodoText);
        await page.keyboard.press('Enter');
    }

    async editTodo(todoIndex:number, updatedTodoText:string){
        let xpath:string = this.todoEditSelection.replace('index',todoIndex.toString());
        await this.puppeteerActions.click(ElementType.XPATH,xpath,2);

        const xpathElement = await page.$x(xpath);
        let text = await xpathElement[0].getProperty('textContent');
        
        await this.puppeteerActions.type(ElementType.XPATH,xpath,"updatedTodoText");
    }
}

