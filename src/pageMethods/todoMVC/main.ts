const puppeteer = require ('../../nonPageMethods/puppeteerMethods.ts');


const polymerLink ="//div[@class='js-app-list']//a[text() = 'Polymer']";

module.exports ={
    clickPolymerLink: async function(){
        await puppeteer.click(puppeteer.ElementType.XPATH,polymerLink);
        await page.waitForNavigation();
    }

}