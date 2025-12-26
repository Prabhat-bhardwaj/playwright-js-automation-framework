const {test, expect} = require('@playwright/test')
const { CheckBoxPage } = require('../../pages/elements/CheckBoxPage')

test("Check box selection", async ({page}) => {
    const checkBoxPage = new CheckBoxPage(page)

    await page.goto("https://demoqa.com");
    await checkBoxPage.openCheckBox();
    await checkBoxPage.clickToggleButtons();

    await expect(checkBoxPage.getVerifyOutput()).toBeVisible()
    await expect(checkBoxPage.getVerifyActualFolder()).toHaveText('private')
});