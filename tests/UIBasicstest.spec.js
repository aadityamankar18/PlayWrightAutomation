const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async ({browser})=>
{
    //playwright code
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css
    await page.locator('#username').fill("rahulshetty");
    await page.locator("[type='password']").fill("Learning@");
    await page.locator("#signInBtn").click();
    //webDriverWait
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrecta");

     
});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    //get the title - assertion
    console.log(await page.title());
    await expect(page.tohaveTitle("Google"));

});

