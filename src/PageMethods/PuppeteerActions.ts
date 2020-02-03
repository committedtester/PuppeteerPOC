   export const wait = async (time:number) => await page.waitFor(time);

   export const getTitle = async () => await page.title();

   export const getUrl = async () => await page.url();

   export const loadURL = async (url:string) => await page.goto(url);
    
   export const getElement = async (elementText:string) => {
        await page.waitForSelector(elementText);
        let element= await page.$(elementText); 
        return element;
    }

    export const getXpathElement = async (elementText:string) => {
        await page.waitForXPath(elementText);
        const [xpathElement] = await page.$x(elementText);
        return xpathElement;
    }

    export const click = async (element) => element.click();         

    export const multiClick = async (element, clickCount:number) =>{
        await new Promise(x => setTimeout(x, 1000));
        await element.click({ clickCount: clickCount }) 
    }

    export const keyboardEntry = async (element, inputText:string) => await element.type(inputText); 
    
    export const getText = async (element) =>{
        return await page.evaluate(element => element.textContent, element);
    }
    
