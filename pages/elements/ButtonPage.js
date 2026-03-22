const BasePage = require('../base/BasePage')

class ButtonPage extends BasePage {
    constructor(page) {
        super(page)

        // Navigation locator
        this.buttonMenu = "//span[text()='Buttons']"

        // Button locators — XPath matching framework style
        // #doubleClickBtn confirmed visible via Playwright MCP
        this.doubleClickBtn = "//button[@id='doubleClickBtn']"
        // #rightClickBtn confirmed visible via Playwright MCP
        this.rightClickBtn = "//button[@id='rightClickBtn']"
        // "Click Me" has no ID — matched by exact text, confirmed via Playwright MCP
        this.clickMeBtn = "//button[text()='Click Me']"

        // Output/message locators — rendered dynamically after each interaction
        this.doubleClickMessage = "#doubleClickMessage"
        this.rightClickMessage = "#rightClickMessage"
        this.dynamicClickMessage = "#dynamicClickMessage"
    }

    async openButtons() {
        await this.openElementsSection()
        await this.click(this.buttonMenu)
    }

    async performDoubleClick() {
        await this.page.locator(this.doubleClickBtn).dblclick()
    }

    async performRightClick() {
        await this.page.locator(this.rightClickBtn).click({ button: 'right' })
    }

    async performClick() {
        await this.click(this.clickMeBtn)
    }

    // Getter methods
    getDoubleClickMessage() {
        return this.page.locator(this.doubleClickMessage)
    }

    getRightClickMessage() {
        return this.page.locator(this.rightClickMessage)
    }

    getDynamicClickMessage() {
        return this.page.locator(this.dynamicClickMessage)
    }
}

module.exports = { ButtonPage }