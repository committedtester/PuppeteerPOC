describe('TodoMVC Test', () => {
    beforeAll(async () => {
      
    })
  
    it('Navigate to Polymer Page', async () => {
      await page.goto('http://todomvc.com/')
      await expect(page).toMatch('TodoMVC')  
     
    })
  })