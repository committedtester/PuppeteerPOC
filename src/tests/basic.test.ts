const config =require('../pageMethods/todoMVC/config.ts');
const mainPage = require ('../pageMethods/todoMVC/main.ts')

describe('TodoMVC Test', () => {
    beforeAll(async () => {
      
    })
  
    it('Navigate to Polymer Page', async () => {
      await page.goto(config.baseURL);
      await expect(page).toMatch(config.baseURLPageTitle); 
      
      await mainPage.clickPolymerLink();
      expect(await page.title()).toMatch("Polymer • TodoMVC"); 
    })
  })
