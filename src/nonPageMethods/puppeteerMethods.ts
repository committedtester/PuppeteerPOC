enum ElementType {   
    XPATH,
    CSS
}

module.exports = {

    ElementType:ElementType,

click : async function(elementType:ElementType, selector:string ){

if(elementType==ElementType.CSS){
    try {
        await page.waitForSelector(selector);
        await page.click(selector);
 
     } catch (error) {
         throw new error(`Could not click on CSS selector: ${selector}`);         
     }
}
if (elementType==ElementType.XPATH){
    try {
        await page.waitForXPath(selector);
        const [button] = await page.$x(selector);
        button.click();
    } catch (error) {
        throw new Error(`Could not click on the XPath: ${selector}`);
    }
}  

}
}