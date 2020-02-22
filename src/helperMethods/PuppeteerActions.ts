   export const wait = async (time:number) => await page.waitFor(time);

   export const getTitle = async () => await page.title();

   export const getUrl = async () => await page.url();

   export const loadURL = async (url:string) => await page.goto(url);
  
