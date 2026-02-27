---
title: Caregiver Hiring Restrictions
type: process
author: TBD
related_teams:
  - Compliance
  - Coordinator
tags:
  - hiring
  - validation
  - fraud-prevention
  - compliance
created_on: 2026-01-15
last_updated: 2026-02-27
---
## Description

To prevent fraudulent billing and maintain regulatory compliance, the system must enforce a "Hard Block" on the following hiring scenarios. These relationships invalidate the independence required for Medicaid/Medicare reimbursement. 

### 1. The Proxy Constraint

- **Definition:** A "Proxy" is the designated representative who makes healthcare decisions and signs timesheets on behalf of the patient.
- **The Rule:** A Proxy **cannot** be hired as the caregiver.
- **Reasoning:** This prevents a "Self-Signing" scenario where one individual both provides the service and verifies that the service was performed.

### 2. Prohibited Kinship (Family Ties)

The following family members are strictly prohibited from being hired as a caregiver for the patient:

- **Immediate Family:** Spouses and Parents (including parents of a minor child patient).
- **Extended Family:** Children (biological or adopted), Sons-in-law, Daughters-in-law, and Foster children.
- **The Logic:** Even in the **[[CDPAP]]** program—which allows for *some* family hiring—these specific close-proximity roles are often restricted to prevent "collusive billing" where the household income is supplemented by Medicaid without actual care being delivered.

### 3. Residency & Contact Collisions

To ensure the caregiver is a separate entity from the patient:

- **Address Match:** The caregiver and the patient **cannot** share the same residential address.
- **Phone Match:** The caregiver and the patient **cannot** share the same primary or secondary phone number.
- **Fraud Indicator:** Shared contact info is a high-level trigger for Department of Health (DOH) audits, as it suggests the caregiver may be living with the patient (prohibited for most non-live-in contracts) or using the patient's phone to fake **[[EVV]]** clock-ins.

---

## System Enforcement (Logic Flow)

1. **Input:** New Hire Application (Caregiver) + Patient Assignment.
2. **Cross-Reference:** * Compare `caregiver.address` vs `patient.address`.
    - Compare `caregiver.phone` vs `patient.phone`.
    - Compare `caregiver.social_security` vs `patient.proxy_social_security`.
3. **Action:** If any match is found, the system must **Lock the Record** and trigger a "Compliance Review" alert to the **[[Auth Team]]**.
