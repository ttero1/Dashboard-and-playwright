import { test, expect } from '@playwright/test';

test.describe('Site Health Monitoring', () => {
  test('displays health metrics with correct status colors', async ({ page }) => {
    await page.goto('/health');
    
    await expect(page.getByRole('heading', { name: 'Site Health Monitoring', level: 1 })).toBeVisible();
    await expect(page.locator('text=Payment Processor')).toBeVisible();
    await expect(page.locator('text=API Gateway')).toBeVisible();
    await expect(page.locator('text=Cache Layer')).toBeVisible();
  });
});