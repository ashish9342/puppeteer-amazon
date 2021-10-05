const puppeteer = require('puppeteer');
const CONFIG = require('./config');

(async () => {
    const { url, projectName } = CONFIG;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: `${projectName + '.png'}` });

    await browser.close();
})();