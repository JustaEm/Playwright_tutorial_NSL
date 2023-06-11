const { test, expect } = require('@playwright/test');

//How to set Tracing programmatically

test.only('test demo', async({ page, context }) =＞ {
    await context.tracing.start({ snapshots: true, screenshots: true })
 // test code
 await context.tracing.stop({ path: 'test-trace.zip' });
});

let context;
let page;

test.beforeAll(async({ browser }) =＞ {
    context = await browser.newContext()
 await context.tracing.start({ screenshots: true, snapshots: true })
 page = await context.newPage()
})

test.afterAll(async() =＞ {
    await context.tracing.stop({ path: 'test-trace.zip' });
})