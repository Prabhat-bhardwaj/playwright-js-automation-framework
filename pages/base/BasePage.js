class BasePage {
  constructor(page) {
    this.page = page;
  }
  async click(locator) {
    await locator.click();
  }

  async fill(locator, value) {
    await locator.fill(value);
  }

  async removeAds() {
    await this.page.evaluate(() => {
      document.querySelectorAll('iframe[id*="google_ads_iframe"]')
        .forEach(el => el.remove());

      document.querySelectorAll('#fixedban')
        .forEach(el => el.remove());
    });
  }
}

module.exports = BasePage;