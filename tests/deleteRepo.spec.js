import { test } from "@playwright/test";
import { RepoPage } from "../pageObjects/RepoPage";
const testData = require("../fixtures/repoFixture.json");
const loginData = require("../fixtures/loginFixture.json");

test("Delete an existing GitHub repository", async ({ page }) => {
  const repo = new RepoPage(page);

  await repo.deleteRepo(testData.repoData.repoName, loginData.validUser.password);
});
