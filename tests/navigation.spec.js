import { test, expect } from '@playwright/test';

/**
 * LogiLink Pro Navigation Test Suite
 * Created: 2024-12-19 23:00:00
 * Purpose: Test all navigation links and page functionality
 */
test.describe('LogiLink Pro Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('http://localhost:5173');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  test('should load dashboard page successfully', async ({ page }) => {
    // Check if dashboard loads
    await expect(page).toHaveURL('http://localhost:5173/');
    
    // Check for main dashboard elements
    await expect(page.locator('h2')).toContainText('Multi-Warehouse Command Center');
    
    // Check for warehouse filter
    await expect(page.locator('text=Warehouse View:')).toBeVisible();
    
    // Check for statistics cards
    await expect(page.locator('text=Total Inventory Value')).toBeVisible();
  });

  test('should navigate to TMS page successfully', async ({ page }) => {
    // Click on TMS menu item
    await page.click('text=Transportation (TMS)');
    
    // Wait for navigation
    await page.waitForURL('**/tms');
    
    // Check if TMS page loads correctly
    await expect(page).toHaveURL('http://localhost:5173/tms');
    
    // Check for TMS page elements
    await expect(page.locator('h2')).toContainText('Transportation Management System (TMS)');
    
    // Check for feature cards
    await expect(page.locator('text=Order Center')).toBeVisible();
    await expect(page.locator('text=Smart Dispatch Console')).toBeVisible();
    await expect(page.locator('text=Driver Mobile App')).toBeVisible();
    await expect(page.locator('text=Customer Tracking Portal')).toBeVisible();
  });

  test('should navigate to WMS page successfully', async ({ page }) => {
    // Click on WMS menu item
    await page.click('text=Warehousing (WMS)');
    
    // Wait for navigation
    await page.waitForURL('**/wms');
    
    // Check if WMS page loads correctly
    await expect(page).toHaveURL('http://localhost:5173/wms');
    
    // Check for WMS page elements
    await expect(page.locator('h2')).toContainText('Smart Warehouse Operations Blueprint');
    
    // Check for feature cards
    await expect(page.locator('text=Unified Multi-Warehouse Inventory')).toBeVisible();
    await expect(page.locator('text=Automated Inbound Process')).toBeVisible();
    await expect(page.locator('text=Optimized & Paperless Outbound')).toBeVisible();
    await expect(page.locator('text=Proactive Operations & Labor Management')).toBeVisible();
  });

  test('should navigate to Freight page successfully', async ({ page }) => {
    // Click on Freight menu item
    await page.click('text=Freight Forwarding');
    
    // Wait for navigation
    await page.waitForURL('**/freight');
    
    // Check if Freight page loads correctly
    await expect(page).toHaveURL('http://localhost:5173/freight');
    
    // Check for Freight page elements
    await expect(page.locator('h2')).toContainText('Freight Forwarding');
  });

  test('should navigate to Fleet page successfully', async ({ page }) => {
    // Click on Fleet menu item
    await page.click('text=Fleet Management');
    
    // Wait for navigation
    await page.waitForURL('**/fleet');
    
    // Check if Fleet page loads correctly
    await expect(page).toHaveURL('http://localhost:5173/fleet');
    
    // Check for Fleet page elements
    await expect(page.locator('h2')).toContainText('Fleet Management');
  });

  test('should navigate to CRM page successfully', async ({ page }) => {
    // Click on CRM menu item
    await page.click('text=CRM');
    
    // Wait for navigation
    await page.waitForURL('**/crm');
    
    // Check if CRM page loads correctly
    await expect(page).toHaveURL('http://localhost:5173/crm');
    
    // Check for CRM page elements
    await expect(page.locator('h2')).toContainText('Customer Relationship Management (CRM)');
  });

  test('should navigate to Billing page successfully', async ({ page }) => {
    // Click on Billing menu item
    await page.click('text=Billing');
    
    // Wait for navigation
    await page.waitForURL('**/billing');
    
    // Check if Billing page loads correctly
    await expect(page).toHaveURL('http://localhost:5173/billing');
    
    // Check for Billing page elements
    await expect(page.locator('h2')).toContainText('Billing & Financial Management');
  });

  test('should navigate to Settings page successfully', async ({ page }) => {
    // Click on Settings menu item
    await page.click('text=Settings');
    
    // Wait for navigation
    await page.waitForURL('**/settings');
    
    // Check if Settings page loads correctly
    await expect(page).toHaveURL('http://localhost:5173/settings');
    
    // Check for Settings page elements
    await expect(page.locator('h2')).toContainText('System Settings');
  });

  test('should handle browser back/forward navigation correctly', async ({ page }) => {
    // Navigate to TMS page
    await page.click('text=Transportation (TMS)');
    await page.waitForURL('**/tms');
    
    // Navigate to WMS page
    await page.click('text=Warehousing (WMS)');
    await page.waitForURL('**/wms');
    
    // Go back
    await page.goBack();
    await page.waitForURL('**/tms');
    await expect(page.locator('h2')).toContainText('Transportation Management System (TMS)');
    
    // Go back to dashboard
    await page.goBack();
    await page.waitForURL('**/');
    await expect(page.locator('h2')).toContainText('Multi-Warehouse Command Center');
    
    // Go forward
    await page.goForward();
    await page.waitForURL('**/tms');
    await expect(page.locator('h2')).toContainText('Transportation Management System (TMS)');
  });

  test('should handle direct URL access correctly', async ({ page }) => {
    // Test direct access to TMS page
    await page.goto('http://localhost:5173/tms');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h2')).toContainText('Transportation Management System (TMS)');
    
    // Test direct access to WMS page
    await page.goto('http://localhost:5173/wms');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h2')).toContainText('Smart Warehouse Operations Blueprint');
    
    // Test direct access to Freight page
    await page.goto('http://localhost:5173/freight');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h2')).toContainText('Freight Forwarding');
  });

  test('should handle invalid routes correctly', async ({ page }) => {
    // Try to access invalid route
    await page.goto('http://localhost:5173/invalid-route');
    await page.waitForLoadState('networkidle');
    
    // Should redirect to dashboard
    await expect(page).toHaveURL('http://localhost:5173/');
    await expect(page.locator('h2')).toContainText('Multi-Warehouse Command Center');
  });

  test('should maintain language context across navigation', async ({ page }) => {
    // Switch to Chinese
    await page.click('text=中文');
    await page.waitForTimeout(1000);
    
    // Navigate to TMS page
    await page.click('text=运输管理 (TMS)');
    await page.waitForURL('**/tms');
    
    // Check if Chinese text is displayed
    await expect(page.locator('h2')).toContainText('运输管理系统 (TMS)');
    
    // Navigate back to dashboard
    await page.click('text=仪表板');
    await page.waitForURL('**/');
    
    // Check if dashboard is still in Chinese
    await expect(page.locator('h2')).toContainText('多仓库指挥中心');
  });

  test('should test all navigation links in sequence', async ({ page }) => {
    const routes = [
      { name: 'Dashboard', path: '/', expectedTitle: 'Multi-Warehouse Command Center' },
      { name: 'TMS', path: '/tms', expectedTitle: 'Transportation Management System (TMS)' },
      { name: 'WMS', path: '/wms', expectedTitle: 'Smart Warehouse Operations Blueprint' },
      { name: 'Freight', path: '/freight', expectedTitle: 'Freight Forwarding' },
      { name: 'Fleet', path: '/fleet', expectedTitle: 'Fleet Management' },
      { name: 'CRM', path: '/crm', expectedTitle: 'Customer Relationship Management (CRM)' },
      { name: 'Billing', path: '/billing', expectedTitle: 'Billing & Financial Management' },
      { name: 'Settings', path: '/settings', expectedTitle: 'System Settings' }
    ];

    for (const route of routes) {
      // Navigate to the route
      await page.goto(`http://localhost:5173${route.path}`);
      await page.waitForLoadState('networkidle');
      
      // Check if page loads correctly
      await expect(page).toHaveURL(`http://localhost:5173${route.path}`);
      await expect(page.locator('h2')).toContainText(route.expectedTitle);
      
      console.log(`✅ ${route.name} page loaded successfully`);
    }
  });
});
