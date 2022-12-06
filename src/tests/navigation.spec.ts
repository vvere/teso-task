import { test, expect } from '@playwright/test';

test('App has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/Teso Task/);
});

test.describe('App links works', () => {
  test('login link works', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const getLogin = page.getByRole('link', { name: 'Login' });

    await expect(getLogin).toHaveAttribute('href', '/login');

    await getLogin.click();

    await expect(page).toHaveURL(/.*login/);
  });

  test('login and server-list link work', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.getByPlaceholder('User name').fill('tesonet');
    await page.getByPlaceholder('Password').fill('partyanimal');
    await page.getByRole('button', { name: 'Login' }).click();

    const getServers = page.getByRole('link', { name: 'Servers' });

    await expect(getServers).toHaveAttribute('href', '/server-list');

    await getServers.click();

    await expect(page).toHaveURL(/.*server-list/);
  });
});
