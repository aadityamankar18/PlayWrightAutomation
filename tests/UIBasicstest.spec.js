const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=>
{
    //playwright code
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css
    await userName.fill("rahulshetty");
    await passWord.fill("Learning@830$3mK2");
    await signIn.click();
    //webDriverWait
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTiles = await cardTitles.allTextContents()
    console.log(allTiles);


});

test.only('UI Controls', async ({page})=>

{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const dropDown = page.locator("select.form-control");

    await userName.fill("rahulshettyacademy");
    await passWord.fill("Learning@830$3mK2");                           
    await dropDown.selectOption("consult");
    await signIn.click();

    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();

    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();


    // await page.pause();


});

