const { test, expect } = require('@playwright/test');


test('Login test - Practice site', async ({ page }) => {

  await page.goto('https://testpages.herokuapp.com/pages/forms/html-form/');


  await page.fill('input[name="username"]', 'Test');


  await page.fill('input[name="password"]', 'Test@123');

  await page.fill('//*[@id="HTMLFormElements"]/table/tbody/tr[3]/td/textarea', "This is my first JS Project")


  await page.click("//input[@value='cb1']");
  await page.click("//input[@value='rd1']");
  await page.click("//input[@type='submit']");



//   await expect(page).toHaveURL(/secure/);
//   await expect(page.locator('text=You logged into a secure area!')).toBeVisible();
});
