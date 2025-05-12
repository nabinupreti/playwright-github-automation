import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObjects/LoginPage";
const testData = require("../fixtures/loginFixture.json");

test.describe("GitHub Login Tests", () => {
  test("Login with invalid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
      testData.invalidUser.userName,
      testData.invalidUser.password
    );
    await login.verifyInvalidLogin();
  });

  
  test("Login with valid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(testData.validUser.userName, testData.validUser.password);
    await login.verifyValidLogin();
    // await login.logout();
  });

});
