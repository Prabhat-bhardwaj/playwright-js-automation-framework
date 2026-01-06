## Playwright Automation Framework – DemoQA

### Project Overview

This document describes a **professional Playwright automation framework** developed using **JavaScript** and the **Playwright Test Runner**. The framework follows **industry best practices** to ensure scalability, maintainability, and stability in real-world automation projects.

The framework automates critical user workflows on the DemoQA application such as:

* Text Box form validation
* Check Box selection and hierarchy validation
* Radio Button functionality
* UI interaction validations (scrolling, clicking, form submission)

This project is suitable for **enterprise automation teams**, **interview demonstrations**, and **CI/CD-ready automation setups using Jenkins**.

---

## Technology Stack

* **Programming Language:** JavaScript (ES6+)
* **Automation Tool:** Playwright
* **Test Runner:** @playwright/test
* **Design Pattern:** Page Object Model (POM)
* **IDE:** Visual Studio Code
* **Test Data:** JSON
* **Reporting:** Playwright HTML Report
* **Version Control:** Git and GitHub
* **CI/CD:** Jenkins

---

## Framework Design Principles

* Page Object Model (POM)
* Single Responsibility Principle
* Reusable BasePage-driven architecture
* Playwright auto-wait instead of hard-coded delays
* Clear separation between page logic and test logic
* Externalized test data using JSON

---

## Project Structure

```
Playwright_JavaScript
│
├── package.json
├── playwright.config.js
├── README.md
├── .gitignore
│
├── pages
│   ├── base
│   │   └── BasePage.js
│   ├── elements
│   │   ├── TextBoxPage.js
│   │   ├── CheckBoxPage.js
│   │   └── RadioButtonPage.js
│   ├── forms
│   ├── widgets
│   └── interactions
│
├── tests
│   ├── elements
│   │   ├── textbox.spec.js
│   │   ├── checkbox.spec.js
│   │   └── radiobutton.spec.js
│
├── test-data
│   └── textbox.json
│
├── utils
│
└── playwright-report
```

---

## Key Framework Components

### BasePage

* Centralized reusable actions such as `click()` and `fill()`
* Holds common navigation logic (e.g., opening Elements section)
* Acts as the parent class for all page classes

### Page Classes

* One page = one class
* Contains locators and page-level actions only
* No assertions or test logic
* Extends BasePage using `super()`

### Test Classes (Spec Files)

* Written using Playwright Test syntax
* Handles assertions and validations
* Uses page classes for UI interactions

### Test Data (JSON)

* Externalized test data for better maintainability
* Supports data-driven testing
* Easy to update without modifying test logic

---

## Sample JSON Test Data

```json
{
  "validUser": {
    "fullName": "Prabhat Bhardwaj",
    "email": "prabhat@gmail.com",
    "currentAddress": "New Delhi",
    "permanentAddress": "Delhi, India"
  }
}
```

---

## Test Execution

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Run Specific Test File

```bash
npx playwright test tests/elements/textbox.spec.js
```

---

## Reporting

* Playwright automatically generates HTML reports
* To view the report:

```bash
npx playwright show-report
```

---

## CI/CD Integration (Jenkins)

* Jenkins pulls code from GitHub repository
* Installs dependencies using npm
* Executes Playwright tests
* Publishes HTML reports as build artifacts

This framework is fully **CI/CD-ready** and can be extended using Jenkins Pipelines.

---

## Best Practices Followed

* No hard-coded waits
* Stable and readable locators
* Clean Git history using `.gitignore`
* Modular and scalable design
* Interview-ready framework explanation

---

## Future Enhancements

* Cross-browser execution
* Parallel execution optimization
* Jenkinsfile-based pipeline
* Environment-based configuration
* Cloud execution support

---

## Author

**Prabhat Bhardwaj**
Senior QA / Automation Engineer

* GitHub: [https://github.com/Prabhat-bhardwaj](https://github.com/Prabhat-bhardwaj)
* LinkedIn: [https://www.linkedin.com/in/qa-prabhat-bhardwaj](https://www.linkedin.com/in/qa-prabhat-bhardwaj)

---

**This framework demonstrates a real-world Playwright automation architecture suitable for enterprise projects and technical interviews.**
