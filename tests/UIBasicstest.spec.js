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

test('UI Controls', async ({page})=>

{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const dropDown = page.locator("select.form-control");
    const documentLink = page.locator("[href*=documents-request]");

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

    await expect(documentLink).toHaveAttribute("class", "blinkingText");


    // await page.pause();


});

test.only("Child Windows Handling", async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*=documents-request]");

    const [newPage] = await Promise.all(
    [context.waitForEvent('page'),  //listens for the new page event
    documentLink.click(),

    ]) //opens in a new tab
    const text = await newPage.locator(".red").textContent();
    const arrayText =  text.split("@");
    const domain =arrayText[1].split(" ")[0];
    // console.log(domain);
    await page.locator('#username').fill(domain);
    console.log(await page.locator('#username').textContent());


    
     


});













