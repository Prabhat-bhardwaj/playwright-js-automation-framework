const {test, expect} = require('@playwright/test')
const { TextBoxPage } = require('../../pages/elements/TextBoxPage')

test("Text Box form submission", async ({page}) => {
    const textBoxPage = new TextBoxPage(page)

    await page.goto("https://demoqa.com")
    await textBoxPage.openTextBox()
    await textBoxPage.fillTextBoxForm("Prabhat", "test@gmail.com", "New Delhi", "Delhi Permanent")

    //No need to use directly in test class
    // await expect(page.locator('#output')).toContainText('Prabhat');
    // await expect(page.locator('#output')).toContainText('test@gmail.com');

    // 🔹 READ TEXT FROM UI
    const nameText = await textBoxPage.getOutputName().textContent();
    const emailText = await textBoxPage.getOutputEmail().textContent();

    // 🔹 PRINT IN TERMINAL
    console.log('Name displayed on UI:', nameText);
    console.log('Email displayed on UI:', emailText);

    //Assertions
    await expect(textBoxPage.getOutputBox()).toBeVisible()
    await expect(textBoxPage.getOutputName()).toHaveText('Name:Prabhat')
    await expect(textBoxPage.getOutputEmail()).toHaveText('Email:test@gmail.com')

})
