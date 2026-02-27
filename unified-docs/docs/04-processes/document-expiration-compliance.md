---
title: Document Expiration (Compliance)
type: process
author: TBD
related_teams:
  - Compliance
tags:
  - compliance
  - hr
  - audit_risk
  - expiration
created_on: 2026-02-27
last_updated: 2026-02-27
---
## Description

<strong>Note</strong>: Certification occurs on an annual/semi-annual cycle.

The validity of a caregiver's license depends on their specific role and work history.

### 1. [[HHA]] Certificate (Home Health Aide)

- **Expiration:** Valid as long as the caregiver is active.
- **The "2-Year Rule":** If an HHA does not work for a period of **2 consecutive years**, their certificate "burns out" (becomes void). They must undergo retraining to be rehired.

### 2. [[PCA]] Certificate (Personal Care Assistant)

- **Expiration:** **Perpetual.** * **Note:** Unlike HHAs, PCA certificates do not expire due to inactivity, though they still require annual "In-Service" hours to remain compliant with the agency.

---

## Medical Requirements (Annual Update)

Medical compliance is the most volatile data point and requires constant monitoring to avoid service interruptions.

| **Requirement** | **Frequency** | **Notes** |
| --- | --- | --- |
| **PPD / Quantiferon** | Annual | TB Screening. If the test is positive, a **Chest X-Ray** is required. |
| **Chest X-Ray** | 10 Years | Only required if PPD/Quantiferon is positive. |
| **Drug Screen** | Annual | Must be an 8-10 panel lab result. |
| **Physical Exam** | Annual | Physician's statement confirming fitness for duty. |
| **In-Service** | 2x per Year | Mandatory training (6 hours every 6 months, totaling 12 hours/year). |

## Operational Enforcement Logic

1. **Notification Trigger:** 60 days before expiration, the caregiver is flagged in the "Expiring Compliance" report.
2. **The "Hard Block":** On the day of expiration, **[[HHAeXchange]]** automatically moves the caregiver to **"Compliance Hold."**
3. **Schedule Impact:** Any visits currently assigned to that caregiver in the "Pink Calendar" are automatically unassigned, and the **[[Coordinator Team]]** must find a **Temp** replacement immediately.
