class BasePage {
  constructor(page) {
    this.page = page;
    this.elementMenu = "//h5[text()='Elements']"
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }

  async fill(locator, value) {
    await this.page.locator(locator).fill(value);
  }

  async openElementsSection() {
    await this.click(this.elementMenu);
  }
}

module.exports = BasePage;
