const BasePage = require('../base/BasePage')

class TextBoxPage extends BasePage{
    constructor(page){
        super(page)
        
        this.textBox = "//span[text()='Text Box']"
        this.fullName = "//input[@placeholder='Full Name']"
        this.email = "//input[@id='userEmail']"
        this.currentAddress = "//textarea[@placeholder='Current Address']"
        this.permanentAddress = "//textarea[@id='permanentAddress']"
        this.submit = "//button[@id='submit']"
        this.verifyTextBox = "//p[@id='name']"

        // Output locators
        this.outputBox = "//div[@id='output']"
        this.outputName = '#name'
        this.outputEmail = '#email'
    }

    async openTextBox(){
        await this.openElementsSection()
        await this.click(this.textBox)
    }

    async fillTextBoxForm(fname, emailId, currAddr, permAddr){
        await this.fill(this.fullName, fname)
        await this.fill(this.email, emailId)
        await this.fill(this.currentAddress, currAddr)
        await this.fill(this.permanentAddress, permAddr)
        await this.click(this.submit)
    }

    //Getter methods 
    getOutputBox(){
        return this.page.locator(this.outputBox)
    }
    
    getOutputName(){
        return this.page.locator(this.outputName)
    }

    getOutputEmail(){
        return this.page.locator(this.outputEmail)
    }
}

module.exports = { TextBoxPage };