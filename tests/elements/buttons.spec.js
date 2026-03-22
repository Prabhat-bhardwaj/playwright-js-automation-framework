const { test, expect } = require('@playwright/test')
const { ButtonPage } = require('../../pages/elements/ButtonPage')

test("Double click button functioning", async ({ page }) => {
    const buttonPage = new ButtonPage(page)

    await page.goto("https://demoqa.com")
    await buttonPage.openButtons()
    await buttonPage.performDoubleClick()

    await expect(buttonPage.getDoubleClickMessage()).toBeVisible()
    await expect(buttonPage.getDoubleClickMessage()).toHaveText("You have done a double click")
})

test("Right click button functioning", async ({ page }) => {
    const buttonPage = new ButtonPage(page)

    await page.goto("https://demoqa.com")
    await buttonPage.openButtons()
    await buttonPage.performRightClick()

    await expect(buttonPage.getRightClickMessage()).toBeVisible()
    await expect(buttonPage.getRightClickMessage()).toHaveText("You have done a right click")
})

test("Dynamic click button functioning", async ({ page }) => {
    const buttonPage = new ButtonPage(page)

    await page.goto("https://demoqa.com")
    await buttonPage.openButtons()
    await buttonPage.performClick()

    await expect(buttonPage.getDynamicClickMessage()).toBeVisible()
    await expect(buttonPage.getDynamicClickMessage()).toHaveText("You have done a dynamic click")
})