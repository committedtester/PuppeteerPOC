import BasePage from '../BasePage';
import PuppeteerActions from '../PuppeteerActions'
import {ElementType} from '../PuppeteerActions';


export default class TodosPage extends BasePage{

    puppeteerActions = new PuppeteerActions;

    pageElements = {
        todoInput : this.puppeteerActions.GetElement("#new-todo"),
        todoEditText :"#edit"
    }
        
    // todoInput:Element =this.puppeteerActions.GetElement("#new-todo");
    // todoEditSelection =this.puppeteerActions.GetXpathElement('//td-todos//ul[@class="todo-list style-scope td-todos"]/li[index]/div/label');
    // todoEditText =this.puppeteerActions.GetElement("#edit");   

    async todoInputElement() {return await this.puppeteerActions.GetElement("#new-todo");}



    async typeNewTodo(newTodoText:string){
        await this.puppeteerActions.keyboardEntry(await this.todoInputElement(),newTodoText);
        await page.keyboard.press('Enter');
    }

    // async editTodo(todoIndexTopDown : string, newTodoText:string){
    //     let xpath:string = this.todoEditSelection.replace('index',todoIndexTopDown);
        
    //     await this.puppeteerActions.multiClick(ElementType.XPATH,xpath,2);

    //     await this.puppeteerActions.type(ElementType.NONXPATH,this.todoEditText,newTodoText)
    //     await page.waitFor(5000);
    // }
}

