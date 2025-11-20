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

  test('displays all health metrics exactly as in mockApi', async ({ page }) => {
    for (const metric of mockHealth) {
      const card = page.getByRole('heading', { name: metric.name }).locator('..').locator('..');

      await expect(card).toBeVisible();
      await expect(card.getByText(metric.name)).toBeVisible();
      await expect(card.getByText(metric.value)).toBeVisible();

      // Status badge — your UI shows uppercase
      //const statusDisplay = metric.status.charAt(0).toUpperCase() + metric.status.slice(1);
      const status = card.locator('[role="status"]');
      await expect(status).toHaveText(metric.status);

      // Timestamp — just verify it exists (format is dynamic)
      await expect(card.getByText(/Last check:/).first()).toBeVisible();
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