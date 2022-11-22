/* eslint-disable quotes */
import { test, expect } from "@playwright/test";

test.use({ storageState: "storageState.json" });

test("should be able create a new member", async ({ page }) => {
  await page.goto("http://localhost:3000/app/dashboard");
  await page.getByRole("link", { name: "members" }).click();
  await page.locator('[data-testId="memberList-newMemberCreate"]').click();
  await page.locator('[data-testId="member-form-firstName"]').click();
  await page.locator('[data-testId="member-form-firstName"]').fill("Amogh");
  await page.locator('[data-testId="member-form-firstName"]').press("Tab");
  await page.locator('[data-testId="member-form-lastName"]').fill("Rijal");
  await page.locator('[data-testId="member-form-lastName"]').press("Tab");
  await page
    .locator('[data-testId="member-form-email"]')
    .fill("amrcdrc@gmail.com");
  await page.locator('[data-testId="member-form-email"]').press("Tab");
  await page.getByLabel("Centre").press("ArrowDown");
  await page.getByLabel("Centre").press("ArrowDown");
  await page.getByLabel("Centre").press("ArrowDown");
  await page.getByLabel("Centre").press("Enter");
  await page.getByLabel("Centre").press("Tab");
  await page.getByLabel("Is Member").press("Tab");
  await page.getByLabel("Active").press("Tab");
  await page.locator('[data-testId="member-form-submit"]').press("Enter");
  await page.waitForNavigation();
  expect(await page.locator(".notistack-SnackbarContainer").count()).toEqual(1);
  expect(
    await page.locator(".notistack-SnackbarContainer").textContent()
  ).toContain("successfully");
  expect(page.url()).toBe("http://localhost:3000/app/members");
});
