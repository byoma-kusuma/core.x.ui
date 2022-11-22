/* eslint-disable quotes */
import { chromium } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/login");
  await page.locator('[data-testId="login-username"]').click();
  await page
    .locator('[data-testId="login-username"]')
    .fill(process.env.LOGIN_USER as string);
  await page.locator('[data-testId="login-username"]').press("Tab");
  await page
    .locator('[data-testId="login-password"]')
    .fill(process.env.LOGIN_PASS as string);
  await page.locator('[data-testId="login-password"]').press("Enter");
  await page.locator('[data-testId="navigation-profilePicture-menu"]').click();

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
