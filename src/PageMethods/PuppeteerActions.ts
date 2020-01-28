import BasePage from '../PageMethods/Basepage';
import ElementHandle from 'puppeteer'; 

export enum ElementType{
    NONXPATH,
    XPATH
}

export default class PuppeteerActions extends BasePage{

    async GetElement(elementText:string){
        await page.waitForSelector(elementText);
        let element= await page.$(elementText);        
        return element;
    }

    async GetXpathElement(elementText:string){
        await page.waitForXPath(elementText);
        const xpathElement = await page.$x(elementText);
        if (xpathElement==null){
            fail("Element Not Found");
        }
        return xpathElement;
    }

    async click (element){
            try {
                element.click();         
             } catch (error) {
                 throw new error(`Could not click ${element}`);         
             }
        }
       
        async multiClick (element, clickCount:number)
            {
                try {
                    await new Promise(x => setTimeout(x, 1000));
                    await element.click({ clickCount: clickCount })        
                 } catch (error) {
                     throw new error(`Could not click ${element}`);         
                 }
            }

        async keyboardEntry (element, inputText:string){
            try{
                await element.press(inputText);
            } 
            catch (error) {
                throw new error(`Could not type text into element: ${element}`);         
            }            
        }        
        
        
        async getText (elementType:ElementType, selector: string){
            if(elementType==ElementType.NONXPATH){
                try {
                    return page.$eval(selector, e => e.innerHTML)
                }
                    catch (error) {
                        throw new error(`Could not get text from NON XPATH selector: ${selector}`);         
                    }
        }
    }
}
