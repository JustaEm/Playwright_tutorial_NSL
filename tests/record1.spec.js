import { test, expect } from '@playwright/test';

test('Record demo 1', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button123"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});

/*Running in trace viewer:

npx playwright test tests/record1.spec.js --project=chromium --headed --trace on
or:
npx playwright show-trace ./test-results/record1-Record-demo-1-chromium-retry1/trace.zip
*/