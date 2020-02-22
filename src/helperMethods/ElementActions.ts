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
    
    export const rightClick = async (element) => element.click({button: "right"})

    export const multiClick = async (element, clickCount:number) =>{
        await new Promise(x => setTimeout(x, 1000));
        await element.click({ clickCount: clickCount }) 
    }

    export const keyboardEntry = async (element, inputText:string) => await element.type(inputText); 
    
    export const getText = async (element) =>{
        return await page.evaluate(element => element.textContent, element);
    }
    
