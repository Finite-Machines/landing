import { expect, test } from "@playwright/test";

test("communicates the product and exposes the primary journey", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /Make every machine observable/i })).toBeVisible();
  await expect(page.getByText("Equipment intelligence for fabrication labs", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /Request a pilot/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /Your machines speak different languages/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Built for real lab networks/i })).toBeVisible();
});

test("switches between capability-aware machine views", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "CNC mill" }).click();
  await expect(page.getByRole("heading", { name: "Haas VF-2" })).toBeVisible();
  await expect(page.getByText("8,500 RPM")).toBeVisible();

  await page.getByRole("tab", { name: "Legacy mill" }).click();
  await expect(page.getByRole("heading", { name: "Bridgeport 01" })).toBeVisible();
  await expect(page.getByText("94%", { exact: true }).last()).toBeVisible();
});

test("mobile navigation opens and reaches the pilot form", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only behavior");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Request a pilot" }).click();
  await expect(page.getByRole("heading", { name: /Help us make your lab observable/i })).toBeVisible();
});
