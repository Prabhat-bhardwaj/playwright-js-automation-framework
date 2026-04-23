const BasePage = require("../base/BasePage");

class LinkPage extends BasePage {
  constructor(page) {
    super(page);

    this.element = page.locator("//h5[text()='Elements']");
    this.link = page.locator("//span[text()='Links']");
    this.home = page.locator('#simpleLink');
  }

  async clickOnElement(){
    await this.click(this.element);
    // await this.removeAds();     //To handle iframe if adds will occurs
  
  }
  async openLinkArea() {
    // await this.removeAds(); 
    await this.click(this.link);
  }

  async clickHomeLink() {
    await this.click(this.home);
  }
}

module.exports = { LinkPage };