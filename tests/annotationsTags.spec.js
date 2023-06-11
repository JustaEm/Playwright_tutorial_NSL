import { test } from '@playwright/test'

test.skip('Test SKIP', async ({ page }) => {

})

test('Test FAIL', async ({ page }) => {
    test.fail();

})

test.fixme('Test FIXME', async ({ page }) => {

})

test('Test SLOW', async ({ page }) => {
    test.slow();

})

//Tags:
test('Test login page @smoke', async ({ page }) => {
    //terminal: add the flag --grep "@smoke"
})