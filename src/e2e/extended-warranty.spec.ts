// tests/extended-warranty.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Extended Warranty Dashboard', () => {
  test('navigation works', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Extended Warranty' }).click();
    await expect(page).toHaveURL('/warranty');
  });

  test('displays warranty cards with correct status and badges', async ({ page }) => {
    await page.goto('/warranty');

    const macbookCard = page.getByRole('heading', { name: 'MacBook Pro 16″ M2 Max' }).locator('..').locator('..');
    await expect(macbookCard.getByText('Active', { exact: true })).toBeVisible();
    await expect(macbookCard.getByText('Extended Until')).toBeVisible();

    const iphoneCard = page.getByRole('heading', { name: 'iPhone 15 Pro' }).locator('..').locator('..');
    await expect(iphoneCard.getByText('Expired', { exact: true })).toBeVisible();
    await expect(iphoneCard.getByText('This device is no longer under warranty')).toBeVisible();
  });

  test('shows properly formatted dates', async ({ page }) => {
    await page.goto('/warranty');
    await expect(page.getByText(/Jan \d{1,2}, 202\d/)).toHaveCount(5);
  });

  test('mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.getByRole('button', { name: 'Toggle navigation menu' }).click();
    await page.getByRole('link', { name: 'Extended Warranty' }).click();
    await expect(page).toHaveURL('/warranty');
  });

  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/warranty');
    await page.getByRole('button', { name: 'Toggle dark mode' }).click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});