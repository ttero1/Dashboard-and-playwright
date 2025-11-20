// tests/site-health.spec.ts
import { test, expect } from '@playwright/test';
import { mockHealth } from '../mocks/mockApi';

test.describe('Site Health Monitoring Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/health');
  });

  test('has correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Site Health Monitoring' })).toBeVisible();
  });

  test('displays all health metrics as in mockApi', async ({ page }) => {
    for (const metric of mockHealth) {
      // Find the specific card 
      const card = page
        .locator('div.rounded-2xl.border')
        .filter({ has: page.getByRole('heading', { name: metric.name, exact: true }) })
        .first();
      
      await expect(card).toBeVisible();
      
      // Verify the metric name
      await expect(card.getByRole('heading', { name: metric.name, exact: true })).toBeVisible();
      
      // Verify the metric value
      await expect(card.getByText(metric.value, { exact: true })).toBeVisible();
      
      // Status badge 
      const status = card.locator('span[role="status"]');
      await expect(status).toHaveText(metric.status);
      
      // Timestamp 
      await expect(card.getByText(/Last check:/)).toBeVisible();
    }
  });

  test('shows at least one recent timestamp', async ({ page }) => {
    await expect(page.getByText(/Last check:/).first()).toBeVisible();
  });

  test('dark mode works', async ({ page }) => {
    await page.getByRole('button', { name: 'Toggle dark mode' }).click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});