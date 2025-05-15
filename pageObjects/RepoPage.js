const { expect } = require("@playwright/test");

exports.RepoPage = class RepoPage {
  constructor(page) {
    this.page = page;
    this.repoNameInput = this.page.getByLabel("Repository name*");
    this.repoDescInput = this.page.getByLabel("Description");
    this.createRepoBtn = this.page.getByRole("button", {
      name: "Create repository",
    });
  }

  async createRepo(repoName, description) {
    await this.page.goto("https://github.com/new");
    await this.page.waitForTimeout(500); // Wait for the page to load
    await this.repoNameInput.fill(repoName);
    await this.repoDescInput.fill(description);
    await this.createRepoBtn.click();
    await this.page.waitForTimeout(2000); // Wait for the page to load
    await expect(this.page).toHaveURL(
      `https://github.com/upretinabin/${repoName}`
    );
  }

  async deleteRepo(repoName, password) {
    const username = "upretinabin";
    const fullRepo = `${username}/${repoName}`;

    // Navigate to repo settings
    await this.page.goto(`https://github.com/${fullRepo}/settings`);
    await this.page.waitForTimeout(1000);

    // Delete confirmation steps
    await this.page
      .getByRole("button", { name: "Delete this repository" })
      .click();
    await this.page
      .getByRole("button", { name: "I want to delete this" })
      .click();
    await this.page
      .getByRole("button", { name: "I have read and understand" })
      .click();
    await this.page.getByLabel(`To confirm, type "${username}`).fill(fullRepo);
    await this.page
      .getByLabel(`Delete ${fullRepo}`)
      .getByRole("button", { name: "Delete this repository" })
      .click();

    // Check if password confirmation is needed
    const passwordInput = this.page.locator('xpath=//*[@id="sudo_password"]');
    if (await passwordInput.isVisible({ timeout: 2000 })) {
      await passwordInput.fill(password);
      await this.page
        .locator(
          'xpath=//*[@id="sudo"]/sudo-credential-options/div[2]/form/div/div/button'
        )
        .click();
    }

    // Verify redirection to repo list
    await expect(this.page).toHaveURL(
      `https://github.com/${username}?tab=repositories`
    );
  }

  async renameRepo(oldRepo, newRepo) {
    const username = "upretinabin"; // Or get from login fixture
    await this.page.goto(`https://github.com/${username}/${oldRepo}/settings`);
    await this.page.waitForTimeout(2000);

    const repoNameInput = this.page.locator("#rename-field");
    await repoNameInput.fill(newRepo);

    await this.page.getByRole("button", { name: "Rename" }).click();
    await this.page.waitForTimeout(2000); // Wait for the page to load

    // Assertion: Confirm URL updated
    await this.page.waitForURL(`https://github.com/${username}/${newRepo}`);
  }

  async starRepo(repoName) {
    const username = "upretinabin"; 
    const fullRepo = `${username}/${repoName}`;
    await this.page.goto(`https://github.com/${fullRepo}`);
    await this.page.waitForTimeout(2000); // Wait for the page to load
    await this.page
      .getByRole("button", { name: "Star" })
      .click();
    await this.page.waitForTimeout(2000); // Wait for the page to load
    // await page.locator('xpath = //*[@id="repository-details-container"]/ul/li[3]/div/div[2]/form/button/span[1]').click();
  }
}