const {test, expect} = require('@playwright/test')

test("Verify Google Title", async function ({page}) {
   await page.goto("https://demoqa.com/")

//    await page.getByPlaceholder("Username").fill("Admin")
//    await page.locator("//input[@name='password']").fill("admin@123")
//    await page.locator("//button[@type='submit']").click()
//    await expect(page).toHaveURL(/dashboard/);
})
