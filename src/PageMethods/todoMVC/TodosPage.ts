import {getElement, keyboardEntry, multiClick} from '../PuppeteerActions'


export const identifiers = {
        todoInput : "#new-todo",
        todoEditText :"#edit",
        todoEditSelection:'//td-todos//ul[@class="todo-list style-scope td-todos"]/li[index]/div/label'
    }

const todoInputElement = async () => await getElement(identifiers.todoInput);
const todoEditTextElement = async() => await getElement(identifiers.todoEditText);

export const typeNewTodo = async (newTodoText:string) =>{
    await keyboardEntry(await todoInputElement(),newTodoText);
    await page.keyboard.press('Enter');
}

export const editTodo = async (todoIndexTopDown:string, newTodoText:string) => {
    let xpath:string = identifiers.todoEditSelection.replace('index',todoIndexTopDown);
    await multiClick(xpath,2);
    await keyboardEntry(todoEditTextElement,newTodoText)
    //await page.waitFor(5000);
}
        


