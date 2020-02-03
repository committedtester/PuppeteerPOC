import {getElement, keyboardEntry, multiClick, getXpathElement,getXpathText} from '../PuppeteerActions'


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

export const editTodo = async (todoIndex:number, updatedTodoText:string) =>{
    const xpath:string = identifiers.todoEditSelection.replace('index',todoIndex.toString());
    const xpathElement = await getXpathElement(xpath);
    await multiClick(xpathElement,2);       

    let text:string= await getXpathText(xpath);
    await xpathElement.focus();

    for (let index = 0; index < text.length; index++) {
        await page.keyboard.press("Backspace");           
    }
    await keyboardEntry(xpathElement,updatedTodoText);
    await page.keyboard.press('Enter');
}       


