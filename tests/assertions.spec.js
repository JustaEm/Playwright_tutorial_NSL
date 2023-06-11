import { test, expect } from '@playwright/test'

test('Assertions demo test', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    //await page.pause()

    //Assertions:
    //Check the element is present or not
    //await page.getByRole('heading', { name: 'The Kitchen' })
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)

    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }

    //Check the element is visible or hidden
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //Check the element is enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()// Soft assertion will make the execution NOT stop if test fails on it

    //To have content text"
    await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD123')
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')

    //Check attribute value
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //To have URL/Title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    //Visual validation --> screenshot
    await expect(page).toHaveScreenshot()



})