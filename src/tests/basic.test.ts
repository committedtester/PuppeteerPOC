const config =require('../pageMethods/todoMVC/config.ts');
const clickXpath = require ('../nonPageMethods/puppeteerMethods.ts').clickXpath;

describe('TodoMVC Test', () => {
    beforeAll(async () => {
      
    })
  
    it('Navigate to Polymer Page', async () => {
      await page.goto(config.baseURL);
      await expect(page).toMatch(config.baseURLPageTitle); 

      const polymerLink = "//div[@class='js-app-list']//a[text() = 'Polymer']";
      await page.waitForXPath(polymerLink)
      const [link] = await page.$x(polymerLink);
      await link.click();
      await page.waitForNavigation();
      expect(await page.title()).toMatch("Polymer • TodoMVC"); 

      
    })
  })
