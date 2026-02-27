---
title: New Patient Welcome Call
type: process
author: Dmitrii Izrailit
related_teams:
  - Coordinator
tags:
  - coordinator
  - clinical
  - patient
  - process
  - onboarding
  - compliance
created_on: 2025-12-10
last_updated: 2026-02-27
---
## Description

The New Patient Welcome Call is the primary initial phone call made to a new patient to verify demographic data, establish safety protocols, and initiate home care services. 

## Welcome Call Checklist

During the call, the following points **must** be verified and documented:

1. **Contact Info:** Confirm current physical address and primary phone number.
2. **Emergency Contact:** Establish a reliable emergency contact.
    - *Compliance Note:* If the patient cannot provide one, explicitly explain that in the event of an emergency, **911** will be called by default.
3. **Identification:** Confirm preferred language and **Social Security Number** (if missing from the initial file).
4. **Home Access & Environment:** Document gate/intercom codes, presence of pets, known allergies, and key arrangements.
    - *Safety Rule:* If a caregiver is given physical keys to the home, a **Key Form** must be signed and kept on file.
5. **EVV Briefing:** Explain the **Electronic Visit Verification** mandate. The patient must give verbal permission for the caregiver to use the patient's landline or personal phone for **Clock In/Out** purposes.

---

## Data Flow

The information collected must follow this specific internal routing:

1. **Collection:** The Coordinator gathers all data orally during the call.
2. **Demographic Update:** The Coordinator sends an email to the **[[Auth Team]]** to update the patient profile.
    - *System Constraint:* In most configurations, Coordinators do not have the administrative rights to change demographic fields directly in HHAX; this must go through the Auth Team.
3. **Clinical Trigger:** For all **New Patients**, the Coordinator must notify the **[[Clinical Team]]**.
    - *Time Mandate:* A nurse must be dispatched to the home for an initial assessment within **48 hours** of the welcome call.
