    export const getCount = async (selector) =>{
        await page.waitForSelector(selector);
        return await page.$$eval(selector, list =>list.length);
    }

    export const waitForText = async (selector,text)=>{
        await page.waitForSelector(selector);
        await page.waitForFunction(
        (selector,text) =>
        document.querySelector(selector).innerText.includes(text),
        {},
        selector,
        text
        )
    }

    export const shouldExist = async(selector)=>{
        await page.waitForSelector(selector);
    }

    export const shouldNotExist = async(selector)=>{
        await page.waitFor(selector,{hidden:true})
    }