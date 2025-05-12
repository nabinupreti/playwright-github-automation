import { test } from "@playwright/test";
import { RepoPage } from "../pageObjects/RepoPage";
const testData = require("../fixtures/repoFixture.json");
const loginData = require("../fixtures/loginFixture.json");

test("Create new GitHub repository", async ({ page }) => {
  const repo = new RepoPage(page);

  await repo.createRepo(
    testData.repoData.repoName,
    testData.repoData.repoDescription
  );

  // await repo.deleteRepo(
  //   testData.repoData.repoName,
  //   loginData.validUser.password
  // );
});
