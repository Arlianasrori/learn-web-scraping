import puppeteer from "puppeteer"

let browser;
let page;
const init = async () => {
     browser = await puppeteer.launch({headless : false})
     page = await browser.newPage()
}
init()