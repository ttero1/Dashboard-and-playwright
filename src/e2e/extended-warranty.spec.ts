// tests/extended-warranty.spec.ts
import { test, expect } from '@playwright/test';
import { mockWarranties } from '../mocks/mockApi';

test.describe('Extended Warranty Dashboard', () => {
  test('navigation works', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Extended Warranty' }).click();
    await expect(page).toHaveURL('/warranty');
  });

  test('displays warranty cards with correct data from mockApi', async ({ page }) => {
    await page.goto('/warranty');

    for (const warranty of mockWarranties) {
      const card = page.getByRole('heading', { name: warranty.product }).locator('..').locator('..');

      await expect(card).toBeVisible();
      await expect(card.getByText(warranty.product)).toBeVisible();

      // Status badge 
      const statusDisplay = warranty.status
        .replace('_', ' ')
        .replace(/\b\w/g, l => l.toUpperCase()); 
      await expect(card.getByText(statusDisplay, { exact: true })).toBeVisible();
      
      // Extended warranty text
      if (warranty.extended && warranty.extendedUntil) {
        await expect(card.getByText('Extended Until')).toBeVisible();
      }

      // Warning banner for expired
      if (warranty.status === 'expired') {
        await expect(card.getByText('This device is no longer under warranty')).toBeVisible();
      }
    }
  });

  test('shows properly formatted dates from mock data', async ({ page }) => {
    await page.goto('/warranty');

    const allDates = mockWarranties.flatMap(w => [
      w.purchaseDate,
      w.warrantyEndDate,
      w.extendedUntil,
    ].filter(Boolean));

    for (const isoDate of allDates) {
      const formatted = new Date(isoDate!).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      await expect(page.getByText(formatted)).toBeVisible();
    }
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