# Selenium Flaky Test Fix Example
By: Vikash – QA Automation Specialist

# Fixing Flaky Selenium Tests – Real-World Approach

Automation tests often fail randomly due to poor waits, weak locators, and unstable test design.
This repository demonstrates how I reduced flaky Selenium test failures by focusing on
stability, synchronization, and clean architecture.

---

## ❌ Common Causes of Flaky Tests
- Hard-coded waits (`sleep`, `pause`)
- Weak XPath selectors
- Elements not ready when actions are triggered
- Tests dependent on previous test state

---

## ✅ Solutions Implemented Here
✔ Explicit waits instead of hard waits  
✔ Strong, reusable locators  
✔ Page Object Model (POM)  
✔ Retry-safe test design  
✔ Clean test isolation  

---

## 🛠 Tech Stack
- Selenium WebDriver
- WebdriverIO
- JavaScript
- Page Object Model

---
## How to Run
1. Clone repo
2. Run `npm install`
3. Run tests: `npx wdio wdio.conf.js`

## Why This Matters
Unstable tests break CI/CD pipelines, delay releases, and hurt team confidence. This repo shows best practices that reduce those failures.


## 📂 Project Structure
