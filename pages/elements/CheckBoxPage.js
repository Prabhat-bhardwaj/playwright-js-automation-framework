const BasePage = require('../../pages/base/BasePage')

class CheckBoxPage extends BasePage {
    constructor(page){
        super(page)
        this.element = "//h5[text()='Elements']"
        this.checkBox = "//span[text()='Check Box']"
        this.toggle1 = "//span[@class='rc-tree-switcher rc-tree-switcher_close']"
        this.docToggle = "(//span[@class='rc-tree-switcher rc-tree-switcher_close'])[2]"
        this.offToggle = "(//span[@class='rc-tree-switcher rc-tree-switcher_close'])[3]"
        this.private = "//span[@aria-label='Select Private']"

        this.verifyOutput = "#result"
        this.verifyFolder = "//span[@class='text-success']"
    }

    async openCheckBox(){
        await this.click(this.element)
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