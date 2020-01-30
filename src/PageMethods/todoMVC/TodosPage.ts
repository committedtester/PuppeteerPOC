import PuppeteerActions from '../PuppeteerActions'
import {ElementType} from '../PuppeteerActions';


export default class TodosPage{

    todoInput ="#new-todo";
    todoEditSelection ='//td-todos//ul[@class="todo-list style-scope td-todos"]/li[index]/div/label';
    puppeteerActions = new PuppeteerActions;

    async typeNewTodo(newTodoText:string){
        await this.puppeteerActions.type(ElementType.NONXPATH,this.todoInput,newTodoText);
        await page.keyboard.press('Enter');
    }

    async editTodo(todoIndex:number, updatedTodoText:string){
        const xpath:string = this.todoEditSelection.replace('index',todoIndex.toString());
        await this.puppeteerActions.click(ElementType.XPATH,xpath,2);       
 
        let text:string= await this.puppeteerActions.getText(ElementType.XPATH,xpath);

        const [xpathElement] = await page.$x(xpath);
        await xpathElement.focus();

        for (let index = 0; index < text.length; index++) {
            await page.keyboard.press("Backspace");           
        }
        await this.puppeteerActions.type(ElementType.XPATH,xpath,updatedTodoText);
    }
}

