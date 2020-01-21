import BasePage from '../PageMethods/Basepage';

export enum ElementType{
    NONXPATH,
    XPATH
}

export default class PuppeteerActions extends BasePage{
    async click (elementType:ElementType, selector:string ){

        if(elementType==ElementType.NONXPATH){
            try {
                await page.waitForSelector(selector);
                await page.click(selector);
         
             } catch (error) {
                 throw new error(`Could not click on NON XPATH selector: ${selector}`);         
             }
        }
        if (elementType==ElementType.XPATH){
            try {
                await page.waitForXPath(selector);
                const [xpathElement] = await page.$x(selector);
                await xpathElement.click();
            } catch (error) {
                throw new Error(`Could not click on the XPath: ${selector}`);
            }
        }  
        }
        
        async type(elementType:ElementType, selector: string, inputText:string){
            if(elementType==ElementType.NONXPATH){
                try {
                    await page.waitForSelector(selector);
                    await page.type(selector,inputText);
             
                 } catch (error) {
                     throw new error(`Could not type text into NON XPATH selector: ${selector}`);         
                 }
            }
            if (elementType==ElementType.XPATH){
                try {
                    await page.waitForXPath(selector);
                    const [xpathElement] = await page.$x(selector);
                    await xpathElement.type(inputText);
                } catch (error) {
                    throw new Error(`Could not type text into XPath selector: ${selector}`);
                }
            }  
        }
}
