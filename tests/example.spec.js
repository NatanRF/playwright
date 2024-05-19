// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach( async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');  
});

test('Login with sucess', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login with sucess 2', async ({ page }) => {
  await page.getByRole('button', { name: 'Send Mail' }).scrollIntoViewIfNeeded()
  await page.getByRole('button', { name: 'Send Mail' }).click()
});


