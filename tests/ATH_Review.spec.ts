import { test, expect } from '@playwright/test';

test('Add review for ATH', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
  await page.locator("//textarea[@class='gLFyf']").fill('Automation Test Hub Review');
await page.locator("//input[@value='Google Search']").first().click();
await page.waitForTimeout(3000);
await page.locator("//h3[@id='_dprfaZTVGNzm1e8Pocjd4AY_122']").click();

});

