import BasePage from '../PageMethods/Basepage';

export enum ElementType{
    NONXPATH,
    XPATH
}

export default class PuppeteerActions extends BasePage{
    async click (elementType:ElementType, selector:string, clickCount:number=1 ){

        if(elementType==ElementType.NONXPATH){
            try {
                await page.waitForSelector(selector);
                await new Promise(x => setTimeout(x, 1000));
                await page.click(selector,{ clickCount: clickCount });
         
             } catch (error) {
                 throw new error(`Could not click on NON XPATH selector: ${selector}`);         
             }
        }
        if (elementType==ElementType.XPATH){
            try {
                await page.waitForXPath(selector);
                const [xpathElement] = await page.$x(selector);
                await new Promise(x => setTimeout(x, 1000));
                await xpathElement.click({ clickCount: clickCount });
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
