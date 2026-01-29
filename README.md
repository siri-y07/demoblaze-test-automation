# Demoblaze Cypress POM Framework

This repository contains an automated test framework built with Cypress. 
It is designed to validate critical user flows of the Demoblaze demo application(https://www.demoblaze.com/) in efficient manner.

-------------------------------

# File Path Structure

DEMOBLAZE-CYPRESS-POM-HEADLESS/
├── .github/
├── Assessment_Automation_Test_Results/
├── Assessment_Defects/
│   └── Assessment Task_ Defect Report.pdf
├── Assessment_TestPlan/
│   └── Assessment Task_ Test Plan.pdf
├── cypress/
│   ├── downloads/
│   ├── support/
│   └── videos/
├── node_modules/
├── tests/
│   └── e2e/
│       ├── cart.cy.js
│       ├── categories.cy.js
│       ├── place_order.cy.js
│       └── signup_login.cy.js
├── fixtures/
├── pages/
├── reports/
├── utils/
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md

--------------------------------

# Why These Test Cases Were Automated

The selected test cases represent the most critical end-to-end scenarios for this application. 
Automating them ensures quick feedback and high confidence in system stability after every deployment:

1. User Authentication (`signup_login.cy.js`)

   Covers sign-up and login workflows, validating user management features.

2. Category Browsing (`categories.cy.js`)

   Verifies product listing and navigation**, ensuring the storefront works correctly.

3. Shopping Cart (`cart.cy.js`)

   Ensures users can add and remove products in the cart.

4. Place Order (`place_order.cy.js`)

   Covers the checkout flow, the most business-critical scenario.

By automating these flows, we reduce the need for repetitive manual regression testing while covering high-risk areas of the application.

-----------------------------
# 1. Install Dependencies

```bash
npm install
```

# 2. Run Tests in Headless Mode

```bash
npm run test
```

# 3. Run Tests in Interactive Mode (Cypress Test Runner)

```bash
npx cypress open
```

# 4. Generate Mochawesome Report

After execution, reports will be available at:

```
tests/reports/report.html
```

To merge reports/View Reports:

```bash
npm run posttest
```

Videos are stored at cypress/videos
-------------------------------

# Why This Tech Stack?

Cypress → Modern, fast, and reliable automation tool with built-in assertions and parallel execution support.
Page Object Model (POM) → Increases maintainability and reusability by separating locators and test logic.
Mochawesome Reporting → Provides visually rich test reports for better analysis.
JavaScript/Node.js → Widely adopted, easy onboarding for QA and developers.

This combination ensures:

  Faster execution compared and easy to set up and run the test.
  Easy debugging with Cypress’s real-time reloading and time-travel features.
  Clear separation of concerns, making the framework scalable for future enhancements.

-------------------------------
# Additional Artifacts

- **Assessment Automation Results**  
  Videos are available in the folder: *Assessment_Automation_Test_Results*

- **Assessment Test Plan**  
  The test plan is available in the folder: *Assessment_TestPlan* with the file name Assessment_Task_ Test Plan.pdf

- **Assessment Defect Report**  
  Defect reports/issues found are available in the folder: *Assessment_Defects* with the file name Assessment_Task_ Defect Report.pdf

----------------------------------
# Summary

This Cypress POM framework provides:

- **Automated coverage** of core business flows  
- **Scalable structure** for adding new test cases  
- **Rich reporting** for stakeholders  
- **Future-proof stack** aligned with modern QA practices
-----------------------------------

