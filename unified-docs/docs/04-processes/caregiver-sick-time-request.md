---
title: Caregiver Sick Time Request
type: process
author: Coordinator Team
related_teams:
  - "Payroll "
tags:
  - process
  - manual-entry
  - risk
  - payroll
created_on: 2026-02-27
last_updated: 2026-02-27
---
## Description

The current workflow for processing caregiver Sick Time requests requires manual data entry into local files and email-based reporting.

---

## Current Process

1. **Request Intake:** The Coordinator receives a sick time request from the caregiver.
2. **Calendar Update (HHAX):**
    - Navigate to **[[HHAeXchange]]** -> Caregiver -> Absence/Restriction.
    - Select the reason code **"Sick"**.
    - *Business Rule:* Sick time accrued during the current year cannot be "cashed out" while the employee is actively working. It can only be utilized if the employee is officially **OFF schedule**.
3. **Excel Logging:** The Coordinator manually adds the employee’s details to a local Excel tracking file.
4. **Payroll Submission:**
    - Every **Tuesday**, this Excel file is sent via email to **Aliona** (Payroll) for processing.
    - *System Constraint:* Sick time requests for future dates are strictly prohibited; only past or current dates can be submitted.

---

## Known Issues

Since this process is reliant on manual entry, it creates a significant bottleneck for the Payroll department. 

- **Redundant Synchronization:** Data is entered twice (once in HHAX for scheduling and once in Excel for payroll).
- **File Dependency:** The process relies on local Excel files sent via email. There is no centralized database for sick time requests.
- **Timing Risk:** If a Coordinator forgets to send the email on Tuesday, the caregiver will not receive payment for that cycle, leading to high-friction complaints.
