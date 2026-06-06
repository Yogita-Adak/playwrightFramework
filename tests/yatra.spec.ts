import { test, expect } from '@playwright/test';

test('Flight ticket booking', async ({ page }) => {
  await page.goto('https://www.yatra.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Yatra.com/);
  await page.waitForTimeout(3000);
  await page.locator("#input-with-icon-adornment").fill('Pune');
  await page.waitForTimeout(3000);
  await page.locator("//div[contains(text(),'Lohegaon')]").first().click();
  await page.locator("#input-with-icon-adornment").fill('Indore');
  await page.locator("//div[contains(text(),'Devi Ahilya Bai Holkar ')]").click();
  await page.waitForTimeout(3000);
  await page.locator("//div[@aria-label='Departure Date inputbox']").click();
    await page.waitForTimeout(3000);
  await page.locator("//span[contains(text(),'25')]").nth(1).click();
    await page.waitForTimeout(3000);
  await page.locator("//div[@aria-label='Travellers class inputbox']").click();
    await page.waitForTimeout(3000);
  await page.getByRole('heading', { name: 'Business' });
    await page.waitForTimeout(3000);
  await page.locator("//li[@aria-label='Select age 1']").first().click();
    await page.waitForTimeout(3000);
  await page.locator("//button[contains(text(),'Done')]").click();
  await page.waitForTimeout(3000);
  await page.locator("//button[contains(text(),'Search')]").click();
    await page.waitForTimeout(3000);

  awaitawait page.locator("//button[text()='View Fares'][1]").click();
  // 
  page.close();


});
