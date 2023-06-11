import { test, expect } from '@playwright/test'

test('Demo Login Test1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    //await page.pause()
    await page.getByPlaceholder('Enter your username').fill('Justyna')
    await page.getByPlaceholder('Enter your password').fill('1234')
    await page.waitForSelector('text=Sign in', { timeout: 5000 })
    await page.getByRole('link', { name: 'Sign in' }).click()

})

test('Demo Login Test2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await page.pause()
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

})

test.only('Demo Login Test3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login')
    //await page.pause()
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').fill('admin@yourstore.com');

    await page.getByLabel('Password:').click();

    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();


})