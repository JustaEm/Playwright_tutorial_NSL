const { test, expect } = require('@playwright/test')

/*const { hello, helloWorld } = require('./demo/hello')
import { hello, helloWorld } from './demo/hello'
console.log(hello());
console.log(helloWorld());

run this command in the terminal to print to output of the function: 
node ./tests/firstTest.spec.js 
*/

test('First test', async ({ page }) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

})
