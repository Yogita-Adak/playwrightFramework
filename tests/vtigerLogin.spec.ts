
import { test, expect } from '@playwright/test';

test('vtiger invalid login', async ({ page }) => {
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill('admin')
  await page.locator("//input[@name='user_password']").fill('admin123') //wrong password will not login
  await page.locator("//input[@type='submit']").click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/vtiger CRM/); //title remains same before and after login.
  //we can put incorrect title if we want to fail the login test case by invalid creds
});

test('vtiger valid login', async ({ page }) => {
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill('admin')
  await page.locator("//input[@name='user_password']").fill('admin')
  await page.locator("//input[@type='submit']").click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/vtiger CRM/);
  await page.locator("//a[@href='index.php?module=Users&action=Logout']").click();

});

test('create new lead',async ({page})=> {
      await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill('admin')
  await page.locator("//input[@name='user_password']").fill('admin')
  await page.locator("//input[@type='submit']").click();
await page.locator("//a[@href='index.php?module=Leads&action=EditView&return_module=Leads&return_action=DetailView']").click();
await page.locator("//input[@name='lastname']").fill("Modi");
await page.locator("//input[@name='company']").fill('BJP');
await page.locator("//input[@value='T']").check();
await page.locator("//input[@value='  Save  ']").first().click();
await page.close();

});

test('select orange theme and search created lead ', async({page})=>{

  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill('admin')
  await page.locator("//input[@name='user_password']").fill('admin')
  const dropdown = page.locator("//select[@name='login_theme']"); //select orange theme
  await dropdown.selectOption({ value: 'orange' });
  await page.locator("//input[@type='submit']").click();
  await page.locator("//a[@href='index.php?module=Leads&action=index']").first().click();
  await page.locator("//input[@name='lastname']").first().fill("Modi");
  await page.locator("//input[@name='company']").nth(1).fill("BJP");
  await page.waitForTimeout(3000); //hard wait. static
  await page.locator("//input[@title='Search [Alt+Q]']").click();
  await page.waitForTimeout(3000);
  await page.close();
  
});


test('Delete created lead ', async({page})=>{

  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill('admin')
  await page.locator("//input[@name='user_password']").fill('admin')
  await page.locator("//input[@type='submit']").click();
 await page.locator("//a[@href='index.php?module=Leads&action=index']").first().click();
 await page.locator("//input[@name='lastname']").first().fill("Modi");
  await page.locator("//input[@name='company']").nth(1).fill("BJP");
await page.locator("//input[@title='Search [Alt+Q]']").click();
await page.locator("//input[@name='selected_id']").nth(0).check();
await page.locator("//input[@value='Delete']").click();
  
});


test.only('create lead with full info ', async({page})=>{

  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill('admin')
  await page.locator("//input[@name='user_password']").fill('admin')
  await page.locator("//input[@type='submit']").click();
 await page.locator("//a[@href='index.php?module=Leads&action=EditView&return_module=Leads&return_action=DetailView']").click();
  await page.locator("//select[@name='salutationtype']").selectOption({label: 'Mrs.'});
 await page.locator("//input[@name='lastname']").fill("Adak");
await page.locator("//input[@name='company']").fill('Sycamore');
await page.locator("//input[@name='designation']").fill("QA");
await page.locator("//select[@name='leadsource']").selectOption({label:'Employee'});
await page.locator("//select[@name='industry']").selectOption({label:'Engineering'});
await page.locator("//input[@name='annualrevenue']").fill("200 USD");
await page.locator("//input[@name='noofemployees']").fill("300000");
await page.locator("//input[@name='mobile']").fill("9078675643");
await page.locator("//select[@name='leadstatus']").selectOption({label:'Qualified'});
await page.locator("//input[@value='T']").check();
await page.locator("//input[@name='city']").fill("Delhi");
await page.locator("//input[@name='country']").fill("India");
await page.locator("//textarea[@name='description']").fill("My first automation script.Vtiger HRM system automation.Created new lead");
await page.locator("//input[@value='  Save  ']").nth(1).click();
});