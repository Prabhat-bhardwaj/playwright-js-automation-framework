const { test, expect } = require('@playwright/test');
const { LinkPage } = require("../../pages/elements/LinkPage");

test("Link test", async ({ page }) => {

    // Optional (keep it)
    await page.route('**/*ads*', route => route.abort());
    await page.route('**/*google*', route => route.abort());

    const linkPage = new LinkPage(page);

    await page.goto("https://demoqa.com");
    await linkPage.clickOnElement();
    await page.waitForTimeout(1500);
    await linkPage.openLinkArea();
    await page.waitForTimeout(1500);
    await linkPage.clickHomeLink();
});