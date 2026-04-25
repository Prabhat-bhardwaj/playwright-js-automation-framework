const {test, expect} = require('@playwright/test')
const { WebTablePage } = require("../../pages/elements/WebTablePage")

test("Web Table form filling submission", async ({page}) => {
    const webTablePage = new WebTablePage(page);

    await page.goto("https://demoqa.com/");
    await webTablePage.openElementsSection();
    await webTablePage.clickWebTable();
    await webTablePage.addEntry("Prabhat", "Bhardwaj", "prabhat@gmail.com", "26", "50000", "QA Engineer");
    await webTablePage.clickSubmit();
});