// class BasePage {
//   constructor(page) {
//     this.page = page;
//   }
//   async click(locator) {
//     await locator.click();
//   }

//   async fill(locator, value) {
//     await locator.fill(value);
//   }

//   async removeAds() {
//     await this.page.evaluate(() => {
//       document.querySelectorAll('iframe[id*="google_ads_iframe"]')
//         .forEach(el => el.remove());

//       document.querySelectorAll('#fixedban')
//         .forEach(el => el.remove());
//     });
//   }
// }

// module.exports = BasePage;

class BasePage {
  constructor(page) {
    this.page = page;

    // Common locator (can reuse in all pages)
    this.elementMenu = "//h5[text()='Elements']";
  }

  // ✅ Accept string OR locator
  async click(locator) {
    if (typeof locator === "string") {
      await this.page.locator(locator).click();
    } else {
      await locator.click();
    }
  }

  async fill(locator, value) {
    if (typeof locator === "string") {
      await this.page.locator(locator).fill(value);
    } else {
      await locator.fill(value);
    }
  }

  async removeAds() {
    await this.page.evaluate(() => {
      document.querySelectorAll('iframe[id*="google_ads_iframe"]')
        .forEach(el => el.remove());

      document.querySelectorAll('#fixedban')
        .forEach(el => el.remove());
    });
  }

  // ✅ Common reusable navigation
  async openElementsSection() {
    await this.removeAds();
    await this.click(this.elementMenu);
  }
}

module.exports = BasePage;