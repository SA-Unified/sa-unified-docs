--- 
id: medicaid_recert
title: Eligibility (Medicaid Recertification)
type: system
author: Dmitrii 
vendor: internal
status: active
priority: high
integration: api (rest)
category: operations
tags: ['project','retention','revenue']
created_on: 2025-12-16
last_updated: 2026-02-26
related_teams: ['Tech', 'Coordinator']
---

## Description
A proactive notification tool for Medicaid Recertification. The goal is to prevent revenue loss due to client churn and minimize unpaid downtime for caregivers by ensuring continuous insurance coverage.

## Business Logic
The system monitors the recertification window to trigger alerts before the insurance expires.

- **Trigger:** 90 days prior to the Real Recertification Date.
- **Formula:** `Target Date = (Anniversary Date + 1 Year) - 90 Days`

## Implementation
1. **Target (Ideal):** [[eMedNY_API]] – Direct access required for real-time data accuracy.
2. **MVP (Fast):** **HHAX Report** "Eligibility Batch Review" – Requires manual export/import and data validation.
3. **Alternative:** **Inflowcare API** – Secondary backup for data enrichment.

## Action Items
- Workflow Design
- API Access
- Data Validation
