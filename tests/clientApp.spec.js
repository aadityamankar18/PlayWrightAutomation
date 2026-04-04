const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async ({page})=>
{
    //playwright code
    const userName = page.locator("[id='userEmail']");
    const passWard = page.locator("[id='userPassword']");
    const signIn = page.locator("[id='login']");
    const cardName = page.locator(".card-body b");


    await page.goto("https://rahulshettyacademy.com/client");
    await userName.fill("aadityamankar18@gmail.com");
    await passWard.fill("Aaditya@123");
    await signIn.click();
    await page.waitForLoadState("networkidle");  // sometimes it's flicky
    // await page.locator(".card-body b").first().waitFor();     //then use this

    const allTitles = await cardName.allTextContents();
    console.log(allTitles);

    
});

