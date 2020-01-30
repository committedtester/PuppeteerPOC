import MainPage from '../PageMethods/todoMVC/MainPage'
import TodosPage from '../Pagemethods/todoMVC/TodosPage';

describe('TodoMVC Test', () => {
      let mainPage;
      let todosPage;

    beforeAll(async () => {
      jest.setTimeout(20000);
      mainPage = new MainPage();
      todosPage = new TodosPage();       
    })


    afterAll(async () => {
  
      })
  
    it('Navigate to Polymer Page', async () => {
      await mainPage.openTodo();
      await expect(page).toMatch(mainPage.TodoURLPageTitle);       
      await mainPage.clickPolymerLink();
      expect(await page.title()).toMatch("Polymer • TodoMVC"); 
      await todosPage.typeNewTodo("First Todo");
      await todosPage.typeNewTodo("Second Todo");
      await todosPage.editTodo(2,"updatedTodo");
      await page.screenshot({path: './screenshots/editedTodo.png'});

    })
  })
