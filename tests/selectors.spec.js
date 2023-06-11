import { test, expect } from '@playwright/test'

test('Selectors Demo', async ({ page }) => {

    await page.goto('https://saucedemo.com')


    //using any object's property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator('[id="user-name"]').fill('Eisntein')

    //using CSS selector (right-click > copy selector)
    await page.locator('#login-button').click()

    await page.pause() //will open the playwright inspector window

    //using Xpath:
    await page.locator('//input[@id="user-name"]').fill('Faraday')

    //using text:
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()


})