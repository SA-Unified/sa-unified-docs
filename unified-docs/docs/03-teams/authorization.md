---
title: Authorization
type: team
department_head: TBD
parent_department: Operations
tags:
  - internal
  - compliance
  - data_integrity
last_updated: 2026-02-27
---
<strong>Email</strong>: authdept@saunified.com

## Responsibilities

### 1. The Demographic Gatekeepers

The Auth Team holds exclusive administrative rights to modify core patient information within **[[HHAeXchange]]**.

- **Scope:** Physical Address, Primary Phone Numbers, and Patient Alerts.
- **The Logic:** If a Coordinator discovers a change in a patient’s status, they must submit a request to the Auth Team. This creates a mandatory audit trail for all demographic shifts.

### 2. Management of the "Pink Calendar"

In the HHAX ecosystem, the **"Pink Calendar"** represents the hard authorization limits set by the insurance payer.

- **Task:** The Auth Team enters the "Start Date," "End Date," and "Total Weekly Units" into the system.
- **Control:** If the Pink Calendar is not updated, the [[Coordinator Team]] cannot schedule visits, and the agency cannot bill for services.

### 3. Unit Calculation & Correction

As documented in the [[Process_Scheduling_Logic]], authorizations are often sent in decimal units (e.g., 0.25).

- **Function:** The Auth Team cross-checks the Coordinator's schedule against the Insurance Authorization Letter.
- **Correction:** They identify and resolve "Unit Mismatches" to ensure that the agency does not provide more care than it is legally authorized to bill for.

---

## 🛠️ Interaction Workflow

- **Input:** Emails from Coordinators regarding patient updates or new authorization letters.
- **Internal Sync:** Works closely with the **[[Intake Team]]** during the initial onboarding of a patient.
- **Output:** Validated patient profiles and active authorization windows in HHAX.


