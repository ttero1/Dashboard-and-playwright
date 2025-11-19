// tests/site-health.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Site Health Monitoring Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/health');
  });

  test('has correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Site Health Monitoring' })).toBeVisible();
  });

  test('displays all health metrics with correct status', async ({ page }) => {
    const metrics = [
      { name: 'API Gateway', status: 'healthy' },
      { name: 'Database Cluster', status: 'healthy' },
      { name: 'Cache Layer', status: 'warning' },
      { name: 'Payment Processor', status: 'error' },
    ];

    for (const m of metrics) {
      const card = page.getByRole('heading', { name: m.name }).locator('..').locator('..');
      await expect(card.getByText(m.status, { exact: true }).first()).toBeVisible();
    }
  });

  test('shows recent timestamp on each card', async ({ page }) => {
    await expect(page.getByText('Last check:')).toBeVisible();
  });

  test('dark mode works', async ({ page }) => {
    await page.getByRole('button', { name: 'Toggle dark mode' }).click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});