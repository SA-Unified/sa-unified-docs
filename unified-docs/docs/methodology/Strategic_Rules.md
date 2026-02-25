# 📜 Strategic Data Rules (Rules of Engagement)

### 1. Architectural Principles

1. **SSOT (Single Source of Truth):**
    - Master Data: All primary patient and caregiver info (Legal Name, Address, SSN) must originate from [[HHAeXchange]].
    - ВDatabase Rule: In our local PostgreSQL (ODS), this data is `Read-Only`. We do not edit it; we only display it. If a name is wrong, it must be fixed in HHAX first.

2. **Immutability of IDs (The Sacred ID):**
    - Linking: Entity relationships must be mapped strictly via HHAX_ID (e.g., PatientID, CaregiverCode).
    - No Fuzzy Matching: Under no circumstances should we map data based on names or surnames, as these are prone to typos and changes.

3. **ODS Pattern:**
    - We are building an Operational Data Store (ODS). This is not a replacement for HHAeXchange but a highly flexible extension designed for internal reporting, automated Medicaid checks, and custom portal features.
### 2. Security and Infrastructure

1. **Read-Only Production:**
  - **No Hot-Fixes:** Manually editing code on the live server (e.g., using `nano index.php`) is strictly prohibited.
  - **Git-Only Deployment:** All changes must go through the standard Git workflow (Push -> Build -> Deploy).
2. **Isolation (PHI Protection)**
    - **Physical Separation:** The Portal Database (containing sensitive **PHI data**) must be physically isolated from the public-facing WordPress website.
    - **Network Security:** The public site should only communicate with the backend via secure, rate-limited APIs or webhooks.
3. **Backup Policy:**
    - The "Safety First" Rule: Any `UPDATE` or `DELETE` query targeting 10 or more records requires a manual table dump/backup immediately before execution. No exceptions.