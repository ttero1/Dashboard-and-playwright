import { test, expect } from '@playwright/test';

test.describe('Extended Warranty Flow', () => {
  test('user can view warranty status and see expiring warning', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Extended Warranty');
    await page.waitForURL('**/warranty');

    // Use a more specific selector - look for h1 with this exact text
    await expect(page.getByRole('heading', { name: 'Extended Warranty Status', level: 1 })).toBeVisible();
    await expect(page.locator('text=MacBook Pro')).toBeVisible();
    await expect(page.locator('text=EXPIRING SOON')).toBeVisible();
    await expect(page.locator('text=Extended until')).toBeVisible();
  });
});