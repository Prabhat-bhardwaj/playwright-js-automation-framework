const BasePage = require('../../pages/base/BasePage')

class CheckBoxPage extends BasePage {
    constructor(page){
        super(page)
        this.checkBox = "//span[text()='Check Box']"
        this.toggle1 = "//button[@title='Toggle']"
        this.docToggle = "(//button[contains(@class,'rct-collapse-btn')])[3]"
        this.offToggle = "(//button[contains(@class, 'rct-collapse-btn')])[5]"
        this.private = "//span[text()='Private']"

        this.verifyOutput = "#result"
        this.verifyFolder = "//span[@class='text-success']"
    }

    async openCheckBox(){
        await this.openElementsSection()
        await this.click(this.checkBox)
    }

    async clickToggleButtons(){
        await this.click(this.toggle1)
        await this.click(this.docToggle)
        await this.click(this.offToggle)
        await this.click(this.private)
    }

    getVerifyOutput(){
        return this.page.locator(this.verifyOutput)
    }

    getVerifyActualFolder(){
        return this.page.locator(this.verifyFolder)
    }

}


module.exports = { CheckBoxPage }