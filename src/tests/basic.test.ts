import * as mainPage from '../PageMethods/todoMVC/MainPage'
import * as todosPage from '../Pagemethods/todoMVC/TodosPage';
import {loadURL} from '../PageMethods/PuppeteerActions'

describe('TodoMVC Test', () => {
      let TodoURL= 'http://todomvc.com/';

    beforeAll(async () => {
      jest.setTimeout(40000);
    })


    afterAll(async () => {  
      })
  
    it('Navigate to Polymer Page', async () => {
      await loadURL(TodoURL);
      await expect(page).toMatch(mainPage.identifiers.TodoURLPageTitle);       
      await mainPage.clickPolymerLink();
      expect(await page.title()).toMatch("Polymer • TodoMVC"); 
      await todosPage.typeNewTodo("First Todo");
      await todosPage.typeNewTodo("Second Todo");
      //await todosPage.editTodo("2","new text");
      

    })
  })
