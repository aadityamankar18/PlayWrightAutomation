const {test} = require('@playwright/test');

test('First PlayWright Test', async ({browser})=> {
    //playwright code
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

});

test('Page PlayWright Test', async ({page})=> {
    //playwright code
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

});
