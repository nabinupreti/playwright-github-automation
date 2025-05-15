import { test, expect } from "@playwright/test";
import { RepoPage } from "../pageObjects/RepoPage";
const testData = require("../fixtures/repoFixture.json");

test.describe("Star GitHub Repository", () => {
  test("Star existing repo", async ({ page }) => {
    const repo = new RepoPage(page);
    const repoName = testData.repoData.repoName;

    // Rename repo
    await repo.starRepo(repoName);

  });
});
