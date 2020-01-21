export default class BasePage {

async wait(time:number){
    await page.waitFor(time);
}

async getTitle(){
    return await page.title();
}

async getUrl(){
    return await page.url();
}

async loadURL(url:string){
    await page.goto(url);
}


}