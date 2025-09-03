import { test, expect } from '@playwright/test';

/**
 * Quick TMS Page Test
 * Created: 2024-12-19 23:15:00
 * Purpose: Quick test to verify TMS page is working
 */
test('TMS page should load correctly', async ({ page }) => {
  // Navigate directly to TMS page
  await page.goto('http://localhost:5173/tms');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Check if TMS page loads correctly
  await expect(page).toHaveURL('http://localhost:5173/tms');
  
  // Check for TMS page title
  await expect(page.locator('h2')).toContainText('Transportation Management System (TMS)');
  
  // Check for feature cards
  await expect(page.locator('text=Order Center')).toBeVisible();
  await expect(page.locator('text=Smart Dispatch Console')).toBeVisible();
  await expect(page.locator('text=Driver Mobile App')).toBeVisible();
  await expect(page.locator('text=Customer Tracking Portal')).toBeVisible();
  
  console.log('✅ TMS page is working correctly!');
});
