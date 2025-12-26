const {test, expect } = require('@playwright/test')
const {RadioButtonPage} = require('../../pages/elements/RadioButtonPage') 

test("Radio Btn Functioning", async ({page}) => {

    const radioButtonPage = new RadioButtonPage(page)
    await page.goto("https://demoqa.com")
    await radioButtonPage.openRadioButton()
    await radioButtonPage.radioBtnSelection()

    const compText = await radioButtonPage.getVerifyActualText().textContent()
    const actText = await radioButtonPage.getVerifyActualText().textContent()

    console.log(compText, ": Complete Text");
    console.log(actText, ": Actual Text");

    await expect(radioButtonPage.getVerifyActualText()).toBeVisible()
    await expect(radioButtonPage.getVerifyActualText()).toHaveText("Impressive")
    
})