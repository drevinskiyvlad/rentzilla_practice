## Summary of Repository

This repository contains automated tests using the WebDriverIO (wdio) testing framework.

## Requirements

Ensure you have the following prerequisites installed before running the tests:

- Node.js (v18 or higher)
- npm (Node Package Manager)

## Steps to Install

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/drevinskiyvlad/rentzilla_practice/
   ```

2. Navigate to the project directory.
   ```bash
   cd your-repo
   ```

3. Install the required dependencies.
   ```bash
   npm install
   ```
   
## Steps to Launch Tests

To run the tests, you may use the following commands:

### Run All Tests
```bash
npm run test
```

### Run Tests in Edge
```bash
npm run test:edge
```

### Run Tests in headless mode
```bash
npm run test:headless
```

## Steps to Create the Report

Use the following commands to generate and view the Allure report:

```bash
npm run report
```

Or run the following commands separately:

1. Generate the Allure report.
   ```bash
   npm run report:generate
   ```

2. Open the generated Allure report in the default browser.
   ```bash
   npm run report:open
   ```