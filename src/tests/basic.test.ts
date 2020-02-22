import * as mainPage from '../PageMethods/todoMVC/MainPage'
import * as todosPage from '../Pagemethods/todoMVC/TodosPage';
import {loadURL} from '../helperMethods/PuppeteerActions'

describe('TodoMVC Test', () => {
     

    beforeAll(async () => {
      jest.setTimeout(40000);
      await page.setViewport({
        width: 1680,
        height: 1050
      })
      page.setDefaultTimeout(10000);
    })


    afterAll(async () => {  
      })
  
    it('Navigate to Polymer Page', async () => {
      await mainPage.loadTodoURL(); 
      await expect(page).toMatch(mainPage.identifiers.TodoURLPageTitle);       
      await mainPage.clickPolymerLink();
      expect(await page.title()).toMatch("Polymer • TodoMVC"); 
      await todosPage.typeNewTodo("First Todo");
      await todosPage.typeNewTodo("Second Todo");

      let updatedText="next text";
      await todosPage.editTodo(2,updatedText);
      await todosPage.waitForTodoText(updatedText);
      await page.screenshot({path: './screenshots/editedTodo.png'})

    })
  })
