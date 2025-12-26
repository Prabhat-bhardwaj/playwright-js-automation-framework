const BasePage = require('../base/BasePage')

class RadioButtonPage extends BasePage{
    constructor(page){
    super(page)
    this.radioBtn = "//span[text()='Radio Button']"
    this.imprRadioBtn = "//label[text()='Impressive']"
   

    //output locators
    this.verifyText = "//p[@class='mt-3']"
    this.actualText = "//span[@class='text-success']"
    
    }
    async openRadioButton(){
        await this.openElementsSection()
        console.log("Element Click Completed");
        await this.click(this.radioBtn)
    }

    async radioBtnSelection(){
        await this.click(this.imprRadioBtn)
    }

    getVerifyOutput(){
        return this.page.locator(this.verifyText)
    }

    getVerifyActualText(){
        return this.page.locator(this.actualText)
    }
}

module.exports = { RadioButtonPage }