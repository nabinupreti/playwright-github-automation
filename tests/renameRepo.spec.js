import { test, expect } from "@playwright/test";
import { RepoPage } from "../pageObjects/RepoPage";
const testData = require("../fixtures/repoFixture.json");

test.describe("Rename GitHub Repository", () => {
  test("Rename existing repo to new name", async ({ page }) => {
    const repo = new RepoPage(page);
    const oldRepo = testData.renameRepo.oldRepo;
    const newRepo = testData.renameRepo.newRepo;

    // Rename repo
    await repo.renameRepo(oldRepo, newRepo);

    // Verify final URL
    await expect(page).toHaveURL(`https://github.com/upretinabin/${newRepo}`);
  });
});