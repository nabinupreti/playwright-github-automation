# Playwright GitHub Automation

This project automates GitHub workflows using [Playwright](https://playwright.dev/), including:

- Logging into GitHub
- Creating repositories
- Deleting repositories (with conditional password handling)
- Basic UI verification
- Structured code using Page Objects and Fixtures

## 📁 Project Structure

```
├── fixtures/               # JSON test data (valid/invalid users, repo names)
│   └── loginFixture.json
├── pageObjects/            # Page Object classes for GitHub pages
│   ├── login.po.js
│   └── repo.po.js
├── tests/                  # Playwright test files
│   ├── login.test.js
│   ├── createRepo.test.js
│   └── deleteRepo.test.js
├── playwright.config.js    # Playwright configuration
├── package.json            # NPM dependencies
└── README.md
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run tests

```bash
npx playwright test
```

### 3. Open HTML report

```bash
npx playwright show-report
```

## ✅ Features Demonstrated

- Login automation using Page Object Model
- Repository creation and deletion flows
- Conditional handling (e.g., password prompt only when needed)
- UI assertions with Playwright locators

## 🧪 Tools & Tech Stack

- [Playwright](https://playwright.dev/)
- Node.js
- GitHub UI
- JSON fixtures

<!-- ## 📸 Screenshots & Video

> You can enable video/screenshot recording in `playwright.config.js` for demo or debugging. -->

## 📄 License

This project is for educational and automation learning purposes.
