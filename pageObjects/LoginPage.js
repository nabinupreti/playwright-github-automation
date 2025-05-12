const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[name="login"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'input[type="submit"]';
    this.userMenu = '[aria-label="Open user navigation menu"]';
    this.logoutButton = 'button[data-testid="sign-out-menu-item"]';
    this.logoutConfirmButton = 'button[type="submit"]:has-text("Sign out")';
    this.alertMessage = "#js-flash-container .flash-error";
  }

  async gotoLoginPage() {
    await this.page.goto("https://github.com/login");
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
    await this.page.waitForTimeout(2000);
  }

  async verifyValidLogin() {
    await page.waitForURL("https://github.com/");
    await expect(this.page.locator(this.userMenu)).toBeVisible();
    
  }

  async verifyInvalidLogin() {
    await expect(this.page.locator(this.alertMessage)).toContainText(
      "Incorrect username or password."
    );
  }

  async logout() {
    await this.page.locator(this.userMenu).click();
    await this.page.getByLabel("Sign out").click();
    await this.page
      .getByRole("button", { name: "Sign out", exact: true })
      .click();
  }
};
